

function reveal() {
    let reveals = document.querySelectorAll(".reveal")
    for(let i=0; i<reveals.length; i+=1) {
        let windowHeight = window.innerHeight
        let distanceFromTopOfTheViewPort = reveals[i].getBoundingClientRect().top
        let elementVisible = 150
        if(distanceFromTopOfTheViewPort < windowHeight - elementVisible) {
            reveals[i].classList.add("active")
        }else {
            reveals[i].classList.remove("active")
        }
    }
}

window.addEventListener("scroll", reveal)

reveal()