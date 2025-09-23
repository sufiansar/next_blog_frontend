"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  const blogInfo = Object.fromEntries(data.entries());
  const modify = {
    ...blogInfo,
    tages: blogInfo.tages
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: Number(blogInfo.authorId),
    isFeatured: Boolean(blogInfo.isFeatured),
  };
  console.log(modify);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    headers: {
      "content-Type": "Application/json",
    },
    body: JSON.stringify(modify),
  });
  const result = await res.json();
  if (result?.id) {
    revalidateTag("BLOG");
    redirect("/");
  }
  return result;
};
