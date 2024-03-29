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

Prerequisites: `node` (v10 minimum) and `npm` (v6 minimum) or `yarn` (v1.20 minimum)
[Instructions to install node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Install the app using `npm install` or `yarn install`

Make sure the app runs locally in development mode with `npm run dev` or `yarn dev`, as well as in production mode with `npm run build` and `npm start`, or `yarn build` and `yarn start`.

## Unit Testing

We don't expect you to fully code a test suite in the given time limit, but it is important for us to see that you have put some thought into testing. Please describe (e.g. in comments) what a complete test suite would include and how it would be organized.

In case you do want to code your tests, we provide both `jest` and `mocha` as test runners in this application if you want to use either one. If you prefer something else, please explain your choice.

### Jest/React Testing Library

If you want to write React tests with React Testing Library, please edit `/src/SampleComponent.test.tsx`. If you add more files, that's okay but end it in `.test.tsx` for jest to pick it up.

To run unit tests with `jest` and `react-testing-library`, in the command line run:

```sh
$ npm run test:jest
```
### Mocha/Enzyme

If you want to write React tests with Enzyme, please edit `/src/SampleComponent.spec.tsx`. If you add more files, that's okay but end it in `.spec.tsx` for mocha to pick it up.

To run unit tests with `mocha` and `enzyme`, in the command line run:

```sh
$ npm run test:mocha
```
