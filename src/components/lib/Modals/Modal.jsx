import { ComponentBox } from "../../Layout/ComponentBox";
import { SideNav } from "../SideNav/SideNav"

const showModal = () => {
    let element = document.getElementById("myModal1");
    element.style.display = "block";
}

const hideModal = () => {
    let element = document.getElementById("myModal1");
    element.style.display = "none";
}

export const Modal = () => {
    return (
            <ComponentBox>
                    <h1>Modal</h1>
                    <p className="txt-primary mt-10">
                        The Modal Component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.
                    </p>
                    <div>
                        <h2 className="mt-20">Sample Modal</h2>
                        <div className="mt-10">
                            <button class="btn btn-outline" onClick={showModal}>Launch Demo</button>
                        </div>
                    </div>
                    <iframe className="mt-20 d-sm-none"
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520id%253D%2522myModal1%2522%2520className%253D%2522modal%2522%253E%250A%2509%253Cdiv%2520className%253D%2522modal-content%2522%253E%250A%2509%2509%253Cdiv%2520className%253D%2522modal-header%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cp%2520className%253D%2522txt-primary%2522%253EThis%2520is%2520Modal%2520header%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522close%2522%2520onClick%253D%257BhideModal%257D%253Ex%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522txt-primary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%252C%2520adipisicing%2520elit.%2520Cupiditate%2520ratione%2520rerum%2520at%2520quis%2520velit%2520esse%2520quasi%2520exercitationem%2520maiores%2520expedita%2520deleniti%2520illum%2520excepturi%252C%2520officia%2520molestias%252C%2520voluptas%2520vero%2520praesentium%2520quae%2520sequi%2520perspiciatis.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2509%2509%253Cdiv%2520className%253D%2522modal-footer%2522%253E%250A%2520%2520%2520%2520%2509%2509%253Cbutton%2520className%253D%2522btn%2520btn-danger%2520mr-10%2522%2520onClick%253D%257BhideModal%257D%253ESave%2520Changes%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520className%253D%2522btn%2520btn-link%2522%2520onClick%253D%257BhideModal%257D%253ECancel%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2509%253C%252Fdiv%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                        style={{ width: "100%", height: "536px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>

                <div id="myModal1" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="txt-primary">This is Modal header</p>
                            <span className="close" onClick={hideModal}>x</span>
                        </div>
                        <div className="modal-body">
                            <p className="txt-primary">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ratione rerum at quis velit esse quasi exercitationem maiores expedita deleniti illum excepturi, officia molestias, voluptas vero praesentium quae sequi perspiciatis.
                                    </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger mr-10" onClick={hideModal}>Save Changes</button>
                            <button className="btn btn-link" onClick={hideModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </ComponentBox>
    );
}