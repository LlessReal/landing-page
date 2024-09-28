var scream = new Audio("inst.ogg")
var fart = new Audio("fartrever.mp3")

function startmusic() {
    scream.play()
    setTimeout(yell, 7000)
}
function yell() {
    fart.play()
    setTimeout(nomorewindow, 1000)
}
function nomorewindow() { 
    close() 
}   
