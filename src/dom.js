

function createToDo(title, priority, date) {

    let todo = document.createElement("div");
    todo.classList.add("todo");

    if (priority.toLowerCase() === "high") {
        todo.classList.add("priority-high");
    } else if (priority.toLowerCase() === "medium") {
        todo.classList.add("priority-medium");
    } else if (priority.toLowerCase() === "low") {
        todo.classList.add("priority-low");
    }

    // if (project) {
    //     todo.setAttribute("data-project", project)
    // }

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



}













function todoListener() {

    document.querySelector(".maincontent").addEventListener("click", (e) => {
        let todos1 = e.target.closest(".todo");
        if (todos1) {
            if (e.target.closest(".todo-check")) {
                todos1.classList.toggle("active");
                console.log(e.target.closest(".todo-check"))
            }

            if (e.target.closest(".todo-close")) {
                todos1.remove();
            }

            if (e.target.closest(".todo-detail")) {
                document.querySelector(".details-overlay").style.display = "grid";

            }

        }

    })


/*
    document.querySelectorAll(".todo").forEach((currentToDo) => {

        currentToDo.querySelector(".todo-check").addEventListener("click", (e) => {
          currentToDo.classList.toggle("active");
            console.log(currentToDo);

        })

        currentToDo.querySelector(".todo-close").addEventListener("click", () => {
            //remove current to-do from dom
            currentToDo.remove();
            console.log("todo remove test");
        })

        currentToDo.querySelector(".todo-detail").addEventListener("click", () => {
            //open details overlay
            document.querySelector(".details-overlay").style.display = "grid";
            console.log("detail test")
        })
    })
    */
}
/*
function ProjectListener() {

    document.querySelector(".sideheader").addEventListener("click", () => {

        document.querySelector(".sideheader").classList.add("sideheader-active");

        document.querySelectorAll(".sideitem").forEach((sideitem) => {
            if (sideitem.classList.contains("sideitem-active")) {
                sideitem.classList.remove("sideitem-active");
            }

        })
        console.log("sideheader click");
    });

    document.querySelectorAll(".sideitem").forEach((sideitem) => {

        sideitem.addEventListener("click", () => {

            document.querySelector(".sideheader").classList.remove("sideheader-active");
            document.querySelectorAll(".sideitem").forEach((item) => {
                if (item.classList.contains("sideitem-active")) {
                    item.classList.remove("sideitem-active");
                }
            })

            sideitem.classList.add("sideitem-active");
            console.log("side item click");
        })

    })

}

function createProject(title) {

    let newProject = document.createElement("div");
    newProject.classList.add("sideitem");
    newProject.textContent = title;

    document.querySelector(".sidecontent").appendChild(newProject);
    ProjectListener();
}

*/


export {createToDo, todoListener}


/*
I have a function to create the dom, so every time I create a todo, i was running the listener function
now it makes sense, every time I added one, it would run it minus 1 time. add -> remove -> add.

I was under the impression, adding more listeners to the same thing would just combine instead of running 5 times

now I have a problem when i create a new todo, how do i listen to these new items? I was thinking possibly
remove the listener, then rereun the listen function. ex.

3 todos, add 1 todo - without rereunning it won't be listened to
so delete previous listener, rerun, now only 1 listener exist for 4 todos
4 todos, add 1 - remove listener, add again, now one listener on 5 todos
 */

























