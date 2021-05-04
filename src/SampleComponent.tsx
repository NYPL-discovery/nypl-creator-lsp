import axios from "axios";
import React, { useState } from "react";
import * as DS from "@nypl/design-system-react-components";
/**
 * Sample Component that calls the Digital Collections API.  
 */

const SampleComponent: React.FC<any> =  () => { 
    const [numResults, setNumRecords] = useState("loading");

    const getNumberOfRecords = async () => {
        const res = await axios.post("/api/collections", {q: "cat"});
        const data = await res.data;
        setNumRecords(data.numResults);
    }

    getNumberOfRecords();

    return <DS.Heading level={2}><>Got {numResults} Results</></DS.Heading>;
}

export default SampleComponent