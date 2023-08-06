let starticon = document.getElementsByClassName("starticon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let widget = document.getElementsByClassName("widget")[0]
let widgeticn = document.getElementsByClassName("left")[0]

starticon.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom ="-665px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

widgeticn.addEventListener("click", ()=>{
    if(widget.style.left == "10px"){
        widget.style.left = "-915px"
    }
    else{
        widget.style.left = "10px"
    }
})