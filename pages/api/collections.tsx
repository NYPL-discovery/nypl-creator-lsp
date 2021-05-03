import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

/**
 * CollectionsAPI
 * @param req Nextjs `req` object
 * @param res Nextjs `res` object
 * @returns Either an error JSON response or a successful response with an
 *  array of Digital Collections result items. Each result item should
 *  have relevant information including the title and image URL.
 */
async function CollectionsAPI(req: NextApiRequest, res: NextApiResponse) {
  // The main Digital Collections API endpoint. Documentation can be found
  // here: http://api.repo.nypl.org/
  const apiURL = "http://api.repo.nypl.org/api/v1/items/search?publicDomainOnly=true";
  // Make sure you get an API token from:
  // http://api.repo.nypl.org/
  // and set it as an environment variable.
  const apiToken = process.env.API_REPO_TOKEN;
  const results = {};

  // Note:
  // You may need to make additional requests for each Digital Collections
  // item you receive from the initial request for additional metadata like
  // an item's image URL.

  return res.json({
    status: 200,
    results,
  })
}

export default CollectionsAPI;
