function customRender(reactElement, container) {
    let ele = document.createElement(reactElement.type);
    ele.innerHTML = reactElement.children;
    ele.setAttribute('href', reactElement.props.href);
    ele.setAttribute('target', reactElement.props.target);
    container.appendChild(ele);
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