
import { ComponentBox } from "../../Layout/ComponentBox";

export const List = () => {
    return (
        <ComponentBox>
            <h1>List</h1>
            <p className="txt-primary my-1">List groups are used for displaying a series of content. Modify and extend to support any content within them.</p>
            <div>
                <h2 className="my-2">Stacked List</h2>
                <div className="list w-100 my-1">
                    <ul>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                        <li>List Item 3</li>
                        <li>List Item 4</li>
                        <li>List Item 5</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="my-2">Striped List</h2>
                <div className="list list-striped w-100 my-1">
                    <ul>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                        <li>List Item 3</li>
                        <li>List Item 4</li>
                        <li>List Item 5</li>
                    </ul>
                </div>
            </div>
            <iframe className="my-2 d-sm-none"
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522list%2520w-100%2520my-1%2522%253E%250A%2509%253Cul%253E%250A%2509%2509%253Cli%253EList%2520Item%25201%253C%252Fli%253E%250A%2509%2509%253Cli%253EList%2520Item%25202%253C%252Fli%253E%250A%2509%2509%253Cli%253EList%2520Item%25203%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2509%253Cli%253EList%2520Item%25204%253C%252Fli%253E%250A%2509%2509%253Cli%253EList%2520Item%25205%253C%252Fli%253E%250A%2509%253C%252Ful%253E%250A%253C%252Fdiv%253E"
                style={{ width: "403px", height: "352px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </ComponentBox>
    );
}