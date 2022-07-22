import {createToDo, todoCheckListener} from "./dom";

createToDo("title ex.", "high", "june 3");

//buttons to open overlay, and close overlay
const addproject = document.querySelector(".addproject");
const add_project_overlay = document.querySelector(".add-project-overlay");
const add_project_close = document.querySelector(".add-project-close");

// add to-do project sidebar and changing display
const sidebar_todo = document.querySelector(".add-project-sidebar-todo");
const sidebar_project = document.querySelector(".add-project-sidebar-project");
const todo_main = document.querySelector(".add-project-main");
const project_main = document.querySelector(".create-project-main");

// priority buttons input and labels
const low_btn = document.querySelector(".create-priority-btn-low");
const med_btn = document.querySelector(".create-priority-btn-medium");
const high_btn = document.querySelector(".create-priority-btn-high");
const lowinput = document.querySelector("#create-priority-low");
const medinput = document.querySelector("#create-priority-medium");
const highinput = document.querySelector("#create-priority-high");


//add events to all todos to toggle active css affect
/*
let todo = document.querySelectorAll(".todo");
todo.forEach((currentToDo) => {

    currentToDo.querySelector(".todo-check").addEventListener("click", () => {
        currentToDo.querySelector(".todo-check").classList.toggle("todo-check-active");
        currentToDo.querySelector(".todo-title").classList.toggle("todo-title-active");
        currentToDo.querySelector(".todo-detail").classList.toggle("todo-detail-active");
        currentToDo.querySelector(".todo-date").classList.toggle("todo-date-active");
        console.log("todo check clicked");
    })

})
*/





addproject.addEventListener("click", () => {
    add_project_overlay.style.display = "grid";
    console.log(add_project_overlay.style.display);
})
add_project_close.addEventListener("click" ,() => {
    add_project_overlay.style.display = "none";
    console.log(add_project_overlay.style.display);
})



sidebar_todo.addEventListener("click", () => {
    if (!sidebar_todo.classList.contains("add-project-active")) {
        sidebar_todo.classList.add("add-project-active");
    }
    if (sidebar_project.classList.contains("add-project-active")) {
        sidebar_project.classList.remove("add-project-active")
    }

    if (todo_main.style.display !== "grid") {
        todo_main.style.display = "grid";
    }

    if (project_main.style.display === "grid") {
        project_main.style.display = "none";
    }

})

sidebar_project.addEventListener("click", () => {
    if (!sidebar_project.classList.contains("add-project-active")) {
        sidebar_project.classList.add("add-project-active");
    }

    if (sidebar_todo.classList.contains("add-project-active")) {
        sidebar_todo.classList.remove("add-project-active");
    }

    if (project_main.style.display !== "grid") {
        project_main.style.display = "grid";
    }

    if (todo_main.style.display === "grid") {
        todo_main.style.display = "none";
    }

})

lowinput.onclick = () => {
    low_btn.classList.toggle("priority-btn-low-active");
    med_btn.classList.remove("priority-btn-medium-active");
    high_btn.classList.remove("priority-btn-high-active");
}

medinput.onclick = () => {
    med_btn.classList.toggle("priority-btn-medium-active")
    low_btn.classList.remove("priority-btn-low-active");
    high_btn.classList.remove("priority-btn-high-active");
}

highinput.onclick = () => {
    high_btn.classList.toggle("priority-btn-high-active");
    low_btn.classList.remove("priority-btn-low-active");
    med_btn.classList.remove("priority-btn-medium-active");
}
















//to-do items
// const tododetail = document.querySelector(".todo-detail");
// const todocheck = document.querySelector(".todo-check");
// const tododate = document.querySelector(".todo-date");
// const todotitle = document.querySelector(".todo-title");


// turn into queryselector all and use e.target, have to convert all to add classlist on specific todo divs
/*todocheck.addEventListener("click", () => {
    todocheck.classList.toggle("todo-check-active");
    tododetail.classList.toggle("todo-detail-active");
    tododate.classList.toggle("todo-date-active");
    todotitle.classList.toggle("todo-title-active");


})
*/






