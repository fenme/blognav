import { useEffect, useState } from "react";
import { SiteRuntime } from "./SiteRuntime";

export default function InfoTotal() {

    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [numSorts, setNumSorts] = useState<number>(0);

    useEffect(() => {
      async function fetchTotal() {
        const res = await fetch("/api/total");
        const { totalPosts, numSorts } = await res.json();
        setTotalPosts(totalPosts);
        setNumSorts(numSorts);
      }
      fetchTotal();
    }, []);

    return (
        <section className="info">
            <div className="info-fanma">
            <h2>导航信息</h2>
                <ul>
                    <li><span className="l">网站目录：</span><span className="r">{numSorts}</span></li>
                    <li><span className="l">收录网站：</span><span className="r">{totalPosts}</span></li>
                    <SiteRuntime />
                </ul>
            </div>
        </section>
    )
}

