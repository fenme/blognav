import { useEffect, useState } from "react";
import { SiteRuntime } from "./SiteRuntime";

export default function InfoTotal() {
    const [data, setData] = useState({ totalPosts: 0, numSorts: 0 });

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/total/');
        const json = await response.json();
        setData(json);
      }
      fetchData();
    }, []);
    useEffect(() => {  
        // 在生成静态页前将数据保存在状态变量中  
        localStorage.setItem("data", JSON.stringify(data));  
      }, [data]);
    return (
        <section className="info">
            <div className="info-fanma">
            <h2>导航信息</h2>
                <ul>
                    <li><span className="l">网站目录：</span><span className="r">{data.numSorts}</span></li>
                    <li><span className="l">收录网站：</span><span className="r">{data.totalPosts}</span></li>
                    <SiteRuntime />
                </ul>
            </div>
        </section>
    )
}

