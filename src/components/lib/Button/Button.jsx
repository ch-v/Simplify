import { ComponentBox } from "../../Layout/ComponentBox"

export const Button = () => {
    return (
        <ComponentBox>
            <h1>Button</h1>
            <p className="txt-primary my-1">The Button component is used to trigger an action or event, such as submitting a form <br /> , opening a dialog or performing a delete operation</p>
            <h2 className="my-2">Sample Buttons</h2>
            <div className="flex flex-wrap flex-center my-2 component-box">
                <div className="btn mx-1 my-1">Primary Button</div>
                <div className="btn btn-success mx-1 my-1">Success Button</div>
                <div className="btn btn-warning mx-1 my-1">Warning Button</div>
                <div className="btn btn-danger mx-1 my-1">Danger Button</div>
                <div className="btn btn-link mx-1 my-1">Link Button</div>
            </div>
            <iframe className="my-2 d-sm-none"
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%2520%253D%2522btn%2522%253EPrimary%2520Button%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522btn%2520btn-success%2522%253ESuccess%2520Button%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522btn%2520btn-warning%2522%253EWarning%2520Button%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522btn%2520btn-danger%2522%253EDanger%2520Button%253C%252Fdiv%253E%2520"
                style={{ width: "100%", height: "260px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <h2 className="my-2">Outline Buttons</h2>
            <div className="flex flex-wrap flex-center my-2 component-box">
                <div className="btn btn-outline mx-1 my-1">Primary Outline Button</div>
                <div className="btn btn-outline-success mx-1 my-1">Success Outline Button</div>
                <div className="btn btn-outline-warning mx-1 my-1">Warning Outline Button</div>
                <div className="btn btn-outline-danger mx-1 my-1">Danger outline Button</div>
            </div>
            <iframe className="my-2 d-sm-none"
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%2520%253D%2522btn%2520btn-outline%2520mx-1%2522%253EPrimary%2520Outline%2520Button%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522btn%2520btn-outline-success%2520mx-1%2522%253ESuccess%2520Outline%2520Button%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522btn%2520btn-outline-warning%2520mx-1%2522%253EWarning%2520Outline%2520Button%253C%252Fdiv%253E%250A%253Cdiv%2520className%2520%253D%2522btn%2520btn-outline-danger%2520mx-1%2522%253EDanger%2520outline%2520Button%253C%252Fdiv%253E%2520"
                style={{ width: "100%", height: "260px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </ComponentBox>
    )
};