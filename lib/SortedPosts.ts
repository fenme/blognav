import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Info from '@/components/Info'

export const info = Info();
export const Directory = path.join(process.cwd(), info.path)

export async function getSortedPosts() {
    // initialize counter to start from the first post
    let num = 1;
    
    const subdirectories = fs.readdirSync(Directory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  
    const postData = (await Promise.all(subdirectories.map(async (subdirectory) => {
      const directoryPath = path.join(Directory, subdirectory)
      const filenames = fs.readdirSync(directoryPath)
        .filter(filename => filename.endsWith('.md'))
  
      const allPostsData = await Promise.all(filenames.map(async (filename) => {
        const slug = [subdirectory, filename.replace(/\.md$/, '').concat('.html')].join("/")
        const fullPath = path.join(Directory, [subdirectory, filename].join("//"))
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        const contentCount = await remark()
          .use(html, { sanitize: false })
          .process(matterResult.content)
  
        const contCount = contentCount.toString().replace(/<\/?(h\d).*>/g, '');
        const NoImages = contCount.replace(/<img[^>]*>/g, '').trim();
        const NoHtml = NoImages.replace(/<\/?[^>]+(>|$)/g, "");
        const cnMatches = NoHtml.match(/[\u4e00-\u9fa5]/g) || [];
        const enMatches = NoHtml.match(/[a-zA-Z]+/g) || [];
        const cnCount = cnMatches.length;
        const enCount = enMatches.length;
        const wordCount = cnCount + enCount - info.exclude;
  
        const postData = {
          num,
          slug,
          wordCount,
          ...(matterResult.data as { date: string; title: string })
        };
  
        num++;
        return postData;
      }));
  
      return allPostsData;
    })))
    .flat()
    .sort((a, b) => (a.date < b.date ? 1 : -1)) // sort by date in descending order
    .map((post, index, array) => {
      // Reverse the numbering so that the first post has the highest number
      post.num = array.length - index;
      return post;
    });
  
    return postData;
  }