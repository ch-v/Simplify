import BrandLogo from "../../../assets/images/simplifylogo.svg";
import { ComponentBox } from "../../Layout/ComponentBox";

export const Navigation = () => {
    return (
        <ComponentBox>
            <h1>Navbar</h1>
            <p className="txt-primary">A navigation bar is a navigation header that is placed at the top of the page to navigate to different parts of the application.</p>
            <div className="flex-col my-2">
                <h2 className="my-2">Simple Navbar</h2>

                <nav className="navbar">
                    <div className="container-md">
                        <div className="nav-brand">
                            <span className="nav-brand-title">NavBrand</span>
                        </div>
                        <div className="nav-wrapper">
                            <div className="collapse navbar-collapse mob_none">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="#" className="nav-link">Link1</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link2</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="navbar bg-primary my-2">
                    <div className="container-md">
                        <div className="nav-brand">
                            <span className="nav-brand-title">NavBrand</span>
                        </div>
                        <div className="nav-wrapper">
                            <div className="collapse navbar-collapse mob_none">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="#" className="nav-link">Link1</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link2</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="navbar bg-secondary">
                    <div className="container-md">
                        <div className="nav-brand">
                            <span className="nav-brand-title">NavBrand</span>
                        </div>
                        <div className="nav-wrapper">
                            <div className="collapse navbar-collapse mob_none">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="#" className="nav-link">Link1</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link2</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <h2 className="my-2">Navbar with Button</h2>

                <nav className="navbar my-2`">

                    <div className="container-md">
                        <div className="nav-brand">
                            <img src={BrandLogo} alt="Brand Logo" width="30" height="30" />
                            <span className="nav-brand-title">BrandLogo</span>
                        </div>
                        <div className="nav-wrapper">
                            <div className="collapse navbar-collapse mob_none">
                                <ul className="navbar-nav flex-center">
                                    <li className="nav-item"><a href="#" className="nav-link">Link1</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link2</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link3</a></li>
                                </ul>
                                <button className="btn btn-danger">Button</button>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="navbar bg-secondary my-2">
                    <div className="container-md">
                        <div className="nav-brand">
                            <img src={BrandLogo} alt="Brand Logo" width="30" height="30" />
                            <span className="nav-brand-title">BrandLogo</span>
                        </div>
                        <div className="nav-wrapper">
                            <div className="collapse navbar-collapse mob_none">
                                <ul className="navbar-nav flex-center">
                                    <li className="nav-item"><a href="#" className="nav-link">Link1</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link2</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Link3</a></li>
                                </ul>
                                <button className="btn">Button</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <iframe className="my-2 d-sm-none"
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cnav%2520className%253D%2522navbar%2522%253E%250A%2509%253Cdiv%2520className%253D%2522container-md%2522%253E%250A%2520%2520%2520%2520%2509%253Cdiv%2520className%253D%2522nav-brand%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cspan%2520className%253D%2522nav-brand-title%2522%253ENavBrand%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522collapse%2520navbar-collapse%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cul%2520className%253D%2522navbar-nav%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cli%2520className%253D%2522nav-item%2522%253E%253Ca%2520href%253D%2522%2523%2522%2520className%253D%2522nav-link%2522%253ELink1%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522nav-item%2522%253E%253Ca%2520href%253D%2522%2523%2522%2520className%253D%2522nav-link%2522%253ELink2%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522nav-item%2522%253E%253Ca%2520href%253D%2522%2523%2522%2520className%253D%2522nav-link%2522%253ELink3%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fnav%253E"
                    style={{ width: "100%", height: "444px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                    sandbox="allow-scripts allow-same-origin">
                </iframe>
            </div>
        </ComponentBox>
    );
}