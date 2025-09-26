const container = document.querySelector(".container")
const list = document.querySelector(".list")
const thumb = document.querySelector(".thumb")
const nextButton = document.querySelector(".next")
const backButton = document.querySelector(".back")

nextButton.onclick = () => changeSlider("next")
backButton.onclick = () => changeSlider("back")

function changeSlider(type) {
    const listItems = document.querySelectorAll(".list .list-item")
    const thumbItems = document.querySelectorAll(".thumb .thumb-item")

    if(type === "next") {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add("next")
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[thumbItems.length - 1])
        container.classList.add("back")
    }

    setTimeout( () => {
        container.classList.remove("next")
        container.classList.remove("back")
    }, 3000)
}