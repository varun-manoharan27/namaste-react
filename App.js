import React from "react";
import ReactDOM from "react-dom/client";


const dummyReactElement = (
    <h2 className="subHeading2">
        This is a subheading made from react element
    </h2>
);


const DummyTitle = () => <h2 className="subheading1">This is a dummy Title</h2>;


const HeadingElement = () => {
    return (
        <div id="heading" className="headerComponent">
            <h1>Welcome to Namaste React through functional components! 🚀</h1>
            <DummyTitle />
            <DummyTitle></DummyTitle>
            {DummyTitle()}
            {dummyReactElement}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingElement/>);