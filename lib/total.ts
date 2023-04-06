import { getSortedSitesData } from "./Site";
import * as fs from 'fs';  
import * as path from 'path';  

export async function total() {

    const allPostsData = await getSortedSitesData()
    const formattedPosts = allPostsData.map(post => {
      return {
        ...post,
        date: post.date.toString()
      };
    });

  const categories = new Set(allPostsData.map((post) => post.sort));
  const numSorts = categories.size;
  const totalPosts = formattedPosts.length

  const Directory = path.join(process.cwd());
  const totalJsonPath = path.join(Directory,'components','totalInfo.ts');
  
  console.log(`网站总数:${totalJsonPath}`);

  if (fs.existsSync(totalJsonPath)) {    
    // 如果 total.json 文件存在    
    fs.writeFileSync(totalJsonPath, `export default function totalInfo() {
    
      const totalSites = ${totalPosts};
      const numSorts = ${numSorts};
      
      return {
          numSorts,
          totalSites,
      }
  }`);    
  } else {    
    // 如果 total.json 文件不存在    
   
    fs.writeFileSync(totalJsonPath, `export default function totalInfo() {
    
      const totalSites = ${totalPosts};
      const numSorts = ${numSorts};
      
      return {
          numSorts,
          totalSites,
      }
  }`);    
  }    
  
  console.log(`网站总数：${totalPosts}`);

  return { totalPosts, numSorts };
}
