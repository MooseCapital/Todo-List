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
/* harmony export */   "sideProjectListener": () => (/* binding */ sideProjectListener),
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

function sideProjectListener() {

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
(0,_dom__WEBPACK_IMPORTED_MODULE_0__.sideProjectListener)();
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





















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxLQUFLOzs7Ozs7O0FBT0w7O0FBRXNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0h0RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNEOztBQUV0RCxnREFBVTtBQUNWLHlEQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG8odGl0bGUsIHByaW9yaXR5LCBkYXRlLCBwcm9qZWN0KSB7XG5cbiAgICBsZXQgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICAgIGlmIChwcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcImhpZ2hcIikge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1oaWdoXCIpO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRpdW1cIik7XG4gICAgfSBlbHNlIGlmIChwcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcImxvd1wiKSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0KVxuICAgIH1cblxuICAgIGxldCB0b2RvX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9fbGVmdC5jbGFzc0xpc3QuYWRkKFwidG9kby1sZWZ0XCIpO1xuXG4gICAgICAgIGxldCB0b2RvX2NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19jaGVjay5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVja1wiKTtcblxuICAgICAgICBsZXQgdG9kb190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9fdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICAgIHRvZG9fdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgICBsZXQgdG9kb19yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb19yaWdodC5jbGFzc0xpc3QuYWRkKFwidG9kby1yaWdodFwiKTtcblxuICAgICAgICBsZXQgdG9kb19kZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX2RldGFpbC5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXRhaWxcIik7XG4gICAgICAgIHRvZG9fZGV0YWlsLmlubmVyVGV4dCA9IFwiZGV0YWlsc1wiO1xuXG4gICAgICAgIGxldCB0b2RvX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX2RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgdG9kb19kYXRlLmlubmVyVGV4dCA9IGRhdGU7XG5cbiAgICAgICAgbGV0IHRvZG9fY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX2Nsb3NlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNsb3NlXCIpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5jb250ZW50XCIpLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9fbGVmdClcbiAgICAgICAgICAgIHRvZG9fbGVmdC5hcHBlbmRDaGlsZCh0b2RvX2NoZWNrKTtcbiAgICAgICAgICAgIHRvZG9fbGVmdC5hcHBlbmRDaGlsZCh0b2RvX3RpdGxlKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX3JpZ2h0KTtcbiAgICAgICAgICAgIHRvZG9fcmlnaHQuYXBwZW5kQ2hpbGQodG9kb19kZXRhaWwpO1xuICAgICAgICAgICAgdG9kb19yaWdodC5hcHBlbmRDaGlsZCh0b2RvX2RhdGUpO1xuICAgICAgICAgICAgdG9kb19yaWdodC5hcHBlbmRDaGlsZCh0b2RvX2Nsb3NlKVxuXG4gICAgdG9kb0xpc3RlbmVyKCk7XG5cbn1cblxuZnVuY3Rpb24gdG9kb0xpc3RlbmVyKCkge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvXCIpLmZvckVhY2goKGN1cnJlbnRUb0RvKSA9PiB7XG5cbiAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWNoZWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY2hlY2tcIikuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tY2hlY2stYWN0aXZlXCIpO1xuICAgICAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLXRpdGxlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXRhaWxcIikuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tZGV0YWlsLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kYXRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLWRhdGUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2RvIGNoZWNrIGluIGRvbSBjbGlja2VkXCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy9wbGFjZWhvbGRlciB0byByZW1vdmUgY3VycmVudCB0by1kbyBmcm9tIG9iamVjdCBhbmQgbG9jYWxzdG9yYWdlXG4gICAgICAgICAgICBjdXJyZW50VG9Eby5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9kbyByZW1vdmUgdGVzdFwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGV0YWlsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvL3BsYWNlaG9sZGVyLCBydW4gZnVuY3Rpb24gdG8gZ3JhYiBhY3R1YWwgZGV0YWlscyBmcm9tIG9iamVjdCBieSB1c2luZyB0b2RvW2luZGV4XSBnZXR0aW5nIHRoZSByaWdodCBvYmplY3QgaW4gYXJyYXlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcblxuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gc2lkZVByb2plY3RMaXN0ZW5lcigpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwic2lkZWhlYWRlci1hY3RpdmVcIik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlaXRlbVwiKS5mb3JFYWNoKChzaWRlaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNpZGVpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNpZGVpdGVtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIHNpZGVpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlaXRlbS1hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWRlaGVhZGVyIGNsaWNrXCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlaXRlbVwiKS5mb3JFYWNoKChzaWRlaXRlbSkgPT4ge1xuXG4gICAgICAgIHNpZGVpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWhlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWhlYWRlci1hY3RpdmVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGVpdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlaXRlbS1hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWl0ZW0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNpZGVpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlaXRlbS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpZGUgaXRlbSBjbGlja1wiKTtcbiAgICAgICAgfSlcblxuICAgIH0pXG5cblxuXG5cblxuXG59XG5cbmV4cG9ydCB7Y3JlYXRlVG9EbywgdG9kb0xpc3RlbmVyLCBzaWRlUHJvamVjdExpc3RlbmVyfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZVRvRG8sIHNpZGVQcm9qZWN0TGlzdGVuZXJ9IGZyb20gXCIuL2RvbVwiO1xuXG5jcmVhdGVUb0RvKFwidGl0bGUgZXguXCIsIFwiaGlnaFwiLCBcImp1bmUgM1wiKTtcbnNpZGVQcm9qZWN0TGlzdGVuZXIoKTtcbi8vYnV0dG9ucyB0byBvcGVuIG92ZXJsYXksIGFuZCBjbG9zZSBvdmVybGF5XG5jb25zdCBhZGRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRwcm9qZWN0XCIpO1xuY29uc3QgYWRkX3Byb2plY3Rfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3Qtb3ZlcmxheVwiKTtcbmNvbnN0IGFkZF9wcm9qZWN0X2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1jbG9zZVwiKTtcblxuLy8gYWRkIHRvLWRvIHByb2plY3Qgc2lkZWJhciBhbmQgY2hhbmdpbmcgZGlzcGxheVxuY29uc3Qgc2lkZWJhcl90b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1zaWRlYmFyLXRvZG9cIik7XG5jb25zdCBzaWRlYmFyX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LXNpZGViYXItcHJvamVjdFwiKTtcbmNvbnN0IHRvZG9fbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtbWFpblwiKTtcbmNvbnN0IHByb2plY3RfbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByb2plY3QtbWFpblwiKTtcblxuLy8gcHJpb3JpdHkgYnV0dG9ucyBpbnB1dCBhbmQgbGFiZWxzXG5jb25zdCBsb3dfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJpb3JpdHktYnRuLWxvd1wiKTtcbmNvbnN0IG1lZF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcmlvcml0eS1idG4tbWVkaXVtXCIpO1xuY29uc3QgaGlnaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcmlvcml0eS1idG4taGlnaFwiKTtcbmNvbnN0IGxvd2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJpb3JpdHktbG93XCIpO1xuY29uc3QgbWVkaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1wcmlvcml0eS1tZWRpdW1cIik7XG5jb25zdCBoaWdoaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1wcmlvcml0eS1oaWdoXCIpO1xuXG4vL3NldCBkaXNwbGF5IHRvIG5vbmUgZm9yIGRldGFpbHMgb3ZlcmxheVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1kZXRhaWxzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuXG5cbmFkZHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBjb25zb2xlLmxvZyhhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkpO1xufSlcbmFkZF9wcm9qZWN0X2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwoKSA9PiB7XG4gICAgYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc29sZS5sb2coYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5KTtcbn0pXG5cblxuXG5zaWRlYmFyX3RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXNpZGViYXJfdG9kby5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtcHJvamVjdC1hY3RpdmVcIikpIHtcbiAgICAgICAgc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1hY3RpdmVcIik7XG4gICAgfVxuICAgIGlmIChzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgaWYgKHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ICE9PSBcImdyaWRcIikge1xuICAgICAgICB0b2RvX21haW4uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSA9PT0gXCJncmlkXCIpIHtcbiAgICAgICAgcHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbn0pXG5cbnNpZGViYXJfcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghc2lkZWJhcl9wcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LnJlbW92ZShcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgIT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHByb2plY3RfbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfVxuXG4gICAgaWYgKHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID09PSBcImdyaWRcIikge1xuICAgICAgICB0b2RvX21haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxufSlcblxubG93aW5wdXQub25jbGljayA9ICgpID0+IHtcbiAgICBsb3dfYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwcmlvcml0eS1idG4tbG93LWFjdGl2ZVwiKTtcbiAgICBtZWRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4tbWVkaXVtLWFjdGl2ZVwiKTtcbiAgICBoaWdoX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLWhpZ2gtYWN0aXZlXCIpO1xufVxuXG5tZWRpbnB1dC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIG1lZF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0bi1tZWRpdW0tYWN0aXZlXCIpXG4gICAgbG93X2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLWxvdy1hY3RpdmVcIik7XG4gICAgaGlnaF9idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1oaWdoLWFjdGl2ZVwiKTtcbn1cblxuaGlnaGlucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaGlnaF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0bi1oaWdoLWFjdGl2ZVwiKTtcbiAgICBsb3dfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4tbG93LWFjdGl2ZVwiKTtcbiAgICBtZWRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4tbWVkaXVtLWFjdGl2ZVwiKTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=