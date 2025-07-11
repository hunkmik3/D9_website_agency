import { NextResponse } from "next/server";
import { getSinglePage } from "@lib/contentParser";
import { getAllCategories } from "@lib/utils/textConverter";

export async function GET() {
  const posts = await getSinglePage("content/blogs");
  const categories = getAllCategories(posts);
  return NextResponse.json(categories);
} 