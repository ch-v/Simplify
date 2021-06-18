import { ComponentBox } from "../../Layout/ComponentBox"

export const Typography = () => {
    return (
        <ComponentBox>
            <h1>Text Utilities</h1>
            <p className="txt-primary my-2">
                One of the crucial aspect when it comes to readability and accessibility. Typography looks like a simple topic but many websites miss the trick.
                </p>
            <div>
                <h2 className="my-2">Headings</h2>
                <div className="component-box">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                </div>
            </div>
            <div>
                <h2 className="my-2">Font Weights</h2>
                <div className="component-box">
                    <p className="weight-600">Bold Text</p>
                    <p>Normal Text</p>
                    <p className="txt-primary">Gray Text</p>
                </div>
            </div>
        </ComponentBox>
    );
}