import { getSortedSitesData } from "./Site";

export async function total() {

    const allPostsData = await getSortedSitesData()
    const formattedPosts = allPostsData.map(post => {
      return {
        ...post,
        date: post.date.toString()
      };
    });
  // Assume there are 100 posts in the database
  const totalPosts = formattedPosts.length
  console.log(`网站总数：${totalPosts}`);

  return { totalPosts };
}
