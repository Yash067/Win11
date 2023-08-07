let starticon = document.getElementsByClassName("starticon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let searchicon = document.getElementsByClassName("searchicon")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widget = document.getElementsByClassName("widget")[0]
let widgeticon = document.getElementsByClassName("left")[0]


starticon.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom ="-665px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

document.addEventListener("click", (event) => {
    if (!startmenu.contains(event.target) && event.target !== starticon ) {
        startmenu.style.bottom = "-665px";
    }
});

searchicon.addEventListener("click", ()=>{
    if(searchmenu.style.bottom =="50px"){
        searchmenu.style.bottom ="-665px"
    }
    else{
        searchmenu.style.bottom = "50px"
    }

})

document.addEventListener("click", (event) => {
    if (!searchmenu.contains(event.target) && event.target !== searchicon ) {
        searchmenu.style.bottom = "-665px";
    }
});

widgeticon.addEventListener("click", ()=>{
    if(widget.style.left == "10px"){
        widget.style.left = "-915px"
    }
    else{
        widget.style.left = "10px"
    }
})

document.addEventListener("click", (event) => {
    if (!widget.contains(event.target) && event.target !== widgeticon ) {
        widget.style.left = "-915px";
    }
});