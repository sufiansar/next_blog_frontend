"use client";
import { useState } from "react";
import Form from "next/form";
import { create } from "@/actions/create";
export default function CreateBlogForm() {


  return (
    <Form
      action={create}
      className="max-w-md mx-auto p-6 space-y-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-semibold">Create Blog</h2>

      <input
        type="text"
        name="title"
        // value={formData.title}
        // onChange={handleChange}
        placeholder="Title"
        className="w-full border p-2 rounded"
      />

      <textarea
        name="content"
        // value={formData.content}
        // onChange={handleChange}
        placeholder="Content"
        className="w-full border p-2 rounded"
        rows={4}
      />

      <input
        type="text"
        name="thumbnail"
        // value={formData.thumbnail}
        // onChange={handleChange}
        placeholder="Thumbnail URL"
        className="w-full border p-2 rounded"
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isFeatured"
          // checked={formData.isFeatured}
          // onChange={handleChange}
        />
        Featured
      </label>

      <input
        type="text"
        name="tages"
        // value={formData.tages}
        // onChange={handleChange}
        placeholder="Tags (comma separated)"
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        name="authorId"
        // value={formData.authorId}
        // onChange={handleChange}
        placeholder="Author ID"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Submit
      </button>
    </Form>
  );
}
