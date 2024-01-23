const addButton = document.querySelector("#addButton")
const list = document.querySelector("#list")
const wrapper = document.querySelector(".wrapper")

let taskList = []

addButton.addEventListener("click", function(event){

    let taskButton = document.querySelector("#taskButton")
    let taskName = document.querySelector('#taskName')
    let taskAuthor = document.querySelector('#taskAuthor')

    document.querySelector(".add_window").style.pointerEvents = "all"
    document.querySelector(".add_window").style.opacity = 1
})

taskButton.addEventListener("click",function(){
    if (taskName.value != ""){
        let item = document.createElement("div")
        item.innerHTML += 
        `<div class="task_item">`+
            `<span>`+`<img src="icons/avatar.png" alt="" sizes="20px 20px" class="icon">`+taskAuthor.value+`</span>`+
            `<span>`+taskName.value+`</span>`+
            `<div><button class="delete__button" id="deleteButton"><img src="icons/delete.png" alt="" sizes="20px 20px" class="icon"></button></div>`+
        `</div>`

        
        document.querySelector("#list").appendChild(item)

        item.querySelector("#deleteButton").addEventListener("click", function(){
            item.remove()
            taskList.splice(taskList.indexOf(item),1)
        })

        item.addEventListener("click", function(){
            item.classList.toggle("task_finished")
        })


        document.querySelector(".add_window").style.pointerEvents = "none"
        document.querySelector(".add_window").style.opacity = 0

        taskList.push({item:{taskAuthor:taskAuthor.value, taskName:taskName.value}})


    }},)

