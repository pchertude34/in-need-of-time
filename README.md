This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installing nvm

This project currently uses node `v22`. The node version is managed by the `.nvmrc` and [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file) to help keep contributers insync. It's highly encouraged to install nvm prior to working in this project to avoid any package.lock versioning issues. [Follow the install instructions here to install nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

Once nvm is properly installed, run `nvm use` in your terminal to switch to the current nvm version.

### Setting up `.env.local`

NextJS utilizes a git ignored `.env.local` file to manage secrets locally. This file must be configured with the following variables for the application to run locally

```
NEXT_PUBLIC_GOOGLE_API_KEY="AIzaSyBxozaTWLbdWDCw78MnTDe140n8qomsMr0"
NEXT_PUBLIC_SANITY_PROJECT_ID="v3oqxhus"
NEXT_PUBLIC_SANITY_DATASET="development"
NEXT_PUBLIC_GOOGLE_MAPS_ID="6ab61aa807a92941"
NEXT_PUBLIC_LOCAL_API_KEY="p78Gr71fGzpCKRzh"
TOKEN_SECRET="super_secret_token"
OPENAI_API_KEY=[your-openai-api-key]
FIRECRAWL_API_KEY=[your-firecrawl-api-key]
```

(replace values in brackets with your respective api keys)

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
