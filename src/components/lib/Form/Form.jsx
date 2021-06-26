import { ComponentBox } from "../../Layout/ComponentBox"

export const Form = () => {
    return (
        <ComponentBox>
            <h1>Form</h1>
            <p className="txt-primary my-1">Forms are used to take input from the user for a variety of purposes like feedback, orders and more.</p>
            <h2 className="my-2">Input</h2>
            <div className="flex flex-wrap flex-between my-2">
                <input type="text" className="form-control" placeholder="Enter Input" />
                <textarea type="text" className="form-control" placeholder="Enter Description" />
                <select className="form-control" placeholder="Select an option">
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <iframe className="my-2 d-sm-none"
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522text%2522%2520className%253D%2522form-control%2522%2520placeholder%253D%2522Enter%2520Input%2522%2520%252F%253E%250A%253Ctextarea%2520type%253D%2522text%2522%2520className%253D%2522form-control%2522%2520placeholder%253D%2522Enter%2520Description%2522%2520%252F%253E%250A%253Cselect%2520className%253D%2522form-control%2522%2520placeholder%253D%2522Select%2520an%2520option%2522%253E%250A%2509%253Coption%253E1%253C%252Foption%253E%250A%2509%253Coption%253E2%253C%252Foption%253E%250A%253C%252Fselect%253E"
                style={{ width: "100%", height: "297px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </ComponentBox>
    );
}