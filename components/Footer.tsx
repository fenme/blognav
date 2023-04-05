import Link from 'next/link';
import Info from './Info';

export default function NavBar() {
    const info = Info();
    return (
        <footer className='footer'>
            <div className='copyright'>
                Copyright © 2023 - 2023 <a href="/" target="_blank" title="BlogNav" ><strong>博客导航</strong></a>. All Rights Reserved. FanMa Theme <a href="/" target="_blank" title="BlogNav" ><strong>BlogNav</strong></a> by <a href="https://fanmav.github.io" target="_blank" title="黄胜丰" ><strong>黄胜丰</strong></a>. Hosted by GitHub Pages.
            </div>
        </footer>
    )
}