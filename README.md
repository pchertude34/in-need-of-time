# In Need of Time

In Need of Time helps people in crisis — single moms, people experiencing homelessness, people recently released from prison — find providers such as health clinics, food banks, shelters, and free-clothing programs.

## Project overview

This repo is an npm workspaces monorepo. Provider content lives in [Sanity](https://www.sanity.io/) and is edited in the Studio; the public site reads it from there. An AI agent, run by the API, helps content editors research and fill in provider details.

| Part               | Folder                                                                                          | What it is                                                                                     | Deployed to                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Frontend           | `frontend/`                                                                                     | Next.js public site where people search for providers                                          | [Vercel](https://vercel.com/paytonchertudeguidedprojecs-projects/in-need-of-time-frontend) |
| Studio             | `studio/`                                                                                       | Sanity Studio, the CMS content administrators use to add and update providers                  | [Vercel](https://vercel.com/paytonchertudeguidedprojecs-projects/in-need-of-time-studio)   |
| API                | `packages/api/`                                                                                 | Express server: Sanity-based sign-in, the provider agent, and geocoding                        | [Railway](https://railway.com/project/939e98c5-9eb4-4109-a370-4e16860a015e)                |
| AI Provider Editor | `apps/ai-provider-editor/`                                                                      | Sanity App SDK app where editors work with the provider agent; linked from the Studio's navbar | Sanity, via `npm run app:ai-provider-editor:deploy`                                        |
| Agent core         | `packages/agent-core/`                                                                          | The AI agent runtime (Vercel AI SDK + DBOS durable workflows), run inside the API              | Ships with the API                                                                         |
| Database           | `packages/db/`                                                                                  | Drizzle ORM schema and client for Postgres (Neon), used for agent jobs and audit logs          | [Neon](https://neon.tech/)                                                                 |
| Shared libraries   | `packages/components/`, `packages/hooks/`, `packages/types/`, `packages/ui/`, `packages/utils/` | Code shared by the apps above                                                                  | Bundled into the apps that use them                                                        |

Content flows like this: editors update providers in the **Studio** (or with help from the agent in the **AI Provider Editor**, which calls the **API**), the content is stored in Sanity, and the **Frontend** queries Sanity to show it to the public.

## Getting Started

### Installing nvm

This project currently uses node `v22`. The node version is managed by the `.nvmrc` and [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file) to help keep contributers insync. It's highly encouraged to install nvm prior to working in this project to avoid any package.lock versioning issues. [Follow the install instructions here to install nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

Once nvm is properly installed, run `nvm use` in your terminal to switch to the current nvm version.

### Setting up environment variables

This repo uses a root `.env.local` file for local secrets. Use `.env.example` as the source of truth for required variables:

1. Copy `.env.example` to `.env.local`
2. Fill in your local values

`.env.example` has one section per workspace, listing every variable that workspace reads:

- Frontend (`frontend`): `NEXT_PUBLIC_*`
- Studio (`studio`): `SANITY_STUDIO_*`
- App SDK apps (`apps/*`): `SANITY_APP_*`
- Database package (`packages/db`): `DATABASE_URL`
- Local Neon database (`docker-compose.yml`): `PARENT_BRANCH_ID`, `NEON_PROJECT_ID`, `NEON_API_KEY`
- API (`packages/api`): `API_PORT`, `CORS_ALLOWED_ORIGINS`, `API_SESSION_SECRET`, `SANITY_PROJECT_ID`
- Agent (`packages/agent-core`): `OPENAI_API_KEY`, `FIRECRAWL_API_KEY`, `LMNR_PROJECT_API_KEY`, `SANITY_API_TOKEN`, `SANITY_DATASET`

A variable shared by several workspaces is set once and appears commented out in the other sections. Commented-out lines with a value are optional, and the value shown is the default.

### Installing Docker and running local database

In time of need uses a database to audit AI agent calls and potentially other analytic tracking in the future. In order to run the application locally with these capabilities, you first need to install [Docker Desktop](https://www.docker.com/products/docker-desktop/). Once that's installed, run the following command to start the database locally:

```
npm run db:start
```

This starts a plain Postgres container. It needs no Neon account, and its data persists across `db:stop`/`db:start` cycles. After starting it for the first time, run `npm run db:push` to create the tables.

There are a few more helpful database related commands:

- `npm run db:stop` - Kill your local database
- `npm run db:reset` - Wipe your local database and start it fresh (you'll need to `db:push` again)
- `npm run db:push` - Run schema updates against your local database
- `npm run db:studio` - Start the local database viewer, available at [https://local.drizzle.studio](https://local.drizzle.studio)
- `npm run db:migrate` - Run any unran database migrations against your local database

#### Running against a real Neon branch instead

If you need to verify something against Neon itself, `npm run db:start:neon` swaps the plain Postgres container for `neon-local`, which proxies to an ephemeral branch off of the main database, copying the existing data. That branch is deleted when you `npm run db:stop:neon`, and it requires `NEON_PROJECT_ID`, `NEON_API_KEY`, and `PARENT_BRANCH_ID` in your `.env.local`. Both databases listen on port 5432 with the same credentials, so `DATABASE_URL` doesn't change — but only run one at a time.

### Running locally

1. Make sure all dependencies are up to date by running `npm install`

#### Frontend

1. Run `npm run frontend` to start the Next.js dev server
2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

#### Studio

1. Run `npm run studio` to start the Sanity Studio dev server
2. Open [http://localhost:3333](http://localhost:3333) with your browser to access the CMS

#### App SDK Apps

The `apps/` workspace contains Sanity App SDK apps.

1. Ensure your `.env.local` includes all required `SANITY_APP_*` variables from `.env.example`
2. Run a specific app script from the root workspace, for example:

```
npm run app:ai-provider-editor
```

You can also run any app package directly with npm workspaces:

```
npm run -w @in-need-of-time/ai-provider-editor dev
```

When the app starts, Sanity prints the local URL and a Sanity dashboard URL for loading the app.

#### API

1. Start the local database (`npm run db:start`), since the API's agent workflows store their state there
2. Run `npm run api:dev` to start the API, available at [http://localhost:4011](http://localhost:4011) (check [http://localhost:4011/health](http://localhost:4011/health))

## Accessing the CMS

We use [sanity.io](https://www.sanity.io/) for a content management system. This allows our content administrators to add and update providers and services within our system. Sanity provides us with a prebuilt CMS UI as well as database and query tools.

1. Setup a sanity account. You will need to be invited to the project.
2. Run `npm run studio` and open [http://localhost:3333](http://localhost:3333) to access the CMS locally

## Deployments

| Part               | Host                            | Project                                                                                                      |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Frontend           | [Vercel](https://vercel.com/)   | [in-need-of-time-frontend](https://vercel.com/paytonchertudeguidedprojecs-projects/in-need-of-time-frontend) |
| Studio             | [Vercel](https://vercel.com/)   | [in-need-of-time-studio](https://vercel.com/paytonchertudeguidedprojecs-projects/in-need-of-time-studio)     |
| API                | [Railway](https://railway.com/) | [Railway project](https://railway.com/project/939e98c5-9eb4-4109-a370-4e16860a015e)                          |
| AI Provider Editor | Sanity                          | Deployed with `npm run app:ai-provider-editor:deploy`, which reads `.env.production`                         |

Each host has its own copy of the environment variables that part needs, so when you add a variable to `.env.example`, also add it to the matching project's settings.
