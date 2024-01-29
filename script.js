const addButton = document.querySelector("#addButton")
const list = document.querySelector("#list")
const wrapper = document.querySelector(".wrapper")

const addWindow = document.querySelector("#addWindow")
const deleteWindow = document.querySelector("#deleteWindow")

let taskList = []


addButton.addEventListener("click", function (event) {

    let taskButton = document.querySelector("#taskButton")
    let taskName = document.querySelector('#taskName')
    let taskAuthor = document.querySelector('#taskAuthor')

    addWindow.style.pointerEvents = "all"
    addWindow.style.opacity = 1
})



taskButton.addEventListener("click", function () {
    if (taskName.value != "") {
        let item = document.createElement("div")
        item.innerHTML +=
            `<div class="task_item">` +
            `<span>` + `<img src="icons/avatar.png" alt="" sizes="20px 20px" class="icon">` + taskAuthor.value + `</span>` +
            `<span>` + taskName.value + `</span>` +
            `<div><button class="delete__button" id="deleteButton"><img src="icons/delete.png" alt="" sizes="20px 20px" class="icon"></button></div>` +
            `</div>`

        taskAuthor.value = ""
        taskName.value = ""

        item.querySelector("#deleteButton").addEventListener("click", function () {
            deleteWindow.style.opacity = 1
            deleteWindow.style.pointerEvents = "all"

            deleteWindow.querySelector("#confirmDelete").addEventListener("click", function () {
                item.lastElementChild.remove()
                taskList.splice(taskList.indexOf(item), 1)
                deleteWindow.style.opacity = 0
                deleteWindow.style.pointerEvents = "none"
            })

            deleteWindow.querySelector("#cancelDelete").addEventListener("click", function () {
                deleteWindow.style.opacity = 0
                deleteWindow.style.pointerEvents = "none"
                console.log(item.lastChild);
            })

            deleteWindow.querySelector("#cancelDeleteSec").addEventListener("click", function () {
                deleteWindow.style.opacity = 0
                deleteWindow.style.pointerEvents = "none"
            })

            item.addEventListener("click", function () {
                item.classList.toggle("task_finished")
            })
        })


        addWindow.style.pointerEvents = "none"
        addWindow.style.opacity = 0

        taskList.push({ item: { taskAuthor: taskAuthor.value, taskName: taskName.value } })

        document.querySelector("#list").appendChild(item)
    }
},)

