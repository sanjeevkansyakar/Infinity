"use client";

import AllBlogs from "@/components/blogs/AllBlogs";
import Searchbar from "@/components/Searchbar";
import axios from "axios";
import React, { useState } from "react";

function Blog() {
  const [searchResults, setSearchResults] = useState();

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      const sortedData = response.data.results.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setSearchResults(sortedData);
    } catch (error) {
      console.error("Error while searching:", error);
    }
  };
  return (
    <section className="max-w-10xl mx-auto pt-8">
      <div className="w-full px-4 flex justify-between items-center">
        <h2 className="text-4xl font-semibold pt-6 max-md:hidden underline">
          Latest in Tech and Programming
        </h2>
        <Searchbar onSearch={handleSearch} />
      </div>
      <div>
        <AllBlogs searchResults={searchResults} />
      </div>
    </section>
  );
}

export default Blog;
