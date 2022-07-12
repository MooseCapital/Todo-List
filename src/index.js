console.log("hi");
const tododetail = document.querySelector(".todo-detail");
const todocheck = document.querySelector(".todo-check");
const tododate = document.querySelector(".todo-date");


todocheck.addEventListener("click", () => {
    todocheck.classList.toggle("todo-check-active");
    tododetail.classList.toggle("todo-detail-active");
    tododate.classList.toggle("todo-date-active");
    console.log("works");
})


































