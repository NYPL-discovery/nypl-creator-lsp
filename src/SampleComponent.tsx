import axios from "axios";
import React, { useEffect, useState } from "react";
import * as DS from "@nypl/design-system-react-components";

// If your components needs props, declare them in this interface.
interface SampleComponentProps {}

/**
 * Sample Component
 * Component that makes an API call to the "/api/collections"
 * endpoint provided by Nextjs. The function that returns that response
 * can be found in `/pages/api/collections.tsx`.
 */
const SampleComponent: React.FC<SampleComponentProps> =  () => { 
  /* An Example API Call
    * It is currently wrapped in `useEffect` so that it will only trigger
    * once when the component mounts. When used as a part of a search, the
    * post request should be triggered using an onClick handler function.
    * When doing that step, you won't need the `useEffect` call but the
    * `axios.post` logic will be the most relevant. Of course, feel free
    * to approach and implement this differently. */
  useEffect(() => {
    // This is wrapped in an IIFE (https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
    // to trigger the anonymous function right away.
    (async () => {
      let res;
      let error;

      try {
        res = await axios.post("/api/collections", { q: "cat" });
        // Process res here. Once you have your Digital Collections
        // API token set up in the `.env.local` file, you can see
        // the `res` object here by console logging it.

      } catch(e) {
        // Process any errors here.
        // error = e;
      }
    })();
  }, []);

  return <DS.Heading level={2}>Hello World!</DS.Heading>;
}

{/* Exporting SampleComponent so that it can be imported in index.tsx */}
export default SampleComponent;
