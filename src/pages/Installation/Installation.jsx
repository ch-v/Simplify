import { SideNav } from "../../components/lib/SideNav/SideNav";

export const Installation = () => {
    return (
        <>
            <div className="flex">
                <SideNav />
                <div className="flex-column pd-10">
                    <h1>Getting Started</h1>
                    <p className="txt-primary mt-10">Welcome to Simplify. It's super easy to include Simplify in your projects. Check out!</p>
                    <div className="d-flex-column mt-20">
                        <h3>Download</h3>
                        <p className="txt-primary mt-10">Please click below to download minified version of Simplify</p>
                        <button className="btn mt-20">
                        <i className="fa fa-cloud-download" aria-hidden="true"></i> Download
                        </button>
                    </div>
                    <div className="d-flex-column mt-20">
                        <h3>Installation</h3>
                        <iframe className = "mt-20" src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=material&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fsimplifyed.netlify.app%252Fsimplify.min.css%2522%253E"
                            style={{width: "100%", height: "205px", border:"0", transform: "scale(1)", overflow: "hidden" }}
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
}