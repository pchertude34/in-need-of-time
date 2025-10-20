This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installing nvm

This project currently uses node `v22`. The node version is managed by the `.nvmrc` and [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file) to help keep contributers insync. It's highly encouraged to install nvm prior to working in this project to avoid any package.lock versioning issues. [Follow the install instructions here to install nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

Once nvm is properly installed, run `nvm use` in your terminal to switch to the current nvm version.

### Setting up `.env.local`

NextJS utilizes a git ignored `.env.local` file to manage secrets locally. This file must be configured with the following variables for the application to run locally

```
NEXT_PUBLIC_GOOGLE_API_KEY=[your-google-api-key]
NEXT_PUBLIC_SANITY_PROJECT_ID="v3oqxhus"
NEXT_PUBLIC_SANITY_DATASET="development"
NEXT_PUBLIC_GOOGLE_MAPS_ID="6ab61aa807a92941"
NEXT_PUBLIC_LOCAL_API_KEY="p78Gr71fGzpCKRzh"
TOKEN_SECRET="super_secret_token"
OPENAI_API_KEY=[your-openai-api-key]
FIRECRAWL_API_KEY=[your-firecrawl-api-key]
# For local neon database
PARENT_BRANCH_ID="br-autumn-block-afev6757"
NEON_PROJECT_ID="holy-rain-30341906"
NEON_API_KEY=[your-neon-api-key]
# Connection string for local neon database
DATABASE_URL=postgres://neon:npg@localhost:5432/neondb
```

(replace values in brackets with your respective api keys)

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
2. run `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Accessing the CMS

We use [sanity.io](https://www.sanity.io/) for a content management system. This allows our content administrators to add and update providers and services within our system. Sanity provides us with a prebuilt CMS UI as well as database and query tools.

1. Setup a sanity account. You will need to be invited to the project.
2. Access the CMS locally at [http://localhost:3000/studio](http://localhost:3000/studio)

## Deploy on Vercel

We use [Vercel](https://vercel.com/) for deployment. Any time a commit is made to main a deployment is triggered to update the production build. The project overview is available [here](https://vercel.com/paytonchertudeguidedprojecs-projects/in-need-of-time).
