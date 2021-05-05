import Head from "next/head";
import Footer from "@nypl/dgx-react-footer";
import SampleComponent from "../src/SampleComponent";

const Home = () => {
  return (
    <div>
      {/* Add any <head> related elements here. */}
      <Head>
        <title>NYPL</title>
        <meta name="description" content="NYPL" />
        <link rel="icon" type="image/png" href="//d2znry4lg8s0tq.cloudfront.net/images/favicon.ico" />
      </Head>

      {/* This will render the NYPL Header. Make sure there is an element
      with a class name of "mainContent" for the skip navigation. */}
      <div id="Header-Placeholder" style={{ "minHeight": "230px" }}>
          <script type="text/javascript" src="https://header.nypl.org/dgx-header.min.js?skipNav=mainContent" async></script>
      </div>

      {/* Your component(s) here */}
      <SampleComponent />
      
      {/* This will render the NYPL Footer. */}
      <Footer />
    </div>
  );
};

export default Home;
