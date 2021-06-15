import CardImage from "../../../assets/images/mobile.png";
import { ComponentBox } from "../../Layout/ComponentBox";

export const Card = () => {
    return (
        <ComponentBox>
            <h1>Card</h1>
            <p className="txt-primary mt-20">Cards are used to display information to users, with button to trigger actions. Often used in Ecommerce to list products.</p>
            <h2 className="mt-20">Card With Image</h2>
            <div className="flex w-100 mt-20 flex-center component-box flex-wrap">
                <div className="card mr-10">
                    <img src={CardImage} alt="Card Image" />
                    <div className="card-body">
                        <h3 className="txt-primary">Card Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button class="btn btn-outline-danger mt-10">Read More....</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="txt-primary">Card Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button class="btn btn-outline-danger mt-10">Read More....</button>
                    </div>
                    <img src={CardImage} alt="Card Image" />
                </div>
            </div>
            <h2 className="mt-20">Horizontal Card with Image</h2>
            <div className="card card-hz">
                <img src={CardImage} alt="Horizontal card Image" />
                <div className="card-body">
                    <h3 className="txt-primary">Card Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <button class="btn btn-outline-danger mt-10">Read More....</button>
                </div>
            </div>
        </ComponentBox>
    );
}