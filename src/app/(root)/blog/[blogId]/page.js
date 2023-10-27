import HeroBlog from "@/components/blogs/HeroBlog";
import RelatedBlog from "@/components/blogs/RelatedBlog";
import { getBlog } from "@/lib/database/services";

const SingleBlog = async ({ params }) => {
  const { blogId } = params;
  const blog = await getBlog(blogId);
  return (
    <section className="flex max-w-[1200px] mx-auto max-lg:flex-col gap-4 my-10 max-md:mx-4 pt-8">
      {/* Main Section */}
      <HeroBlog blog={JSON.parse(JSON.stringify(blog))} />
      {/* Releated Post Section */}
      <RelatedBlog blog={JSON.parse(JSON.stringify(blog))} />
    </section>
  );
};

export default SingleBlog;
