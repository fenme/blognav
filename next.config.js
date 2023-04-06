/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    trailingSlash: true,    
    // pageExtensions: ['html'],
    // exportPathMap: async function (defaultPathMap, {dev, dir, outDir}) {
    //   return {

    //     '/blog/[...slug]': { page: '/blog/[...slug]', path: '/blog/:slug*' }
    //     // 其他动态路由
    //   };
    // },
    // router: { base: 'https://fanmau.github.io' },
    // assetPrefix: isProd ? 'https://fanmau.github.io' : undefined,
    // exportPathMap: async function (defaultPathMap) {
    //   return {
    //     '/sitemap.xml': { page: '/sitemap.xml' },
    //     ...defaultPathMap,
    //   }
    // },
    // async redirects() {
    //   return [
    //     {
    //       source: '/blog/',
    //       destination: '/posts/:slug',
    //       permanent: true,
    //     },
    //   ]
    // },
    // async rewrites() {
    //   return [
    //     {
    //       source: '/blog',
    //       destination: '/blog/index.html',
    //     },
    //   ];
    // },
  
  }

  // if (process.env.NODE_ENV === 'production') {
  //   nextConfig.rewrites = () => [
  //     {
  //       source: '/fanma/:slug*/index.html',
  //       destination: '/fanma/:slug*.html',
  //     },
  //   ];
  // }
  
  module.exports = nextConfig