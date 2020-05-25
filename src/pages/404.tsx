import React from "react";
import { BgSection } from "../components/sections";
import { Layout } from "../components/layout";
import Head from "../components/head";
import { useFluidImages } from "../hooks/use-fluid-images";

const NotFound = () => {
  const { featuresBgImage } = useFluidImages();

  return (
    <>
      <Head
        title="Raini.dev | 404"
        description="Sorry, the page you are trying to access is not there."
        url="https://raini.dev/404"
      />
      <Layout>
        <BgSection
          Tag="section"
          fluid={featuresBgImage}
          fadeIn="soft"
          padding="12rem 5rem"
          margin="10rem 0 0"
        >
          <h1>Sorry, the page you are trying to access is not there.</h1>
        </BgSection>
      </Layout>
    </>
  );
};

export default NotFound;
