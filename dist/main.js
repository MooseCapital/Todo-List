/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDo": () => (/* binding */ createToDo),
/* harmony export */   "todoListener": () => (/* binding */ todoListener)
/* harmony export */ });


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

    todoListener();

}

function todoListener() {

    document.querySelectorAll(".todo").forEach((currentToDo) => {

        currentToDo.querySelector(".todo-check").addEventListener("click", () => {
            currentToDo.querySelector(".todo-check").classList.toggle("todo-check-active");
            currentToDo.querySelector(".todo-title").classList.toggle("todo-title-active");
            currentToDo.querySelector(".todo-detail").classList.toggle("todo-detail-active");
            currentToDo.querySelector(".todo-date").classList.toggle("todo-date-active");
            console.log("todo check in dom clicked");
        })

        currentToDo.querySelector(".todo-close").addEventListener("click", () => {
            //placeholder to remove current to-do from object and localstorage
            currentToDo.remove();
            console.log("todo remove test");
        })

        currentToDo.querySelector(".todo-detail").addEventListener("click", () => {
            //placeholder, run function to grab actual details from object by using todo[index] getting the right object in array
            document.querySelector(".details-overlay").style.display = "grid";

        })
    })

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



































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




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


   // localStorage.setItem('home', JSON.stringify([...home, todoContainer().addToDo([`${title}`], [`${prioritys}`], [`${dates}`], [`${details}`])]));
    //home.push(todoContainer().addToDo(title, prioritys, dates, details));

    console.log(dates) // format: 2022-07-31
    console.log(prioritys)

})


let todoContainer = (function() {

    function addToDo(title, priority, date, details) {
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createToDo)(title, priority, date)

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

        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createToDo)(home[i].title, home[i].priority, home[i].date);
    }

} else if (home.length < 1) {
    //add default items to todos and put them in localstorage for later,
    localStorage.setItem('home', JSON.stringify([ todoContainer().addToDo("Work", "low", "June 3", "check emails by 10")]));
    home.push(todoContainer().addToDo("Work", "low", "June 3", "check emails by 10"));
    localStorage.setItem('home', JSON.stringify([...home, todoContainer().addToDo("Gym", "medium", "June 5", "do 6 sets of rows")]));
    home.push(todoContainer().addToDo("Gym", "medium", "June 5", "do 6 sets of rows"));
    localStorage.setItem('home', JSON.stringify([...home, todoContainer().addToDo("Home", "high", "June 7", "Read my new book the hobbit")]));
    home.push(todoContainer().addToDo("Home", "high", "June 7", "Read my new book the hobbit"));
}

console.log(home)

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


















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxjQUFjLE1BQU0sT0FBTyxJQUFJO0FBQ2hGO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZnVuY3Rpb24gY3JlYXRlVG9Ebyh0aXRsZSwgcHJpb3JpdHksIGRhdGUpIHtcblxuICAgIGxldCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgaWYgKHByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgfSBlbHNlIGlmIChwcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW1lZGl1bVwiKTtcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibG93XCIpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbG93XCIpO1xuICAgIH1cblxuICAgIC8vIGlmIChwcm9qZWN0KSB7XG4gICAgLy8gICAgIHRvZG8uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHByb2plY3QpXG4gICAgLy8gfVxuXG4gICAgbGV0IHRvZG9fbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb19sZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxlZnRcIik7XG5cbiAgICAgICAgbGV0IHRvZG9fY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX2NoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrXCIpO1xuXG4gICAgICAgIGxldCB0b2RvX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb190aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgdG9kb190aXRsZS5pbm5lclRleHQgPSB0aXRsZTtcblxuICAgIGxldCB0b2RvX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvX3JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJpZ2h0XCIpO1xuXG4gICAgICAgIGxldCB0b2RvX2RldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9fZGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbFwiKTtcbiAgICAgICAgdG9kb19kZXRhaWwuaW5uZXJUZXh0ID0gXCJkZXRhaWxzXCI7XG5cbiAgICAgICAgbGV0IHRvZG9fZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9fZGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICB0b2RvX2RhdGUuaW5uZXJUZXh0ID0gZGF0ZTtcblxuICAgICAgICBsZXQgdG9kb19jbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9fY2xvc2UuY2xhc3NMaXN0LmFkZChcInRvZG8tY2xvc2VcIik7XG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbmNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodG9kbyk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb19sZWZ0KVxuICAgICAgICAgICAgdG9kb19sZWZ0LmFwcGVuZENoaWxkKHRvZG9fY2hlY2spO1xuICAgICAgICAgICAgdG9kb19sZWZ0LmFwcGVuZENoaWxkKHRvZG9fdGl0bGUpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9fcmlnaHQpO1xuICAgICAgICAgICAgdG9kb19yaWdodC5hcHBlbmRDaGlsZCh0b2RvX2RldGFpbCk7XG4gICAgICAgICAgICB0b2RvX3JpZ2h0LmFwcGVuZENoaWxkKHRvZG9fZGF0ZSk7XG4gICAgICAgICAgICB0b2RvX3JpZ2h0LmFwcGVuZENoaWxkKHRvZG9fY2xvc2UpXG5cbiAgICB0b2RvTGlzdGVuZXIoKTtcblxufVxuXG5mdW5jdGlvbiB0b2RvTGlzdGVuZXIoKSB7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9cIikuZm9yRWFjaCgoY3VycmVudFRvRG8pID0+IHtcblxuICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY2hlY2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jaGVja1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1jaGVjay1hY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tdGl0bGUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1kZXRhaWwtYWN0aXZlXCIpO1xuICAgICAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWRhdGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tZGF0ZS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvZG8gY2hlY2sgaW4gZG9tIGNsaWNrZWRcIik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvL3BsYWNlaG9sZGVyIHRvIHJlbW92ZSBjdXJyZW50IHRvLWRvIGZyb20gb2JqZWN0IGFuZCBsb2NhbHN0b3JhZ2VcbiAgICAgICAgICAgIGN1cnJlbnRUb0RvLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2RvIHJlbW92ZSB0ZXN0XCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXRhaWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vcGxhY2Vob2xkZXIsIHJ1biBmdW5jdGlvbiB0byBncmFiIGFjdHVhbCBkZXRhaWxzIGZyb20gb2JqZWN0IGJ5IHVzaW5nIHRvZG9baW5kZXhdIGdldHRpbmcgdGhlIHJpZ2h0IG9iamVjdCBpbiBhcnJheVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuXG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuLypcbmZ1bmN0aW9uIFByb2plY3RMaXN0ZW5lcigpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwic2lkZWhlYWRlci1hY3RpdmVcIik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlaXRlbVwiKS5mb3JFYWNoKChzaWRlaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNpZGVpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNpZGVpdGVtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIHNpZGVpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlaXRlbS1hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWRlaGVhZGVyIGNsaWNrXCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlaXRlbVwiKS5mb3JFYWNoKChzaWRlaXRlbSkgPT4ge1xuXG4gICAgICAgIHNpZGVpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWhlYWRlci1hY3RpdmVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGVpdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlaXRlbS1hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWl0ZW0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNpZGVpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlaXRlbS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpZGUgaXRlbSBjbGlja1wiKTtcbiAgICAgICAgfSlcblxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGVpdGVtXCIpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWNvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgUHJvamVjdExpc3RlbmVyKCk7XG59XG5cbiovXG5cblxuZXhwb3J0IHtjcmVhdGVUb0RvLCB0b2RvTGlzdGVuZXJ9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Y3JlYXRlVG9Eb30gZnJvbSBcIi4vZG9tXCI7XG5cblxuXG4vL2J1dHRvbnMgdG8gb3BlbiBvdmVybGF5LCBhbmQgY2xvc2Ugb3ZlcmxheVxuY29uc3QgYWRkcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcHJvamVjdFwiKTtcbmNvbnN0IGFkZF9wcm9qZWN0X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW92ZXJsYXlcIik7XG5jb25zdCBhZGRfcHJvamVjdF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtY2xvc2VcIik7XG5cbi8vIGFkZCB0by1kbyBwcm9qZWN0IHNpZGViYXIgYW5kIGNoYW5naW5nIGRpc3BsYXlcbi8vY29uc3Qgc2lkZWJhcl90b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1zaWRlYmFyLXRvZG9cIik7XG4vL2NvbnN0IHNpZGViYXJfcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3Qtc2lkZWJhci1wcm9qZWN0XCIpO1xuLy9jb25zdCB0b2RvX21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1haW5cIik7XG4vL2NvbnN0IHByb2plY3RfbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByb2plY3QtbWFpblwiKTtcblxuLy8gcHJpb3JpdHkgYnV0dG9ucyBpbnB1dCBhbmQgbGFiZWxzXG5jb25zdCBsb3dfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJpb3JpdHktYnRuLWxvd1wiKTtcbmNvbnN0IG1lZF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcmlvcml0eS1idG4tbWVkaXVtXCIpO1xuY29uc3QgaGlnaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcmlvcml0eS1idG4taGlnaFwiKTtcbmNvbnN0IGxvd2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJpb3JpdHktbG93XCIpO1xuY29uc3QgbWVkaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1wcmlvcml0eS1tZWRpdW1cIik7XG5jb25zdCBoaWdoaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1wcmlvcml0eS1oaWdoXCIpO1xuLy8gYWRkIHRvIGRvIHRvIGRvbSBhbmQgbG9jYWxzdG9yYWdlXG5jb25zdCB0b2RvU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1zdWJtaXRcIik7XG4vL3NldCBkaXNwbGF5IHRvIG5vbmUgZm9yIGRldGFpbHMgb3ZlcmxheVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1kZXRhaWxzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuXG5cbmFkZHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcblxufSlcbmFkZF9wcm9qZWN0X2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwoKSA9PiB7XG4gICAgYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn0pXG5cblxuLypcbnNpZGViYXJfdG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG4gICAgaWYgKHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtcHJvamVjdC1hY3RpdmVcIikpIHtcbiAgICAgICAgc2lkZWJhcl9wcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhZGQtcHJvamVjdC1hY3RpdmVcIilcbiAgICB9XG5cbiAgICBpZiAodG9kb19tYWluLnN0eWxlLmRpc3BsYXkgIT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RfbWFpbi5zdHlsZS5kaXNwbGF5ID09PSBcImdyaWRcIikge1xuICAgICAgICBwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxufSlcblxuc2lkZWJhcl9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGlmIChzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfdG9kby5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSAhPT0gXCJncmlkXCIpIHtcbiAgICAgICAgcHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9XG5cbiAgICBpZiAodG9kb19tYWluLnN0eWxlLmRpc3BsYXkgPT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG59KVxuKi9cbmxvd2lucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbG93X2J0bi5jbGFzc0xpc3QudG9nZ2xlKFwicHJpb3JpdHktYnRuLWxvdy1hY3RpdmVcIik7XG4gICAgbWVkX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLW1lZGl1bS1hY3RpdmVcIik7XG4gICAgaGlnaF9idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1oaWdoLWFjdGl2ZVwiKTtcbn1cblxubWVkaW5wdXQub25jbGljayA9ICgpID0+IHtcbiAgICBtZWRfYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwcmlvcml0eS1idG4tbWVkaXVtLWFjdGl2ZVwiKVxuICAgIGxvd19idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1sb3ctYWN0aXZlXCIpO1xuICAgIGhpZ2hfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4taGlnaC1hY3RpdmVcIik7XG59XG5cbmhpZ2hpbnB1dC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGhpZ2hfYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwcmlvcml0eS1idG4taGlnaC1hY3RpdmVcIik7XG4gICAgbG93X2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLWxvdy1hY3RpdmVcIik7XG4gICAgbWVkX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLW1lZGl1bS1hY3RpdmVcIik7XG59XG5cbnRvZG9TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvL3RpdGxlIGFuZCBkZXRhaWxzIHNlbGVjdG9yXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC10ZXh0YXJlYS10aXRsZVwiKS52YWx1ZTtcbiAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtdGV4dGFyZWEtZGV0YWlsc1wiKS52YWx1ZTtcbiAgICBsZXQgZGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1uZXctZGF0ZVwiKS52YWx1ZTtcbiAgICAvLyBwcmlvcml0eSBidXR0b25zIHNlbGVjdG9yc1xuICAgIGxldCBwcmlvcml0eXM7XG4gICAgbGV0IGxvd3ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJpb3JpdHktbG93XCIpO1xuICAgIGxldCBtZWRpdW1wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJpb3JpdHktbWVkaXVtJyk7XG4gICAgbGV0IGhpZ2hwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByaW9yaXR5LWhpZ2hcIik7XG5cbiAgICBpZiAobG93cHJpb3JpdHkuY2hlY2tlZCkge1xuICAgIHByaW9yaXR5cyA9ICBcImxvd1wiO1xuICAgIH0gZWxzZSBpZiAobWVkaXVtcHJpb3JpdHkuY2hlY2tlZCkge1xuICAgICAgICBwcmlvcml0eXMgPSBcIm1lZGl1bVwiO1xuICAgIH0gZWxzZSBpZiAoaGlnaHByaW9yaXR5LmNoZWNrZWQpIHtcbiAgICAgICAgcHJpb3JpdHlzID0gXCJoaWdoXCI7XG4gICAgfVxuICAgIC8vcmVtZW1iZXIgcmVtb3ZlIGFjdGl2ZSBjbGFzc2xpc3QgZnJvbSBidXR0b25zIGFuZCB1bmNoZWNrIHdoZW4gdG9kbyBpcyBhZGRlZFxuXG5cbiAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob21lJywgSlNPTi5zdHJpbmdpZnkoWy4uLmhvbWUsIHRvZG9Db250YWluZXIoKS5hZGRUb0RvKFtgJHt0aXRsZX1gXSwgW2Ake3ByaW9yaXR5c31gXSwgW2Ake2RhdGVzfWBdLCBbYCR7ZGV0YWlsc31gXSldKSk7XG4gICAgLy9ob21lLnB1c2godG9kb0NvbnRhaW5lcigpLmFkZFRvRG8odGl0bGUsIHByaW9yaXR5cywgZGF0ZXMsIGRldGFpbHMpKTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGVzKSAvLyBmb3JtYXQ6IDIwMjItMDctMzFcbiAgICBjb25zb2xlLmxvZyhwcmlvcml0eXMpXG5cbn0pXG5cblxubGV0IHRvZG9Db250YWluZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRUb0RvKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgZGV0YWlscykge1xuICAgIGNyZWF0ZVRvRG8odGl0bGUsIHByaW9yaXR5LCBkYXRlKVxuXG4gICAgcmV0dXJuIHtcbiAgICB0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGRldGFpbHNcbiAgICB9XG5cbiAgICB9XG5cbnJldHVybiB7XG5hZGRUb0RvXG59XG59KVxuXG5pZiAoIWxvY2FsU3RvcmFnZS5sZW5ndGgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9tZScsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG59XG5cbmxldCBob21lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9tZScpKTtcbi8vIGNvbnNvbGUubG9nKGhvbWUpXG4vL2hvbWUucHVzaChcImZydWl0XCIpO1xuLy9jb25zb2xlLmxvZyhob21lKVxuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoXCJob21lXCIpLCBKU09OLnN0cmluZ2lmeShbLi4uaG9tZSwgXCJ0cnVja1wiLCAxMTFdKSk7XG5cbmlmIChob21lLmxlbmd0aCA+IDApIHtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9tZS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNyZWF0ZVRvRG8oaG9tZVtpXS50aXRsZSwgaG9tZVtpXS5wcmlvcml0eSwgaG9tZVtpXS5kYXRlKTtcbiAgICB9XG5cbn0gZWxzZSBpZiAoaG9tZS5sZW5ndGggPCAxKSB7XG4gICAgLy9hZGQgZGVmYXVsdCBpdGVtcyB0byB0b2RvcyBhbmQgcHV0IHRoZW0gaW4gbG9jYWxzdG9yYWdlIGZvciBsYXRlcixcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG9tZScsIEpTT04uc3RyaW5naWZ5KFsgdG9kb0NvbnRhaW5lcigpLmFkZFRvRG8oXCJXb3JrXCIsIFwibG93XCIsIFwiSnVuZSAzXCIsIFwiY2hlY2sgZW1haWxzIGJ5IDEwXCIpXSkpO1xuICAgIGhvbWUucHVzaCh0b2RvQ29udGFpbmVyKCkuYWRkVG9EbyhcIldvcmtcIiwgXCJsb3dcIiwgXCJKdW5lIDNcIiwgXCJjaGVjayBlbWFpbHMgYnkgMTBcIikpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob21lJywgSlNPTi5zdHJpbmdpZnkoWy4uLmhvbWUsIHRvZG9Db250YWluZXIoKS5hZGRUb0RvKFwiR3ltXCIsIFwibWVkaXVtXCIsIFwiSnVuZSA1XCIsIFwiZG8gNiBzZXRzIG9mIHJvd3NcIildKSk7XG4gICAgaG9tZS5wdXNoKHRvZG9Db250YWluZXIoKS5hZGRUb0RvKFwiR3ltXCIsIFwibWVkaXVtXCIsIFwiSnVuZSA1XCIsIFwiZG8gNiBzZXRzIG9mIHJvd3NcIikpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob21lJywgSlNPTi5zdHJpbmdpZnkoWy4uLmhvbWUsIHRvZG9Db250YWluZXIoKS5hZGRUb0RvKFwiSG9tZVwiLCBcImhpZ2hcIiwgXCJKdW5lIDdcIiwgXCJSZWFkIG15IG5ldyBib29rIHRoZSBob2JiaXRcIildKSk7XG4gICAgaG9tZS5wdXNoKHRvZG9Db250YWluZXIoKS5hZGRUb0RvKFwiSG9tZVwiLCBcImhpZ2hcIiwgXCJKdW5lIDdcIiwgXCJSZWFkIG15IG5ldyBib29rIHRoZSBob2JiaXRcIikpO1xufVxuXG5jb25zb2xlLmxvZyhob21lKVxuXG4vKlxuY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByb2plY3Qtc3VibWl0XCIpO1xuY29uc3QgcHJvamVjdFRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC10aXRsZVwiKTtcblxucHJvamVjdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XG5cbmxvY2FsIHN0b3JhZ2UgdGVzdGluZ1xuXG5sb2NhbFN0b3JhZ2UucGxhbnRzID0gSlNPTi5zdHJpbmdpZnkoe1wiZnJ1aXRcIjogXCJhcHBsZVwifSk7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wbGFudHMpLmZydWl0KVxuLy9hZGQgYWxsIHRvZG9zIHRvIGxvY2FsIHN0b3JhZ2Ugd2Ugd2lsbCByZW1vdmUgd2hlbiBhIHVzZXIgcmVtb3ZlcyB0aGVtXG5sZXQgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCB7XCJob21lXCI6ICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrXCI6ICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJneW1cIjogICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY2hvb2xcIjogW11cbiAgfVxuXG4qL1xuXG5cbi8vIGFkZCBwcm9qZWN0IGxvZ2ljXG5cbi8qd2UgbmVlZCBhbiBhZGRwcm9qZWN0IG1vZHVsZXMgdG8gaG9sZCB0aGUgbWV0aG9kcyBhbmQgcnVuIGEgZmFjdG9yeSBmdW5jdGlvbiB0byBhZGQgdGhlIHByb2plY3QgdG8gbG9jYWwgc3RvcmFnZSBiZWxvd1xuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcblxuICAgbGV0IHRpdGxlID0gIHByb2plY3RUZXh0QXJlYS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlKTtcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkoey4uLnRvZG9zLCBbYCR7dGl0bGV9YF06IFtdfSkpOyAvL3RyeSBzcHJlYWQgb3BlcmF0b3IgdG8gYWRkIG9udG8gdGhlIG9iamVjdCAuLi50b2Rvc1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4gICAgY29uc29sZS5sb2codG9kb3MpO1xuXG59XG5cbiovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9