var funny = new Audio("soundeffect.mp3")
funny.volume = 100
function die() {
    let him = document.getElementsByClassName("list")[0]
    let thec = him.children
    funny.play()
    for (let i = 0; i < thec.length; i++) {
        thec[i].children[0].src = "imag/i am inside your walls.png"
        thec[i].children[1].textContent = "Wake up. Run. Wake up. Run. Wake up. Run. Wake up. Run. Wake up. Run."
        thec[i].children[1].style.color = "rgb(255,255,255)"
    }
    document.body.style.backgroundColor = "rgb(0,0,0)"
    setTimeout(function () {
        document.body.style.backgroundColor = "rgb(20,20,20)"
        him.remove()
        document.body.children[0].textContent = "Have a good day!"
        funny.pause()
    }, 300)
}