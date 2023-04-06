import Info from '@/components/Info';
import Sorts from '@/components/sorts';
import Chevron from '@/components/Chevron';
import InfoTotal from './InfoTotal';

export default function NavBar() {
    const info = Info();
    const sort = Sorts();
    return (
        <nav className='nav'>
            <div className="nav-top">
                <div className="logo">
                    <div className="logo-w">
                        <a href="/">
                            <span className="b"><span className="bb">B</span></span>
                            <h1 className="title">{info.name}</h1>
                        </a>
                    </div>
                </div>
                <div className="menu">
                <ul id="main-menu" className="main-menu">
                    {sort.sorts.map(({ sort, id }) => (
                        <li key={id}>
                            <a href={`#${sort}`}>
                                <i className="linecons-thumbs-up"></i><span className="title">{sort}</span>
                                <Chevron />
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
                <InfoTotal />
            </div>
        </nav>
    )
}