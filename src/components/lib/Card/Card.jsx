import CardImage from "../../../assets/images/mobile.png";
import { ComponentBox } from "../../Layout/ComponentBox";

export const Card = () => {
    return (
        <ComponentBox>
            <h1>Card</h1>
            <p className="txt-primary my-2">Cards are used to display information to users, with button to trigger actions. Often used in Ecommerce to list products.</p>
            <h2 className="my-2">Card With Image</h2>
            <div className="flex w-100 my-2 flex-center component-box flex-wrap">
                <div className="card mx-1">
                    <img src={CardImage} alt="Card Image" />
                    <div className="card-body">
                        <h3 className="txt-primary">Card Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button class="btn btn-outline-danger my-1">Read More....</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="txt-primary">Card Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button class="btn btn-outline-danger my-1">Read More....</button>
                    </div>
                    <img src={CardImage} alt="Card Image" />
                </div>
                <div className="card card-hover">
                <img src={CardImage} alt="Card Image" />
                    <div className="card-body">
                        <h3 className="txt-primary">Card Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button class="btn btn-outline-danger my-1">Read More....</button>
                    </div>
                </div>
            </div>
            <h2 className="my-2">Horizontal Card with Image</h2>
            <div className="card card-hz">
                <img src={CardImage} alt="Horizontal card Image" />
                <div className="card-body">
                    <h3 className="txt-primary">Card Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <button class="btn btn-outline-danger my-1">Read More....</button>
                </div>
            </div>
        </ComponentBox>
    );
}