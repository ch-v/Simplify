import BrandLogo from "../../assets/images/simplifylogo.svg";
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <>
            <div className="container-md py-1">
                <div className="flex-col flex-center flex-align-center w-100 my-2">
                    <img className="img-responsive" src={BrandLogo} alt="Brand Icon" />
                    <p className="txt-h3 weight-600 my-2 text-center">A lightweight and modular front-end framework <br /> for developing fast and powerful web interfaces.</p>
                    <div className="d-flex">
                        <Link to="/documentation">
                            <button className="btn btn-danger mx-1">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </Link>
                        <a href="https://github.com/ch-v"> 
                            <button className="btn btn-link mx-1"><i className="fa fa-github" aria-hidden="true"></i>  Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}