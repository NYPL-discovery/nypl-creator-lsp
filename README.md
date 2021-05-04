# NYPL Digital Collections Search app

This repo sets up a skeleton [Nextjs](https://nextjs.org/) application with NYPL-related npm packages:

* NYPL Design System
  * [Storybook](https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page)
  * [Github repo](https://github.com/NYPL/nypl-design-system#readme)
* NYPL Header
  * No need to modify
* NYPL Footer
  * No need to modify

## NYPL Digital Collections API

Sign up for an API token and read documentation here http://api.repo.nypl.org/. Create an `.env.local` file in the root directory to store your API token as an environment variable named `API_REPO_TOKEN`. Check `.env.example` for an example.

## Back-end

In `pages/api/collections.tsx`, there is a function that sets up an API call to the NYPL Digital Collections API. This returns an array of item results based on a search query. The client can make a `POST` request to this server function through the `/api/collections` endpoint.

## Front-end

After calling the backend to get items from the NYPL Digital Collections API, it is time to display them.

The main entry file is `pages/index.tsx` but components can be organized in `src/` or wherever makes sense.

## Running the App

Prerequisites: `npm (version?)` or `yarn (version?)` and `node (version?)`  
[Instructions to install node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Install the app using `npm install` or `yarn install`

Make sure the app runs locally in development mode with `npm run dev` or `yarn dev`, as well as in production mode with `npm run build` and `npm start`, or `yarn build` and `yarn start`.
