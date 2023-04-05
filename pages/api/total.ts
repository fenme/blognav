import { NextApiRequest, NextApiResponse } from "next";
import { getSortedSitesData } from "@/lib/Site";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allPostsData = await getSortedSitesData();
  const formattedPosts = allPostsData.map((post) => ({
    ...post,
    date: post.date.toString(),
  }));

  const categories = new Set(allPostsData.map((post) => post.sort));
  const numSorts = categories.size;

  const totalPosts = formattedPosts.length;

  res.status(200).json({ totalPosts, numSorts });
}