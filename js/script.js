
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

let fixed = document.querySelector("#fixed-images")
let elemC = document.querySelector(".elem-wrapper")

 elemC.addEventListener("mouseenter", ()=>{
    
    fixed.style.visibility = "visible" ;
})
elemC.addEventListener("mouseleave", ()=>{
    
    fixed.style.visibility = "hidden" ;
})

let elems = document.querySelectorAll(".elem")
    elems.forEach (function(e){
        e.addEventListener("mouseenter" , ()=>{
            let image = e.getAttribute("data-img")
            fixed.style.backgroundImage = `url(${image })`
        })
    })




    