import Head from "next/head";
import axios from "axios";
import { Header, navConfig } from "@nypl/dgx-header-component";
import Footer from "@nypl/dgx-react-footer";
import SampleComponent from "../src/SampleComponent";

const Home = () => {
  return (
    <div >
      {/* Add any <head> related elements here. */}
      <Head>
        <title>NYPL</title>
        <meta name="description" content="NYPL" />
        <link rel="icon" type="image/png" href="//d2znry4lg8s0tq.cloudfront.net/images/favicon.ico" />
      </Head>

      {/* This will render the NYPL Header. Make sure there is an element
      with a class name of "main-content" for the skip navigation.*/}
      <Header
        skipNav={{ target: "main-content" }}
        navData={navConfig.current}
      />

      {/* Your component(s) here */}
      <SampleComponent></SampleComponent>
      {/* This will render the NYPL Footer. */}
      <Footer />
    </div>
  );
};

export default Home;
