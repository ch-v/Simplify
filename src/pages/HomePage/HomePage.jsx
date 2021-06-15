import BrandLogo from "../../assets/images/simplifylogo.svg";
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <>
            <div className="container-md pd-10">
                <div className="flex-col flex-center flex-align-center w-100 mt-20">
                    <img className="img-responsive" src={BrandLogo} alt="Brand Icon" />
                    <p className="txt-h3 weight-600 mt-20 mb-20 text-center">A lightweight and modular front-end framework <br /> for developing fast and powerful web interfaces.</p>
                    <div className="d-flex">
                        <Link to="/documentation">
                            <button className="btn btn-danger mr-10">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </Link>
                        <a href="https://github.com/ch-v"> 
                            <button className="btn btn-link mr-10"><i className="fa fa-github" aria-hidden="true"></i>  Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}