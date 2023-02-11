const divs = document.getElementById("img")
const div = document.querySelectorAll("#img div")

let idx = 0

function carrossel () {
    idx++

    if(idx > div.length -1) {
        idx = 0
    } 

    divs.style.transform = 'translateX(${-idx * 150})'
}

setInterval(carrossel, 1000)

function email() {
    var str = window.open('mailto:itspaylin@gmail.com', '_blank');
}