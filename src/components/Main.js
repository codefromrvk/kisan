import React from "react";
import { Footer } from "./Footer";
import Hero from "./Hero";
import Recipe from "./Recipe";
import RelatedArticles from "./RelatedArticles";

export const Main = () => {
  return (
    <>
      <Hero />
      <Recipe />
      <RelatedArticles />
      <Footer />
    </>
  );
};
