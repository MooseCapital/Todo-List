import {createToDo} from "./dom";
import {format} from "date-fns";
import {parseISO} from "date-fns";

//buttons to open overlay, and close overlay
const addproject = document.querySelector(".addproject");
const add_project_overlay = document.querySelector(".add-project-overlay");
const add_project_close = document.querySelector(".add-project-close");

// add to-do project sidebar and changing display
//const sidebar_todo = document.querySelector(".add-project-sidebar-todo");
//const sidebar_project = document.querySelector(".add-project-sidebar-project");
//const todo_main = document.querySelector(".add-project-main");
//const project_main = document.querySelector(".create-project-main");

// priority buttons input and labels
const low_btn = document.querySelector(".create-priority-btn-low");
const med_btn = document.querySelector(".create-priority-btn-medium");
const high_btn = document.querySelector(".create-priority-btn-high");
const lowinput = document.querySelector("#create-priority-low");
const medinput = document.querySelector("#create-priority-medium");
const highinput = document.querySelector("#create-priority-high");
// add to do to dom and localstorage
const todoSubmit = document.querySelector(".to-do-submit");
//set display to none for details overlay
document.querySelector(".close-details").addEventListener("click", () => {
    document.querySelector(".details-overlay").style.display = "none";
})



addproject.addEventListener("click", () => {
    add_project_overlay.style.display = "grid";

})
add_project_close.addEventListener("click" ,() => {
    add_project_overlay.style.display = "none";

})


/*
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
*/
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

todoSubmit.addEventListener("click", () => {
    //title and details selector
    let title = document.querySelector(".add-project-textarea-title").value;
    let details = document.querySelector(".add-project-textarea-details").value;
    let dates = document.querySelector(".create-new-date").value;
    // priority buttons selectors
    let prioritys;
    let lowpriority = document.querySelector("#create-priority-low");
    let mediumpriority = document.querySelector('#create-priority-medium');
    let highpriority = document.querySelector("#create-priority-high");

    if (lowpriority.checked) {
    prioritys =  "low";
    } else if (mediumpriority.checked) {
        prioritys = "medium";
    } else if (highpriority.checked) {
        prioritys = "high";
    }
    //remember remove active classlist from buttons and uncheck when todo is added


   //localStorage.setItem('home', JSON.stringify([...home, todoContainer().addToDo([`${title}`], [`${prioritys}`], [`${format(parseISO(dates), 'MMMM d')}`], [`${details}`])]));
    home.push(todoContainer().addToDo(title, prioritys, format(parseISO(dates), 'MMMM d'), details));


    //need to lookup date format packet, then connect remove button in createtoDo() to remove the to do from home and localstorage
   // console.log(dates) format: 2022-07-31
    //console.log(format(parseISO(dates), 'MMMM d')) july 29
    console.log(home);
    console.log(localStorage);
    console.log(prioritys)
})


let todoContainer = (function() {

    function addToDo(title, priority, date, details) {
    createToDo(title, priority, date)

    return {
    title, priority, date, details
    }

    }

return {
addToDo
}
})

if (!localStorage.length) {
    localStorage.setItem('home', JSON.stringify([]));
}

let home = JSON.parse(localStorage.getItem('home'));
// console.log(home)
//home.push("fruit");
//console.log(home)
//localStorage.setItem(("home"), JSON.stringify([...home, "truck", 111]));

if (home.length > 0) {

    for (let i = 0; i < home.length; i++) {

        createToDo(home[i].title, home[i].priority, home[i].date);
    }

} else if (home.length < 1) {
    //add default items to todos and put them in localstorage for later,
    localStorage.setItem('home', JSON.stringify([ todoContainer().addToDo("Work", "low", "June 3", "check emails by 10")]));
    home.push(todoContainer().addToDo("Work", "low", "June 3", "check emails by 10"));
    localStorage.setItem('home', JSON.stringify([...home, todoContainer().addToDo("Gym", "medium", "June 5", "do 6 sets of rows")]));
    home.push(todoContainer().addToDo("Gym", "medium", "June 5", "do 6 sets of rows"));
    localStorage.setItem('home', JSON.stringify([...home, todoContainer().addToDo("Home", "high", "June 7", "Read my new book the hobbit")]));
    home.push(todoContainer().addToDo("Home", "high", "June 7", "Read my new book the hobbit"));
    //setTimeout() re
}

console.log(home)
console.log(JSON.parse(localStorage.getItem('home')).length);
/*
const projectSubmitBtn = document.querySelector(".create-project-submit");
const projectTextArea = document.querySelector(".create-project-title");

projectSubmitBtn.addEventListener("click", addProject);

local storage testing

localStorage.plants = JSON.stringify({"fruit": "apple"});
// console.log(JSON.parse(localStorage.plants).fruit)
//add all todos to local storage we will remove when a user removes them
let todos = JSON.parse(localStorage.getItem('todos')) || {"home":   [],
                                                 "work":   [],
                                                 "gym":    [],
                                                 "school": []
  }

*/


// add project logic

/*we need an addproject modules to hold the methods and run a factory function to add the project to local storage below
function addProject() {

   let title =  projectTextArea.value.trim().toLowerCase();
    createProject(title);
   localStorage.setItem("todos", JSON.stringify({...todos, [`${title}`]: []})); //try spread operator to add onto the object ...todos
    console.log(localStorage);
    console.log(todos);

}

*/

















