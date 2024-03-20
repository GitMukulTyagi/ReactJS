function customRender (reactElements,Container)
{
const domElement = document.createElement(reactElements.type)

domElement.innerHTML = reactElements.children

domElement.setAttribute('href',reactElements.props.href)

domElement.setAttribute('target',reactElements.props.target)
Container.appendChild(domElement)

}

const mainConatiner = document.querySelector("#root")

const reactElements = {

    type : 'a',
    props :
    {
        href : "https://www.google.com/",
        target : "_blank"
    },
    children : "Click to search in Google"
}

customRender(reactElements,mainConatiner )