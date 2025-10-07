import { NextResponse } from "next/server";
import { getSinglePage } from "../../../lib/contentParser";
import { getAllCategories } from "../../../lib/utils/textConverter";

export async function GET() {
  try {
    const posts = await getSinglePage("content/blogs");
    const categories = getAllCategories(posts);
    
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
} 