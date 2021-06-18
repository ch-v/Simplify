import AvatarIcon from "../../../assets/images/avatar.jpg";
import { ComponentBox } from "../../Layout/ComponentBox";

export const Avatar = () => {
    return (
        <ComponentBox>
            <h1>Avatars</h1>
            <p className="txt-primary my-1">Avatar is used to represent a user, and displays the profile picture, initials or fallback icon.   </p>
            <h2 className="my-2">Image Avatars</h2>
            <div className="flex flex-wrap component-box">
                <img className="avatar avatar-sm" src={AvatarIcon} />
                <img className="avatar avatar-md" src={AvatarIcon} />
                <img className="avatar avatar-lg" src={AvatarIcon} />
                <img className="avatar avatar-xl" src={AvatarIcon} />
            </div>
            <iframe className="my-2 d-sm-none"
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522.%252Favatar.jpg%2522%2520class%253D%2522avatar%2520avatar-sm%2522%253E%250A%253Cimg%2520src%253D%2522.%252Favatar.jpg%2522%2520class%253D%2522avatar%2520avatar-md%2522%253E%250A%253Cimg%2520src%253D%2522.%252Favatar.jpg%2522%2520class%253D%2522avatar%2520avatar-lg%2522%253E%250A%253Cimg%2520src%253D%2522.%252Favatar.jpg%2522%2520class%253D%2522avatar%2520avatar-xl%2522%253E"
                style={{ width: "100%", height: "260px", border: "0", transform: "scale(1)", overflow: "hidden" }}
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </ComponentBox>
    );
}