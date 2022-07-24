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


//local storage testing

localStorage.plants = JSON.stringify({"fruit": "apple"});
console.log(localStorage);
console.log(JSON.parse(localStorage.plants).fruit)

let todos = (JSON.parse(localStorage.todos) || {})




























})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7O0FBS2lFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbklqRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtEOztBQUVsRCxnREFBVTtBQUNWLHFEQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsc0NBQXNDLGlCQUFpQjtBQUN2RDtBQUNBOztBQUVBLGlEQUFpRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgcHJvamVjdCkge1xuXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbWVkaXVtXCIpO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJsb3dcIikge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sb3dcIik7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdClcbiAgICB9XG5cbiAgICBsZXQgdG9kb19sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvX2xlZnQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGVmdFwiKTtcblxuICAgICAgICBsZXQgdG9kb19jaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9fY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2tcIik7XG5cbiAgICAgICAgbGV0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX3RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICB0b2RvX3RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgbGV0IHRvZG9fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9fcmlnaHQuY2xhc3NMaXN0LmFkZChcInRvZG8tcmlnaHRcIik7XG5cbiAgICAgICAgbGV0IHRvZG9fZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19kZXRhaWwuY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlsXCIpO1xuICAgICAgICB0b2RvX2RldGFpbC5pbm5lclRleHQgPSBcImRldGFpbHNcIjtcblxuICAgICAgICBsZXQgdG9kb19kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19kYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICAgIHRvZG9fZGF0ZS5pbm5lclRleHQgPSBkYXRlO1xuXG4gICAgICAgIGxldCB0b2RvX2Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19jbG9zZS5jbGFzc0xpc3QuYWRkKFwidG9kby1jbG9zZVwiKTtcblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluY29udGVudFwiKS5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX2xlZnQpXG4gICAgICAgICAgICB0b2RvX2xlZnQuYXBwZW5kQ2hpbGQodG9kb19jaGVjayk7XG4gICAgICAgICAgICB0b2RvX2xlZnQuYXBwZW5kQ2hpbGQodG9kb190aXRsZSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb19yaWdodCk7XG4gICAgICAgICAgICB0b2RvX3JpZ2h0LmFwcGVuZENoaWxkKHRvZG9fZGV0YWlsKTtcbiAgICAgICAgICAgIHRvZG9fcmlnaHQuYXBwZW5kQ2hpbGQodG9kb19kYXRlKTtcbiAgICAgICAgICAgIHRvZG9fcmlnaHQuYXBwZW5kQ2hpbGQodG9kb19jbG9zZSlcblxuICAgIHRvZG9MaXN0ZW5lcigpO1xuXG59XG5cbmZ1bmN0aW9uIHRvZG9MaXN0ZW5lcigpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb1wiKS5mb3JFYWNoKChjdXJyZW50VG9EbykgPT4ge1xuXG4gICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWNoZWNrXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLWNoZWNrLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby10aXRsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGV0YWlsXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLWRldGFpbC1hY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGF0ZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1kYXRlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9kbyBjaGVjayBpbiBkb20gY2xpY2tlZFwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vcGxhY2Vob2xkZXIgdG8gcmVtb3ZlIGN1cnJlbnQgdG8tZG8gZnJvbSBvYmplY3QgYW5kIGxvY2Fsc3RvcmFnZVxuICAgICAgICAgICAgY3VycmVudFRvRG8ucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRvZG8gcmVtb3ZlIHRlc3RcIik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy9wbGFjZWhvbGRlciwgcnVuIGZ1bmN0aW9uIHRvIGdyYWIgYWN0dWFsIGRldGFpbHMgZnJvbSBvYmplY3QgYnkgdXNpbmcgdG9kb1tpbmRleF0gZ2V0dGluZyB0aGUgcmlnaHQgb2JqZWN0IGluIGFycmF5XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG5cbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIFByb2plY3RMaXN0ZW5lcigpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwic2lkZWhlYWRlci1hY3RpdmVcIik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlaXRlbVwiKS5mb3JFYWNoKChzaWRlaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNpZGVpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNpZGVpdGVtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIHNpZGVpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlaXRlbS1hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWRlaGVhZGVyIGNsaWNrXCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlaXRlbVwiKS5mb3JFYWNoKChzaWRlaXRlbSkgPT4ge1xuXG4gICAgICAgIHNpZGVpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWhlYWRlci1hY3RpdmVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGVpdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlaXRlbS1hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWl0ZW0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNpZGVpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlaXRlbS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpZGUgaXRlbSBjbGlja1wiKTtcbiAgICAgICAgfSlcblxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGVpdGVtXCIpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWNvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbn1cblxuXG5cblxuZXhwb3J0IHtjcmVhdGVUb0RvLCB0b2RvTGlzdGVuZXIsIFByb2plY3RMaXN0ZW5lciwgY3JlYXRlUHJvamVjdH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtjcmVhdGVUb0RvLCBQcm9qZWN0TGlzdGVuZXJ9IGZyb20gXCIuL2RvbVwiO1xuXG5jcmVhdGVUb0RvKFwidGl0bGUgZXguXCIsIFwiaGlnaFwiLCBcImp1bmUgM1wiKTtcblByb2plY3RMaXN0ZW5lcigpO1xuLy9idXR0b25zIHRvIG9wZW4gb3ZlcmxheSwgYW5kIGNsb3NlIG92ZXJsYXlcbmNvbnN0IGFkZHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHByb2plY3RcIik7XG5jb25zdCBhZGRfcHJvamVjdF9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1vdmVybGF5XCIpO1xuY29uc3QgYWRkX3Byb2plY3RfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWNsb3NlXCIpO1xuXG4vLyBhZGQgdG8tZG8gcHJvamVjdCBzaWRlYmFyIGFuZCBjaGFuZ2luZyBkaXNwbGF5XG5jb25zdCBzaWRlYmFyX3RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LXNpZGViYXItdG9kb1wiKTtcbmNvbnN0IHNpZGViYXJfcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3Qtc2lkZWJhci1wcm9qZWN0XCIpO1xuY29uc3QgdG9kb19tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1tYWluXCIpO1xuY29uc3QgcHJvamVjdF9tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC1tYWluXCIpO1xuXG4vLyBwcmlvcml0eSBidXR0b25zIGlucHV0IGFuZCBsYWJlbHNcbmNvbnN0IGxvd19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcmlvcml0eS1idG4tbG93XCIpO1xuY29uc3QgbWVkX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByaW9yaXR5LWJ0bi1tZWRpdW1cIik7XG5jb25zdCBoaWdoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByaW9yaXR5LWJ0bi1oaWdoXCIpO1xuY29uc3QgbG93aW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1wcmlvcml0eS1sb3dcIik7XG5jb25zdCBtZWRpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByaW9yaXR5LW1lZGl1bVwiKTtcbmNvbnN0IGhpZ2hpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByaW9yaXR5LWhpZ2hcIik7XG5cbi8vc2V0IGRpc3BsYXkgdG8gbm9uZSBmb3IgZGV0YWlscyBvdmVybGF5XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWRldGFpbHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5cblxuYWRkcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZF9wcm9qZWN0X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGNvbnNvbGUubG9nKGFkZF9wcm9qZWN0X292ZXJsYXkuc3R5bGUuZGlzcGxheSk7XG59KVxuYWRkX3Byb2plY3RfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCgpID0+IHtcbiAgICBhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zb2xlLmxvZyhhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkpO1xufSlcblxuXG5cbnNpZGViYXJfdG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG4gICAgaWYgKHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtcHJvamVjdC1hY3RpdmVcIikpIHtcbiAgICAgICAgc2lkZWJhcl9wcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhZGQtcHJvamVjdC1hY3RpdmVcIilcbiAgICB9XG5cbiAgICBpZiAodG9kb19tYWluLnN0eWxlLmRpc3BsYXkgIT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RfbWFpbi5zdHlsZS5kaXNwbGF5ID09PSBcImdyaWRcIikge1xuICAgICAgICBwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxufSlcblxuc2lkZWJhcl9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGlmIChzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfdG9kby5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSAhPT0gXCJncmlkXCIpIHtcbiAgICAgICAgcHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9XG5cbiAgICBpZiAodG9kb19tYWluLnN0eWxlLmRpc3BsYXkgPT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG59KVxuXG5sb3dpbnB1dC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGxvd19idG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0bi1sb3ctYWN0aXZlXCIpO1xuICAgIG1lZF9idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1tZWRpdW0tYWN0aXZlXCIpO1xuICAgIGhpZ2hfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4taGlnaC1hY3RpdmVcIik7XG59XG5cbm1lZGlucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbWVkX2J0bi5jbGFzc0xpc3QudG9nZ2xlKFwicHJpb3JpdHktYnRuLW1lZGl1bS1hY3RpdmVcIilcbiAgICBsb3dfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4tbG93LWFjdGl2ZVwiKTtcbiAgICBoaWdoX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLWhpZ2gtYWN0aXZlXCIpO1xufVxuXG5oaWdoaW5wdXQub25jbGljayA9ICgpID0+IHtcbiAgICBoaWdoX2J0bi5jbGFzc0xpc3QudG9nZ2xlKFwicHJpb3JpdHktYnRuLWhpZ2gtYWN0aXZlXCIpO1xuICAgIGxvd19idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1sb3ctYWN0aXZlXCIpO1xuICAgIG1lZF9idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1tZWRpdW0tYWN0aXZlXCIpO1xufVxuXG5cbi8vbG9jYWwgc3RvcmFnZSB0ZXN0aW5nXG5cbmxvY2FsU3RvcmFnZS5wbGFudHMgPSBKU09OLnN0cmluZ2lmeSh7XCJmcnVpdFwiOiBcImFwcGxlXCJ9KTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wbGFudHMpLmZydWl0KVxuXG5sZXQgdG9kb3MgPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb3MpIHx8IHt9KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9