// function customRender(reactElement, container) {
//     let ele = document.createElement(reactElement.type);
//     ele.innerHTML = reactElement.children;
//     ele.setAttribute('href', reactElement.props.href);
//     ele.setAttribute('target', reactElement.props.target);
//     container.appendChild(ele);
// }


// In this funciton I don't need to select all properties one by one simply applying for loop to handle all the properties in props
function customRender(reactElement, maincontainer){
    var component = document.createElement(reactElement.type);
    component.innerHTML = reactElement.children;
    for(var prop in reactElement.props) {
        if(prop == 'children') continue;
        component.setAttribute(prop, reactElement.props[prop]);
    }
    maincontainer.appendChild(component);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },

    children: 'click me to visit the google'
}
var maincontainer = document.querySelector("#root");

customRender(reactElement, maincontainer);