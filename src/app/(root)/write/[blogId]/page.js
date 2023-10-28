import DashboardContent from "@/components/editor/DashboardContent";
import { getBlog } from "@/lib/database/services";
import React, { Suspense } from "react";

const page = async ({ params }) => {
  // const { blogId } = params;
  // const blog = await getBlog(blogId);
  return (
    <section className="min-h-screen pt-16">
      <h2 className="text-center text-3xl pb-4 font-semibold">Edit blog</h2>
      <div className="max-w-10xl mx-auto w-full max-md:mb-20">
        {/* <Suspense fallback={<p>Loading feed...</p>}> */}
        {/* <DashboardContent blog={JSON.parse(JSON.stringify(blog))} /> */}
        {/* </Suspense> */}
      </div>
    </section>
  );
};

export default page;
