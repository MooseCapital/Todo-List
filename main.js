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
/* harmony export */   "ProjectListener": () => (/* binding */ ProjectListener),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createToDo": () => (/* binding */ createToDo),
/* harmony export */   "todoListener": () => (/* binding */ todoListener)
/* harmony export */ });


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


(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createToDo)("title ex.", "high", "june 3");
(0,_dom__WEBPACK_IMPORTED_MODULE_0__.ProjectListener)();
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

//set display to none for details overlay
document.querySelector(".close-details").addEventListener("click", () => {
    document.querySelector(".details-overlay").style.display = "none";
})



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



const projectSubmitBtn = document.querySelector(".create-project-submit");
const projectTextArea = document.querySelector(".create-project-title");

projectSubmitBtn.addEventListener("click", addProject);




































/*local storage testing

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25JakU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rRTs7QUFFL0UsZ0RBQVU7QUFDVixxREFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBOztBQUVBLHNDQUFzQyxpQkFBaUI7QUFDdkQ7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELGNBQWMsTUFBTSxPQUFPLElBQUk7QUFDaEY7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgcHJvamVjdCkge1xuXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbWVkaXVtXCIpO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJsb3dcIikge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sb3dcIik7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdClcbiAgICB9XG5cbiAgICBsZXQgdG9kb19sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvX2xlZnQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGVmdFwiKTtcblxuICAgICAgICBsZXQgdG9kb19jaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9fY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2tcIik7XG5cbiAgICAgICAgbGV0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX3RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICB0b2RvX3RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgbGV0IHRvZG9fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9fcmlnaHQuY2xhc3NMaXN0LmFkZChcInRvZG8tcmlnaHRcIik7XG5cbiAgICAgICAgbGV0IHRvZG9fZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19kZXRhaWwuY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlsXCIpO1xuICAgICAgICB0b2RvX2RldGFpbC5pbm5lclRleHQgPSBcImRldGFpbHNcIjtcblxuICAgICAgICBsZXQgdG9kb19kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19kYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICAgIHRvZG9fZGF0ZS5pbm5lclRleHQgPSBkYXRlO1xuXG4gICAgICAgIGxldCB0b2RvX2Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19jbG9zZS5jbGFzc0xpc3QuYWRkKFwidG9kby1jbG9zZVwiKTtcblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluY29udGVudFwiKS5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX2xlZnQpXG4gICAgICAgICAgICB0b2RvX2xlZnQuYXBwZW5kQ2hpbGQodG9kb19jaGVjayk7XG4gICAgICAgICAgICB0b2RvX2xlZnQuYXBwZW5kQ2hpbGQodG9kb190aXRsZSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb19yaWdodCk7XG4gICAgICAgICAgICB0b2RvX3JpZ2h0LmFwcGVuZENoaWxkKHRvZG9fZGV0YWlsKTtcbiAgICAgICAgICAgIHRvZG9fcmlnaHQuYXBwZW5kQ2hpbGQodG9kb19kYXRlKTtcbiAgICAgICAgICAgIHRvZG9fcmlnaHQuYXBwZW5kQ2hpbGQodG9kb19jbG9zZSlcblxuICAgIHRvZG9MaXN0ZW5lcigpO1xuXG59XG5cbmZ1bmN0aW9uIHRvZG9MaXN0ZW5lcigpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb1wiKS5mb3JFYWNoKChjdXJyZW50VG9EbykgPT4ge1xuXG4gICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWNoZWNrXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLWNoZWNrLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby10aXRsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGV0YWlsXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLWRldGFpbC1hY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGF0ZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1kYXRlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9kbyBjaGVjayBpbiBkb20gY2xpY2tlZFwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vcGxhY2Vob2xkZXIgdG8gcmVtb3ZlIGN1cnJlbnQgdG8tZG8gZnJvbSBvYmplY3QgYW5kIGxvY2Fsc3RvcmFnZVxuICAgICAgICAgICAgY3VycmVudFRvRG8ucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvZG8gcmVtb3ZlIHRlc3RcIik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy9wbGFjZWhvbGRlciwgcnVuIGZ1bmN0aW9uIHRvIGdyYWIgYWN0dWFsIGRldGFpbHMgZnJvbSBvYmplY3QgYnkgdXNpbmcgdG9kb1tpbmRleF0gZ2V0dGluZyB0aGUgcmlnaHQgb2JqZWN0IGluIGFycmF5XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG5cbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIFByb2plY3RMaXN0ZW5lcigpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwic2lkZWhlYWRlci1hY3RpdmVcIik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlaXRlbVwiKS5mb3JFYWNoKChzaWRlaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNpZGVpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNpZGVpdGVtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIHNpZGVpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlaXRlbS1hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWRlaGVhZGVyIGNsaWNrXCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlaXRlbVwiKS5mb3JFYWNoKChzaWRlaXRlbSkgPT4ge1xuXG4gICAgICAgIHNpZGVpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWhlYWRlci1hY3RpdmVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGVpdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlaXRlbS1hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWl0ZW0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNpZGVpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlaXRlbS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpZGUgaXRlbSBjbGlja1wiKTtcbiAgICAgICAgfSlcblxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGVpdGVtXCIpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWNvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgUHJvamVjdExpc3RlbmVyKCk7XG59XG5cblxuXG5cbmV4cG9ydCB7Y3JlYXRlVG9EbywgdG9kb0xpc3RlbmVyLCBQcm9qZWN0TGlzdGVuZXIsIGNyZWF0ZVByb2plY3R9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Y3JlYXRlVG9EbywgUHJvamVjdExpc3RlbmVyLCBjcmVhdGVQcm9qZWN0LCB0b2RvTGlzdGVuZXJ9IGZyb20gXCIuL2RvbVwiO1xuXG5jcmVhdGVUb0RvKFwidGl0bGUgZXguXCIsIFwiaGlnaFwiLCBcImp1bmUgM1wiKTtcblByb2plY3RMaXN0ZW5lcigpO1xuLy9idXR0b25zIHRvIG9wZW4gb3ZlcmxheSwgYW5kIGNsb3NlIG92ZXJsYXlcbmNvbnN0IGFkZHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHByb2plY3RcIik7XG5jb25zdCBhZGRfcHJvamVjdF9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1vdmVybGF5XCIpO1xuY29uc3QgYWRkX3Byb2plY3RfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWNsb3NlXCIpO1xuXG4vLyBhZGQgdG8tZG8gcHJvamVjdCBzaWRlYmFyIGFuZCBjaGFuZ2luZyBkaXNwbGF5XG5jb25zdCBzaWRlYmFyX3RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LXNpZGViYXItdG9kb1wiKTtcbmNvbnN0IHNpZGViYXJfcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3Qtc2lkZWJhci1wcm9qZWN0XCIpO1xuY29uc3QgdG9kb19tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1tYWluXCIpO1xuY29uc3QgcHJvamVjdF9tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC1tYWluXCIpO1xuXG4vLyBwcmlvcml0eSBidXR0b25zIGlucHV0IGFuZCBsYWJlbHNcbmNvbnN0IGxvd19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcmlvcml0eS1idG4tbG93XCIpO1xuY29uc3QgbWVkX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByaW9yaXR5LWJ0bi1tZWRpdW1cIik7XG5jb25zdCBoaWdoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByaW9yaXR5LWJ0bi1oaWdoXCIpO1xuY29uc3QgbG93aW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1wcmlvcml0eS1sb3dcIik7XG5jb25zdCBtZWRpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByaW9yaXR5LW1lZGl1bVwiKTtcbmNvbnN0IGhpZ2hpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByaW9yaXR5LWhpZ2hcIik7XG5cbi8vc2V0IGRpc3BsYXkgdG8gbm9uZSBmb3IgZGV0YWlscyBvdmVybGF5XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWRldGFpbHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5cblxuYWRkcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZF9wcm9qZWN0X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGNvbnNvbGUubG9nKGFkZF9wcm9qZWN0X292ZXJsYXkuc3R5bGUuZGlzcGxheSk7XG59KVxuYWRkX3Byb2plY3RfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCgpID0+IHtcbiAgICBhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zb2xlLmxvZyhhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkpO1xufSlcblxuXG5cbnNpZGViYXJfdG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG4gICAgaWYgKHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtcHJvamVjdC1hY3RpdmVcIikpIHtcbiAgICAgICAgc2lkZWJhcl9wcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhZGQtcHJvamVjdC1hY3RpdmVcIilcbiAgICB9XG5cbiAgICBpZiAodG9kb19tYWluLnN0eWxlLmRpc3BsYXkgIT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RfbWFpbi5zdHlsZS5kaXNwbGF5ID09PSBcImdyaWRcIikge1xuICAgICAgICBwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxufSlcblxuc2lkZWJhcl9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGlmIChzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfdG9kby5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSAhPT0gXCJncmlkXCIpIHtcbiAgICAgICAgcHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9XG5cbiAgICBpZiAodG9kb19tYWluLnN0eWxlLmRpc3BsYXkgPT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG59KVxuXG5sb3dpbnB1dC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGxvd19idG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0bi1sb3ctYWN0aXZlXCIpO1xuICAgIG1lZF9idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1tZWRpdW0tYWN0aXZlXCIpO1xuICAgIGhpZ2hfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4taGlnaC1hY3RpdmVcIik7XG59XG5cbm1lZGlucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbWVkX2J0bi5jbGFzc0xpc3QudG9nZ2xlKFwicHJpb3JpdHktYnRuLW1lZGl1bS1hY3RpdmVcIilcbiAgICBsb3dfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4tbG93LWFjdGl2ZVwiKTtcbiAgICBoaWdoX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLWhpZ2gtYWN0aXZlXCIpO1xufVxuXG5oaWdoaW5wdXQub25jbGljayA9ICgpID0+IHtcbiAgICBoaWdoX2J0bi5jbGFzc0xpc3QudG9nZ2xlKFwicHJpb3JpdHktYnRuLWhpZ2gtYWN0aXZlXCIpO1xuICAgIGxvd19idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1sb3ctYWN0aXZlXCIpO1xuICAgIG1lZF9idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1tZWRpdW0tYWN0aXZlXCIpO1xufVxuXG5cblxuY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByb2plY3Qtc3VibWl0XCIpO1xuY29uc3QgcHJvamVjdFRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC10aXRsZVwiKTtcblxucHJvamVjdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKmxvY2FsIHN0b3JhZ2UgdGVzdGluZ1xuXG5sb2NhbFN0b3JhZ2UucGxhbnRzID0gSlNPTi5zdHJpbmdpZnkoe1wiZnJ1aXRcIjogXCJhcHBsZVwifSk7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wbGFudHMpLmZydWl0KVxuLy9hZGQgYWxsIHRvZG9zIHRvIGxvY2FsIHN0b3JhZ2Ugd2Ugd2lsbCByZW1vdmUgd2hlbiBhIHVzZXIgcmVtb3ZlcyB0aGVtXG5sZXQgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCB7XCJob21lXCI6ICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JrXCI6ICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJneW1cIjogICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY2hvb2xcIjogW11cbiAgfVxuXG4qL1xuXG5cbi8vIGFkZCBwcm9qZWN0IGxvZ2ljXG5cbi8qd2UgbmVlZCBhbiBhZGRwcm9qZWN0IG1vZHVsZXMgdG8gaG9sZCB0aGUgbWV0aG9kcyBhbmQgcnVuIGEgZmFjdG9yeSBmdW5jdGlvbiB0byBhZGQgdGhlIHByb2plY3QgdG8gbG9jYWwgc3RvcmFnZSBiZWxvd1xuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcblxuICAgbGV0IHRpdGxlID0gIHByb2plY3RUZXh0QXJlYS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlKTtcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkoey4uLnRvZG9zLCBbYCR7dGl0bGV9YF06IFtdfSkpOyAvL3RyeSBzcHJlYWQgb3BlcmF0b3IgdG8gYWRkIG9udG8gdGhlIG9iamVjdCAuLi50b2Rvc1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4gICAgY29uc29sZS5sb2codG9kb3MpO1xuXG59XG5cbiovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9