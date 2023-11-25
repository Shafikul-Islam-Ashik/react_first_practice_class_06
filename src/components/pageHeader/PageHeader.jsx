import { Helmet } from "react-helmet";

const PageHeader = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>sorobindu | {title} </title>
      <link
        rel="shortcut icon"
        href="https://sorobindu.com/wp-content/uploads/2022/03/Shorobindu-favicon.png"
        type="image/x-icon"
      />
    </Helmet>
  );
};

export default PageHeader;
