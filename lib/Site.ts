import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Info from '@/components/Info'

export const info = Info();
export const Directory = path.join(process.cwd(), info.path)

export async function getSortedSitesData() {

  const subdirectories = fs.readdirSync(Directory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  const posts = (await Promise.all(subdirectories.map(async (subdirectory) => {
    const directoryPath = path.join(Directory, subdirectory)
    const filenames = fs.readdirSync(directoryPath)
      .filter(filename => filename.endsWith('.md'))

      const allPostsData = await Promise.all(filenames.map(async (filename) => {
        const fullPath = path.join(Directory, [subdirectory, filename].join("//"))
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        const postData = {
            ...(matterResult.data as { name: string, link: string, icon: string, desc: string, sort: string, star: string, }),
        };
  
        return postData;
    }))
    const sortedPostsData = allPostsData.reduce((acc, elems) => {
        if(Array.isArray(elems)) {
            return acc.concat(elems);
        }
        acc.push(elems);
        return acc;
    }, []);

    return sortedPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
  }))).flat();

  return posts
}

