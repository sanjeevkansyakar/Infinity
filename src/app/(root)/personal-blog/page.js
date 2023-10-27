import UserBlog from "@/components/blogs/UserBlogs";
import React, { Suspense } from "react";

const PersonalBlog = () => {
  return (
    <section className="min-h-screen w-full text-center">
      <Suspense fallback={<p>Loading feed...</p>}>
        <UserBlog />
      </Suspense>
    </section>
  );
};

export default PersonalBlog;
