import { SiteRuntime } from "./SiteRuntime";
import totalInfo from "./totalInfo";

export default function InfoTotal() {
    const num = totalInfo();
    return (
        <section className="info">
            <div className="info-fanma">
            <h2>导航信息</h2>
                <ul>
                    <li><span className="l">网站目录：</span><span className="r">{num.numSorts}</span></li>
                    <li><span className="l">收录网站：</span><span className="r">{num.totalSites}</span></li>
                    <SiteRuntime />
                </ul>
            </div>
        </section>
    )
}
