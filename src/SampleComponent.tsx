import axios from "axios";
import React, { useEffect, useState } from "react";
import * as DS from "@nypl/design-system-react-components";
/**
 * Sample Component that shows an API call,   
 */

const SampleComponent: React.FC<any> =  () => { 

    {/* An Example API Call
     It is currently wrapped in `useEffect` so that it will only trigger once. 
     When used as a part of a search, the post request should be triggered using
     an onClick handler */}
    
    useEffect(() => {
        async () => {
            const res = await axios.post("/api/collections", {q: "cat"});
            // Process res here
        }
    })


    {/* Exporting a sample component so that it can be imported in index.tsx */}
    return <DS.Heading level={2}>Hello World!</DS.Heading>;
}

export default SampleComponent