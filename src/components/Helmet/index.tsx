import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

type Props = {
  pageTitle: string;
};

const index = ({ pageTitle }: Props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{pageTitle}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default index;
