import { ComponentBox } from "../../Layout/ComponentBox";

export const Alert = () => {

    return (
        <ComponentBox>
            <h1>Alerts</h1>
            <p className="txt-primary my-1">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages</p>
            <div className="my-2">
                <h2 className="my-2">Sample Alerts</h2>
                <div>
                    <div class="alert my-1">
                        <p className="txt-h3">This is an info Alert!</p>
                    </div>
                    <div class="alert alert-success my-1">
                        <p className="txt-h3">This is a Success Alert</p>
                    </div>
                    <div class="alert alert-danger my-1">
                        <p className="txt-h3">This is an Error Alert</p>
                    </div>
                    <div class="alert alert-warning my-1">
                        <p className="txt-h3">This is a Warning Alert</p>
                    </div>
                </div>
            </div>
            <iframe className="my-2 d-sm-none"
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert%2522%253E%253Cp%253EThis%2520is%2520an%2520info%2520alert%253C%252Fp%253E%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520alert-success%2520my-1%2522%253E%253Cp%253EThis%2520is%2520an%2520Success%2520Alert%253C%252Fp%253E%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520alert-danger%2520my-1%2522%253E%253Cp%253EThis%2520is%2520an%2520Error%2520Alert%253C%252Fp%253E%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520alert-warning%2520my-1%2522%253E%253Cp%253EThis%2520is%2520a%2520Warning%2520Alert%253C%252Fp%253E%253C%252Fdiv%253E"
                style={{ width: "100%", height: "473px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </ComponentBox>
    );
}