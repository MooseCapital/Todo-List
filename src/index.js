


const addproject = document.querySelector(".addproject");
const add_project_overlay = document.querySelector(".add-project-overlay");
const tododetail = document.querySelector(".todo-detail");
const todocheck = document.querySelector(".todo-check");
const tododate = document.querySelector(".todo-date");
const todotitle = document.querySelector(".todo-title");
const add_project_close = document.querySelector(".add-project-close");



addproject.addEventListener("click", () => {
    add_project_overlay.style.display = "grid";
    console.log(add_project_overlay.style.display);
})
add_project_close.addEventListener("click" ,() => {
    add_project_overlay.style.display = "none";
    console.log(add_project_overlay.style.display);
})
todocheck.addEventListener("click", () => {
    todocheck.classList.toggle("todo-check-active");
    tododetail.classList.toggle("todo-detail-active");
    tododate.classList.toggle("todo-date-active");
    todotitle.classList.toggle("todo-title-active");

    console.log("works");
})
































