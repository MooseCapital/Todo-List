

function createToDo(title, priority, date, project) {

    let todo = document.createElement("div");
    todo.classList.add("todo");

    if (priority.toLowerCase() === "high") {
        todo.classList.add("priority-high");
    } else if (priority.toLowerCase() === "medium") {
        todo.classList.add("priority-medium");
    } else if (priority.toLowerCase() === "low") {
        todo.classList.add("priority-low");
    }

    if (project) {
        todo.setAttribute("data-project", project)
    }

    let todo_left = document.createElement("div");
    todo_left.classList.add("todo-left");

        let todo_check = document.createElement("div");
        todo_check.classList.add("todo-check");

        let todo_title = document.createElement("div");
        todo_title.classList.add("todo-title");
        todo_title.innerText = title;

    let todo_right = document.createElement("div");
    todo_right.classList.add("todo-right");

        let todo_detail = document.createElement("div");
        todo_detail.classList.add("todo-detail");
        todo_detail.innerText = "details";

        let todo_date = document.createElement("div");
        todo_date.classList.add("todo-date");
        todo_date.innerText = date;

        let todo_close = document.createElement("div");
        todo_close.classList.add("todo-close");


    document.querySelector(".maincontent").appendChild(todo);
        todo.appendChild(todo_left)
            todo_left.appendChild(todo_check);
            todo_left.appendChild(todo_title);
        todo.appendChild(todo_right);
            todo_right.appendChild(todo_detail);
            todo_right.appendChild(todo_date);
            todo_right.appendChild(todo_close)

    todoCheckListener();
}

function todoCheckListener() {
   // let todo = document.querySelectorAll(".todo")
    document.querySelectorAll(".todo").forEach((currentToDo) => {

        currentToDo.querySelector(".todo-check").addEventListener("click", () => {
            currentToDo.querySelector(".todo-check").classList.toggle("todo-check-active");
            currentToDo.querySelector(".todo-title").classList.toggle("todo-title-active");
            currentToDo.querySelector(".todo-detail").classList.toggle("todo-detail-active");
            currentToDo.querySelector(".todo-date").classList.toggle("todo-date-active");
            console.log("todo check clicked");
        })

    })

}



export {createToDo, todoCheckListener}






























