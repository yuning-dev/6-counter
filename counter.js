function increaseNumber() {
    let num = Number(document.getElementById("number").innerHTML)
    let increasedNum = num + 1
    document.getElementById("number").innerText = increasedNum
    numberColor()
}

function decreaseNumber() {
    let num = Number(document.getElementById("number").innerText)
    let decreasedNum = num - 1
    document.getElementById("number").innerText= decreasedNum
    numberColor()
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