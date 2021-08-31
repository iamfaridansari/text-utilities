let myInput = document.getElementById("myInput")

let upperCase = () => {
    if (myInput.value == "") {
        alert("Enter something in the textarea")
    } else {
        let upperText = myInput.value.toUpperCase()
        myInput.value = upperText
    }
}

let lowerCase = () => {
    if (myInput.value == "") {
        alert("Enter something in the textarea")
    } else {
        let lowerText = myInput.value.toLowerCase()
        myInput.value = lowerText
    }
}

let capitalize = () => {
    if (myInput.value == "") {
        alert("Enter something in the textarea")
    } else {
        let text1 = myInput.value.toLowerCase()
        let text2 = text1.charAt(0).toUpperCase() + text1.slice(1)
        myInput.value = text2
    }
}

let bold = () => {
    if (myInput.value == "") {
        alert("Enter something in the textarea")
    } else {
        myInput.style.fontWeight = "bold"
    }
}

let italic = () => {
    if (myInput.value == "") {
        alert("Enter something in the textarea")
    } else {
        myInput.style.fontStyle = "italic"
    }
}

let whiteSpace = () => {
    if (myInput.value == "") {
        alert("Enter something in the textarea")
    } else {
        let text = myInput.value.split(/[ ]+/)
        myInput.value = text.join(" ")
    }
}

let copyText = () => {
    if (myInput.value == "") {
        alert("Enter something in the textarea")
    } else {
        let text = myInput;
        text.select()
        navigator.clipboard.writeText(text.value);
    }
}

let clearText = () => {
    myInput.value = ""
}

let colorInput = document.getElementById("colorInput").addEventListener("keyup", () => {
    let color = document.getElementById("colorInput").value;
    myInput.style.color = color
})

let fontInput = document.getElementById("fontInput").addEventListener("change", () => {
    let font = document.getElementById("fontInput").value;
    myInput.style.fontFamily = font
})

myInput.addEventListener("keyup", () => {
    let character = myInput.value.length;
    let charText = ""
    if (character <= 1) {
        charText = "character"
    } else {
        charText = "characters"
    }

    let word = myInput.value.split(" ").length
    let wordText = ""
    let wordsText = ""
    if (word <= 1) {
        wordText = "word"
        wordsText = "word"
    } else {
        wordText = "words"
        wordsText = "words"
    }

    let wordsPerMinute = myInput.value.split(" ").length * 0.08


    document.getElementById("charWord").innerHTML = `${character} ${charText} and ${word} ${wordText}`
    document.getElementById("wpm").innerHTML = `${wordsPerMinute} ${wordsText} per minute`
})