// lib/data.ts
"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "./mongodb";
import Prompt from "@/models/Prompt";

// GET all prompts (with optional search filter)
export async function getPrompts(search?: string) {
  await connectToDatabase();

  let query = {};
  if (search) {
    // Search by title OR category (case-insensitive)
    query = {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    };
  }

  const prompts = await Prompt.find(query)
    .sort({ createdAt: -1 }) // Newest first
    .lean(); // Convert to plain JavaScript objects

  // Convert MongoDB _id to string and add an 'id' field for our UI
  return prompts.map((prompt) => ({
    id: prompt._id.toString(),
    title: prompt.title,
    content: prompt.content,
    category: prompt.category,
  }));
}

// ADD a new prompt
export async function addPrompt(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;

  // Basic validation
  if (!title || !content || !category) {
    throw new Error("All fields are required.");
  }

  await connectToDatabase();

  const newPrompt = await Prompt.create({
    title,
    content,
    category,
  });

  // Revalidate the homepage so it shows the new data instantly
  revalidatePath("/");

  return {
    id: newPrompt._id.toString(),
    title: newPrompt.title,
    content: newPrompt.content,
    category: newPrompt.category,
  };
}