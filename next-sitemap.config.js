/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fanmav.github.io', // 网站的 base URL
  changefreq: 'daily', // 页面更新频率
  priority: 0.7, // 优先级
  sitemapSize: 5000, // 生成的 sitemap 的最大值
  generateRobotsTxt: true, // 是否创建 robots.txt 文件  
  exclude: ['/fanma/*'], // 排除不需要在 sitemap 中的页面路径

  transform: async (config, path) => {

    let priority = config.priority // 先用默认优先级
    if (path === '/') {
      console.log("Changing priority for", path);
      priority = 0.9 // 修改为0.9
    } else if (path === '/article') {
      console.log("Changing priority for", path);
      path += '.html'
      priority = 0.8 // 新增一个链接设置优先级为0.9
    }

    // if (path.startsWith('/blog/')) {
    //   path += '.html'
    // }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
