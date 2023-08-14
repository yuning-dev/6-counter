function increaseNumber() {
    getNumber(1)
}

function decreaseNumber() {
    getNumber(-1)
}

function reset() {
    document.getElementById("number").innerText = 0
    numberColor()
}

function numberColor() {
    let num = document.getElementById("number").innerText
    let numDiv = document.getElementById("number")
    if (Number(num) > 0) {
        numDiv.style.color = "green"
    }
    else if (Number(num) === 0) {
        numDiv.style.color = "black"
    }
    else {
        numDiv.style.color = "blue"
    }
}

function getNumber(increment) {
    let num = Number(document.getElementById("number").innerText)
    document.getElementById("number").innerText = num + increment
    numberColor()
}