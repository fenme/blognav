import Head from 'next/head'
import { total } from '@/lib/total'
import { GetStaticProps } from 'next'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import { buildTime } from '@/components/BuildTime'
import Info from '@/components/Info'
import TopButton from '@/components/TopButton'
import { sortFive, sortFour, sortOne, sortSix, sortThree, sortTwo } from '@/lib/sort'

export default function Home({
    totalsites,
    common,
    collects,
    recommend,
    blognav,
    framehot,
    chatgpt,
  }: {
    common: {
      name: string
      link: string
      icon: string
      desc: number
    }[];
    collects: {
      name: string
      link: string
      icon: string
      desc: number
    }[];
    recommend: {
      name: string
      link: string
      icon: string
      desc: number
    }[];
    blognav: {
      name: string
      link: string
      icon: string
      desc: number
    }[];
    framehot: {
      name: string
      link: string
      icon: string
      desc: number
    }[];
    chatgpt: {
      name: string
      link: string
      icon: string
      desc: number
    }[];
    totalsites: number;
  }) {
  // const title = [ siteTitle, name ];
  const info = Info();
  const namea = info.siteTitle;
  const nameb = ` - ${info.subTitle}`
  const name = info.name.concat('©');
  const title = name.concat(nameb);
  const desc = `${info.addr}的${info.name}已发表了 ${totalsites} 篇文章，总计约  字。${info.desc}`;
  
  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "http://schema.org",
        "@type": "Article",
        "name": "${info.name}",
        "headline": "${title}",
        "author": {
          "@type": "Person",
          "name": "${info.author}",
          "url": "${info.authorurl}"
        },
        "datePublished": "${buildTime}",
        "image": "${info.baseURL}/images/huangshengfeng.jpg",
        "articleSection": "${desc}",
        "url": "${info.baseURL}"
      }
  `,
    };
  }

  
  // const totalWordCount = calculateWordCount();

  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={info.keywords} />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={info.name} />
        <meta property="og:title" content={info.siteTitle} />
        <meta property="og:locale" content="zh-CN" />
        <meta property="og:url" content={info.baseURL} />
        <meta property="og:image" content={`${info.baseURL}/images/huangshengfeng.jpg`} />
        {/* <meta property="og:updated_time" content={date} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <section className='book'>
      <div className='column'>
          <h2 id="博主收藏">博主收藏</h2>
          <ul className={styles.list}>
              {collects.slice(0,10).map(({ name, link, icon, desc }) => (
              <li className="link" key={name}>
                    <a href={link} target="_blank">
                        <div className="link-img"><img src={icon} /></div>
                        <div className="link-title">
                            <p className="link-title-t">{name}</p>
                            <p>{desc}</p>
                        </div>
                    </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='column'>
          <h2 id="优秀博客">优秀博客</h2>
          <ul className={styles.list}>
              {common.slice(0,10).map(({ name, link, icon, desc }) => (
              <li className="link" key={name}>
                    <a href={link} target="_blank">
                        <div className="link-img"><img src={icon} /></div>
                        <div className="link-title">
                            <p className="link-title-t">{name}</p>
                            <p>{desc}</p>
                        </div>
                    </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='column'>
          <h2 id="博客推荐">博客推荐</h2>
          <ul className={styles.list}>
              {recommend.slice(0,10).map(({ name, link, icon, desc }) => (
              <li className="link" key={name}>
                    <a href={link} target="_blank">
                        <div className="link-img"><img src={icon} /></div>
                        <div className="link-title">
                            <p className="link-title-t">{name}</p>
                            <p>{desc}</p>
                        </div>
                    </a>
              </li>
            ))}
          </ul>
          <div className='column'>
          <h2 id="博客导航">博客导航</h2>
          <ul className={styles.list}>
              {blognav.slice(0,10).map(({ name, link, icon, desc }) => (
              <li className="link" key={name}>
                    <a href={link} target="_blank">
                        <div className="link-img"><img src={icon} /></div>
                        <div className="link-title">
                            <p className="link-title-t">{name}</p>
                            <p>{desc}</p>
                        </div>
                    </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='column'>
          <h2 id="博客框架">博客框架</h2>
          <ul className={styles.list}>
              {framehot.slice(0,20).map(({ name, link, icon, desc }) => (
              <li className="link" key={name}>
                    <a href={link} target="_blank">
                        <div className="link-img"><img src={icon} /></div>
                        <div className="link-title">
                            <p className="link-title-t">{name}</p>
                            <p>{desc}</p>
                        </div>
                    </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='column'>
          <h2 id="ChatGPT">ChatGPT</h2>
          <ul className={styles.list}>
              {chatgpt.slice(0,20).map(({ name, link, icon, desc }) => (
              <li className="link" key={name}>
                    <a href={link} target="_blank">
                        <div className="link-img"><img src={icon} /></div>
                        <div className="link-title">
                            <p className="link-title-t">{name}</p>
                            <p>{desc}</p>
                        </div>
                    </a>
              </li>
            ))}
          </ul>
        </div>

        </div>
      </section>
      <section className='elevator'>
        <TopButton />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

    const allCommon = sortOne()
    const common = (await allCommon).map(post => {
        return {
          ...post,
        };
      });

      const allCollects = sortTwo()
      const collects = (await allCollects).map(post => {
          return {
            ...post,
          };
        });

      const allRecommend = sortThree()
      const recommend = (await allRecommend).map(post => {
          return {
            ...post,
          };
        });

      const allBlogNav = sortFour()
      const blognav = (await allBlogNav).map(post => {
          return {
            ...post,
          };
        });

      const allFrameHot = sortFive()
      const framehot = (await allFrameHot).map(post => {
          return {
            ...post,
          };
        });

      const allChatGPT = sortSix()
      const chatgpt = (await allChatGPT).map(post => {
          return {
            ...post,
          };
        });

      const totalsites = await total();

    return {
      props: {
        common,
        collects,
        recommend,
        blognav,
        framehot,
        totalsites,
        chatgpt,
      }
    }
}
