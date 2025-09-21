import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";

const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();

  return blogs.slice(0, 10).map((blog: any) => ({
    blogId: String(blog.id),
  }));
};

const DetailsBlog = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  console.log(blogId);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blogs = await res.json();
  console.log(blogs);

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard blog={blogs} />
    </div>
  );
};

export default DetailsBlog;
