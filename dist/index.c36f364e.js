const h1 = document.createElement("h1");
const heading = React.createElement("h1", {
    id: "title",
    key: "1"
}, "namste everyone");
const heading1 = React.createElement("h1", {
    id: "title",
    className: "titleone",
    key: "2",
    style: {
        backgroundColor: "Blue",
        color: "green",
        fontSize: "40px"
    }
}, "namste everyone");
const button = React.createElement("button", {
    id: "title",
    key: "3",
    style: {
        width: "40%",
        height: "40%",
        backgroundColor: "white",
        color: "yellow",
        borderRadius: "5px",
        fontSize: "30px"
    },
    onClick: function() {
        console.log("hiii");
    }
}, "reactbutton");
// const input=React.createElement('input',{
//     id:"input",
//     key:'4',
//     type:"number",
//     style:{
//         width:"60px",height:"20%",
//         backgroundColor:"white",
//         color:"yellow",
//         borderRadius:"5px",
//     },
//     onChange:(e)=>{
//         console.log(e.target.value)
//     }
// },"reactinput")
const container = React.createElement("div", {
    id: "container",
    style: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        margin: 0,
        padding: 0
    }
}, [
    heading,
    heading1,
    button
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
const headings = document.createElement("h1");
headings.innerHTML = "Hlooo";
headings.style.backgroundColor = "Yellow";
const div = document.getElementById("root");
div.appendChild(headings);

//# sourceMappingURL=index.c36f364e.js.map
