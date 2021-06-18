import { ComponentBox } from "../../Layout/ComponentBox"

export const Badge = () => {
    return (
        <ComponentBox>
            <h1>Badge</h1>
            <p className="txt-primary my-1">Badge are used to highlight an item's status for quick recognition</p>
            <h2 className="my-2">Sample Badges</h2>
            <div className="flex w-100 my-2 component-box">
                <div className="badge mx-1">Primary Badge</div>
                <div className="badge badge-success mx-1">Success Badge</div>
                <div className="badge badge-warning mx-1">Warning Badge</div>
                <div className="badge badge-danger mx-1">Danger Badge</div>
            </div>
            <iframe className="my-2"
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%2520%253D%2522badge%2520mx-1%2522%253EPrimary%2520Badge%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522badge%2520badge-success%2520mx-1%2522%253ESuccess%2520Badge%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522badge%2520badge-warning%2520mx-1%2522%253EWarning%2520Badge%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522badge%2520badge-danger%2520mx-1%2522%253EDanger%2520Badge%253C%252Fdiv%253E%2520"
                style={{ width: "100%", height: "260px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </ComponentBox>
    );
}