
let menu=document.querySelector(".menu")
let nav_items=document.querySelector(".nav_items")
let menuState=false
let menu_icon=document.querySelector(".menu_icon")

menu.addEventListener("click", (e)=>{
    if(menuState==false) {
        nav_items.className="nav_items ul_responsive"
        menu_icon.src="./images/menu_close.svg"
        menuState=true
    } else {
        nav_items.className="nav_items"
        menu_icon.src="./images/menu.svg"
        menuState=false
    }
})