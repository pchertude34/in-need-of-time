This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installing nvm

This project currently uses node `v22`. The node version is managed by the `.nvmrc` and [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file) to help keep contributers insync. It's highly encouraged to install nvm prior to working in this project to avoid any package.lock versioning issues. [Follow the install instructions here to install nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

Once nvm is properly installed, run `nvm use` in your terminal to switch to the current nvm version.

### Setting up environment variables

This repo uses a root `.env.local` file for local secrets. Use `.env.example` as the source of truth for required variables:

1. Copy `.env.example` to `.env.local`
2. Fill in your local values

The variables are grouped by package/app domain:

- Root app (`frontend`): `NEXT_PUBLIC_*`, `OPENAI_API_KEY`, `FIRECRAWL_API_KEY`
- Database package (`packages/db`): `DATABASE_URL`
- Studio (`studio`): `SANITY_STUDIO_*`
- App SDK apps (`apps/*`): `SANITY_APP_*`

### Installing Docker and running local database

In time of need uses a database to audit AI agent calls and potentially other analytic tracking in the future. In order to run the application locally with these capabilities, you first need to install [Docker Desktop](https://www.docker.com/products/docker-desktop/). Once that's installed, run the following command to start the database locally:

```
npm run db:start
```

This will create a new ephemeral branch off of the main database, copying the existing data. Your database branch will persist for as long as your local container is running.

There are a few more helpful database related commands:

- `npm run db:stop` - Kill your local database
- `npm run db:reset` - Refresh your local database, creating a new branch from main and resetting the data
- `npm run db:push` - Run schema updates against your local database
- `npm run db:studio` - Start the local database viewer, available at [https://local.drizzle.studio](https://local.drizzle.studio)
- `npm run db:migrate` - Run any unran database migrations against your local database

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

## Accessing the CMS

We use [sanity.io](https://www.sanity.io/) for a content management system. This allows our content administrators to add and update providers and services within our system. Sanity provides us with a prebuilt CMS UI as well as database and query tools.

1. Setup a sanity account. You will need to be invited to the project.
2. Run `npm run studio` and open [http://localhost:3333](http://localhost:3333) to access the CMS locally

## Deploy on Vercel

We use [Vercel](https://vercel.com/) for deployment. Any time a commit is made to main a deployment is triggered to update the production build. The project overview is available [here](https://vercel.com/paytonchertudeguidedprojecs-projects/in-need-of-time).
