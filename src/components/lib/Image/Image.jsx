import AvatarIcon from "../../../assets/images/avatar.jpg";
import { ComponentBox } from "../../Layout/ComponentBox";

export const Image = () => {
    return (
        <ComponentBox>
            <h1>Image</h1>
            <p className="txt-primary my-1">Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.</p>
            <h2 className="my-2">Responsive Image</h2>
            <div className="flex flex-center my-2 component-box">
                <img src={AvatarIcon} className="img-responsive" alt="Avatar Icon" width="200px" />
            </div>
            <h2 className="my-2">Round Image</h2>
            <div className="flex flex-center my-2 component-box">
                <img src={AvatarIcon} className="img-responsive img-rounded" alt="Avatar Icon" width="200px" />
            </div>
            <h2 className="my-2">Background Image</h2>
            <div className="flex flex-center my-2 component-box">
                <a href="#" target="_blank">
                    <div className="overlay-content" style={{ width:"300px", height: "300px"}}>
                        <img src={AvatarIcon} alt="Overlay Image" />
                        <div class="overlay">
                            <h3>This is title</h3>
                            <p>Lorem Ipsum dolor sit amet consectetur adipisicing elit.Accusamus 
                                perspiciatis quibusdam omnis assumenda, ipsa doloribus labore aut suscipit in id nam iure</p>
                        </div>
                    </div>
                </a>
            </div>
            <iframe className="my-2"
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%257BAvatarIcon%257D%2520className%253D%2522img-responsive%2522%2520alt%253D%2522Avatar%2520Icon%2522%2520width%253D%2522200px%2522%252F%253E%250A%253Cimg%2520src%253D%257BAvatarIcon%257D%2520className%253D%2522img-responsive%2520img-rounded%2522%2520alt%253D%2522Avatar%2520Icon%2522%2520width%253D%2522200px%2522%2520%252F%253E"
                style={{ width: "100%", height: "223px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </ComponentBox>

    );
}