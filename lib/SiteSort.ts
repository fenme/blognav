import { getSortedSitesData } from "./Site";

export async function siteSort() {
  // 获取站点数据
  const allSitesData = await getSortedSitesData();

  // 将站点数据分成两个数组：一个含有 star 的，一个不含 star 的
  const sitesWithStar = allSitesData.filter((site) => site.star);
  const sitesWithoutStar = allSitesData.filter((site) => !site.star);

  // 对含有 star 的站点数组按照 star 数值大小进行排序，并将排序后的结果加到数组最前面
  const sortedSitesWithStar = sitesWithStar
    .sort((a, b) => b.star - a.star)
    .concat(sitesWithoutStar);

  // 将两个数组合并成一个数组
  const sortedSites = sortedSitesWithStar.map(post => {
    return {
    ...post,
    date: post.date.toString(),
    };
    });

  // 输出排序结果
//   console.log(`排序：${sitesWithStar.map((site) => [site.star, site.link])}`);

  // 返回最终的排序结果
  return sortedSites;
}

// import { getSortedSitesData } from "./Site";

// export async function siteSort() {

//     const allSitesData = await getSortedSitesData()
//     const sitesSort = allSitesData.map(post => {
//         return {
//         ...post,
//         date: post.date.toString(),
//         };
//         });
//         console.log(`排序：${sitesSort.map(post => post.star)}`);
//   return sitesSort;
// }