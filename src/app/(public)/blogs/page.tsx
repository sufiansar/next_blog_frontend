import BlogCard from "@/components/modules/Blogs/BlogCard";

export const metadata = {
  title: "All Blogs | Next Blog",
};

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });
  const { data: blogs } = await res.json();
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold ">All Blogs</h2>
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto mt-5">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
