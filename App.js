// const headingEl = document.createElement('h1');
// headingEl.innerHTML = "Hello World from JS!";

// const root = document.getElementById('root');
// root.appendChild(headingEl);

// React file has createElement method which takes 3 argument (element to create, object, children/content inside the element)
// Object argument is the attributes you want to pass in the element 
/*
const headingEl = React.createElement(
    'h1',
    {
        id: "heading",
        "aria-label": "Our heading"
    },
    "Hello World from React!"
);
*/

// headingEl created by React.CreateElement is an object. This object/react element have property like key, props, etc.
// props is the atrributes + children of the react element 
/*
console.log(headingEl);
*/

// Creating root node from react-dom library as it is mainly for browsers
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingEl);
*/

// react element is an object. while we render, that is when it is made into html element which browser understands

/*
 <div id="parent">
    <div id="child1">
        <h1>Hello world</h1>
        <h2>Sub heading hello world</h2>
    </div>
    <div id="child2">
        <h1>Hello world</h1>
        <h2>Sub heading hello world</h2>
    </div>
 </div>

Below is the code to achieve nested elments. Also if we need sibling elements, the children argument needs to be inside an array.
*/

const treeStructure = React.createElement(
    "div", { id: "parent"},
    [
        React.createElement(
            "div", { id: "child1" },
            [ 
              React.createElement("h1", {}, "Hello World"), 
              React.createElement("h2", {}, "Sub heading hello world")
            ]
        ),
        React.createElement(
            "div", { id: "child2" },
            [ 
              React.createElement("h1", {}, "Hello World"), 
              React.createElement("h2", {}, "Sub heading hello world")
            ]
        )
    ]
);

// console.log(treeStructure);nk

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(treeStructure);