import { getSortedSitesData } from "./Site";
import { siteSort } from "./SiteSort";

export async function sortOne() {
    const allSites = await siteSort();
    const common = allSites.filter(post => {
        return post.sort === "common";
        }).map(post => {
        return {
        ...post,
        date: post.date.toString(),
        };
        });
  return common;
}

export async function sortTwo() {
  const allSites = await siteSort();
  const common = allSites.filter(post => {
      return post.sort === "collects";
      }).map(post => {
      return {
      ...post,
      date: post.date.toString(),
      };
      });
return common;
}

export async function sortThree() {
  const allSites = await siteSort();
  const common = allSites.filter(post => {
      return post.sort === "recommend";
      }).map(post => {
      return {
      ...post,
      date: post.date.toString(),
      };
      });
return common;
}

export async function sortFour() {
  const allSites = await siteSort();
  const common = allSites.filter(post => {
      return post.sort === "blognav";
      }).map(post => {
      return {
      ...post,
      date: post.date.toString(),
      };
      });
return common;
}

export async function sortFive() {
  const allSites = await siteSort();
  const common = allSites.filter(post => {
      return post.sort === "framehot";
      }).map(post => {
      return {
      ...post,
      date: post.date.toString(),
      };
      });
return common;
}

export async function sortSix() {
  const allSites = await siteSort();
  const common = allSites.filter(post => {
      return post.sort === "chatgpt";
      }).map(post => {
      return {
      ...post,
      date: post.date.toString(),
      };
      });
return common;
}

// One two three four five six seven eight nine ten