import Layout from "../components/layout/Layout/Layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {

  switch (Component.name) {
    case "Login":
      case "Register":
      return <Component {...pageProps} />;
    default:
      return (
        <Layout>
        <Component {...pageProps} />
        </Layout>
      );
  }

}

export default MyApp;
