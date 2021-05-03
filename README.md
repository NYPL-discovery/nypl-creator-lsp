# NYPL Digital Collections Search app

This repo sets up a skeleton Nextjs application with NYPL-related npm packages:

* NYPL Design System
  * Storybook - https://nypl.github.io/nypl-design-system/storybook-static/?path=/story/introduction--page
  * Github repo - https://github.com/NYPL/nypl-design-system#readme
* NYPL Header
* NYPL Footer

## NYPL Digital Collections API

Sign up for an API token and read documentation here http://api.repo.nypl.org/.

## Back-end

In `pages/api/collections.tsx`, there is a skeleton function that sets up an API call to the NYPL Digital Collections API.

## Front-end

After calling the backend to get items from the NYPL Digital Collections API, it is time to display them.

The main entry file is `pages/index.tsx` but components can be organized in `src/`.
