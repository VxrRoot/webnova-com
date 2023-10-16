import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Webnova - blog",
  description:
    "Tworzymy dedykowane strony internetowe, które pomagają naszym klientom maksymalizować zyski oraz realizować cele w ich biznesach",
  alternates: {
    canonical: `https://www.web-nova.pl/blog`,
  },
};

const Blog = () => {
  return (
    <main className="min-h-screen pt-32 max-w-7xl mx-auto">
      <h1 className="text-center">Wkrótce dostępne...</h1>
    </main>
  );
};

export default Blog;
