import { useRef, useState } from "react";
import BrandLogo from "../../assets/images/simplifylogo.svg";


export const Navbar = () => {

    const [isHidden, setHidden] = useState(true);

    const navBarRef = useRef("-100%");

    const openSideBar = (event) => {
        event.stopPropagation();
        navBarRef.current.style.right = "0";
        setHidden(!isHidden);
    }

    const closeSideBar = (event) => {
        event.stopPropagation();
        navBarRef.current.style.right = "-100%";
        setHidden(!isHidden);
    }

    return (<nav className="navbar">
        <div className="container-xl">
            <div className="nav-brand">
                <img src={BrandLogo} alt="Brand Logo" width="30" height="30" />
                <span className="nav-brand-title">implify</span>
            </div>
            <div className="nav-wrapper">
                <div className="collapse navbar-collapse mob_none">
                    <ul className="navbar-nav flex-center">
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li className="nav-item"><a href="/documentation">Documentation</a></li>
                        <li className="nav-item"><a href="/about">About</a></li>
                    </ul>
                    <a download href="/dist/css/simplify.min.css">
                        <button className="btn btn-danger"><i class="fa fa-cloud-download" aria-hidden="true"></i> Download</button>
                    </a>
                </div>
                <div className="collapse navbar-collapse pc_none">
                    <div className="menuNav" ref={navBarRef}>
                        <div class="menuNav-list">
                            <ul class="menuNav-items">
                                <li className="menuNav-item"><a href="/">Home</a></li>
                                <li className="menuNav-item"><a href="/documentation">Documentation</a></li>
                                <li className="menuNav-item"><a href="/about">About</a></li>
                            </ul>
                        </div>
                        <div class="menuNav-list">
                            <span class="menuNav-list-name">Getting Started</span>
                            <ul class="menuNav-items">
                                <li className="menuNav-item"><a href="/documentation">Installation</a></li>
                            </ul>
                        </div>
                        <div class="menuNav-list">
                            <span class="menuNav-list-name">Components</span>
                            <ul class="menuNav-items">
                                <li class="menuNav-item"><a href="/avatar">Avatar</a></li>
                                <li class="menuNav-item"><a href="/alert">Alert</a></li>
                                <li class="menuNav-item"><a href="/badge">Badge</a></li>
                                <li class="menuNav-item"><a href="/button">Button</a></li>
                                <li class="menuNav-item"><a href="/card">Card</a></li>
                                <li class="menuNav-item"><a href="/form">Form</a></li>
                                <li class="menuNav-item"><a href="/image">Image</a></li>
                                <li class="menuNav-item"><a href="/list">List</a></li>
                                <li class="menuNav-item"><a href="/navigation">Navigation</a></li>
                                <li class="menuNav-item"><a href="/modal">Modal</a></li>
                                <li class="menuNav-item"><a href="/typography">Typography</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse-nav-btn pc_none">
                <button onClick={isHidden ? openSideBar : closeSideBar}>
                    {isHidden && <i className="fa fa-bars" aria-hidden="true" />}
                    {!isHidden && <i className="fa fa-times" aria-hidden="true" />}
                </button>
            </div>
        </div>
    </nav>
    );
}