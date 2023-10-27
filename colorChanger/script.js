let btn = document.querySelectorAll(".btn");
function sayHi(){
    console.log("clicked");
}

function changebg(color){
    document.body.style.backgroundColor = color
}

btn.forEach(function (button){
    button.addEventListener("click", function(e){
        // console.log(e.target.className);
        if(e.target.className === "btn green") changebg("green");
        if(e.target.className === "btn grey") changebg("grey");
        if(e.target.className === "btn blue") changebg("blue");
        if(e.target.className === "btn yellow") changebg("yellow");
    })
})

// function makeDefault(){
//     console.log("hi")
//     document.body.backgroundColor = "white";
// }
// btn.forEach(function (button){
//     // console.log(button)
//     button.addEventListener("dblclick", makeDefault)
// })