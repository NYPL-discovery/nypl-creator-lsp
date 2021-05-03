// We need this file to import related .scss and .css files.
import "../styles/main.scss";
import "@nypl/design-system-react-components/dist/styles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
