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
/* harmony export */   "todoCheckListener": () => (/* binding */ todoCheckListener)
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







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDs7OztBQUlzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFFdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vRDs7QUFFcEQsZ0RBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDO0FBQ0Q7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG8odGl0bGUsIHByaW9yaXR5LCBkYXRlLCBwcm9qZWN0KSB7XG5cbiAgICBsZXQgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICAgIGlmIChwcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcImhpZ2hcIikge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1oaWdoXCIpO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1tZWRpdW1cIik7XG4gICAgfSBlbHNlIGlmIChwcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcImxvd1wiKSB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxvd1wiKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0KVxuICAgIH1cblxuICAgIGxldCB0b2RvX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9fbGVmdC5jbGFzc0xpc3QuYWRkKFwidG9kby1sZWZ0XCIpO1xuXG4gICAgICAgIGxldCB0b2RvX2NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19jaGVjay5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVja1wiKTtcblxuICAgICAgICBsZXQgdG9kb190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9fdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICAgIHRvZG9fdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgICBsZXQgdG9kb19yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb19yaWdodC5jbGFzc0xpc3QuYWRkKFwidG9kby1yaWdodFwiKTtcblxuICAgICAgICBsZXQgdG9kb19kZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX2RldGFpbC5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXRhaWxcIik7XG4gICAgICAgIHRvZG9fZGV0YWlsLmlubmVyVGV4dCA9IFwiZGV0YWlsc1wiO1xuXG4gICAgICAgIGxldCB0b2RvX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX2RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgdG9kb19kYXRlLmlubmVyVGV4dCA9IGRhdGU7XG5cbiAgICAgICAgbGV0IHRvZG9fY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX2Nsb3NlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNsb3NlXCIpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5jb250ZW50XCIpLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9fbGVmdClcbiAgICAgICAgICAgIHRvZG9fbGVmdC5hcHBlbmRDaGlsZCh0b2RvX2NoZWNrKTtcbiAgICAgICAgICAgIHRvZG9fbGVmdC5hcHBlbmRDaGlsZCh0b2RvX3RpdGxlKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX3JpZ2h0KTtcbiAgICAgICAgICAgIHRvZG9fcmlnaHQuYXBwZW5kQ2hpbGQodG9kb19kZXRhaWwpO1xuICAgICAgICAgICAgdG9kb19yaWdodC5hcHBlbmRDaGlsZCh0b2RvX2RhdGUpO1xuICAgICAgICAgICAgdG9kb19yaWdodC5hcHBlbmRDaGlsZCh0b2RvX2Nsb3NlKVxuXG4gICAgdG9kb0NoZWNrTGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0NoZWNrTGlzdGVuZXIoKSB7XG4gICAvLyBsZXQgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb1wiKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb1wiKS5mb3JFYWNoKChjdXJyZW50VG9EbykgPT4ge1xuXG4gICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWNoZWNrXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLWNoZWNrLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby10aXRsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGV0YWlsXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLWRldGFpbC1hY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50VG9Eby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGF0ZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1kYXRlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9kbyBjaGVjayBjbGlja2VkXCIpO1xuICAgICAgICB9KVxuXG4gICAgfSlcblxufVxuXG5cblxuZXhwb3J0IHtjcmVhdGVUb0RvLCB0b2RvQ2hlY2tMaXN0ZW5lcn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtjcmVhdGVUb0RvLCB0b2RvQ2hlY2tMaXN0ZW5lcn0gZnJvbSBcIi4vZG9tXCI7XG5cbmNyZWF0ZVRvRG8oXCJ0aXRsZSBleC5cIiwgXCJoaWdoXCIsIFwianVuZSAzXCIpO1xuXG4vL2J1dHRvbnMgdG8gb3BlbiBvdmVybGF5LCBhbmQgY2xvc2Ugb3ZlcmxheVxuY29uc3QgYWRkcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcHJvamVjdFwiKTtcbmNvbnN0IGFkZF9wcm9qZWN0X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW92ZXJsYXlcIik7XG5jb25zdCBhZGRfcHJvamVjdF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtY2xvc2VcIik7XG5cbi8vIGFkZCB0by1kbyBwcm9qZWN0IHNpZGViYXIgYW5kIGNoYW5naW5nIGRpc3BsYXlcbmNvbnN0IHNpZGViYXJfdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3Qtc2lkZWJhci10b2RvXCIpO1xuY29uc3Qgc2lkZWJhcl9wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1zaWRlYmFyLXByb2plY3RcIik7XG5jb25zdCB0b2RvX21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1haW5cIik7XG5jb25zdCBwcm9qZWN0X21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcm9qZWN0LW1haW5cIik7XG5cbi8vIHByaW9yaXR5IGJ1dHRvbnMgaW5wdXQgYW5kIGxhYmVsc1xuY29uc3QgbG93X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByaW9yaXR5LWJ0bi1sb3dcIik7XG5jb25zdCBtZWRfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJpb3JpdHktYnRuLW1lZGl1bVwiKTtcbmNvbnN0IGhpZ2hfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJpb3JpdHktYnRuLWhpZ2hcIik7XG5jb25zdCBsb3dpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByaW9yaXR5LWxvd1wiKTtcbmNvbnN0IG1lZGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJpb3JpdHktbWVkaXVtXCIpO1xuY29uc3QgaGlnaGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJpb3JpdHktaGlnaFwiKTtcblxuXG4vL2FkZCBldmVudHMgdG8gYWxsIHRvZG9zIHRvIHRvZ2dsZSBhY3RpdmUgY3NzIGFmZmVjdFxuLypcbmxldCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvXCIpO1xudG9kby5mb3JFYWNoKChjdXJyZW50VG9EbykgPT4ge1xuXG4gICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWNoZWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jaGVja1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1jaGVjay1hY3RpdmVcIik7XG4gICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby10aXRsZS1hY3RpdmVcIik7XG4gICAgICAgIGN1cnJlbnRUb0RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXRhaWxcIikuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tZGV0YWlsLWFjdGl2ZVwiKTtcbiAgICAgICAgY3VycmVudFRvRG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWRhdGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tZGF0ZS1hY3RpdmVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9kbyBjaGVjayBjbGlja2VkXCIpO1xuICAgIH0pXG5cbn0pXG4qL1xuXG5cblxuXG5cbmFkZHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBjb25zb2xlLmxvZyhhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkpO1xufSlcbmFkZF9wcm9qZWN0X2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwoKSA9PiB7XG4gICAgYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc29sZS5sb2coYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5KTtcbn0pXG5cblxuXG5zaWRlYmFyX3RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXNpZGViYXJfdG9kby5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtcHJvamVjdC1hY3RpdmVcIikpIHtcbiAgICAgICAgc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1hY3RpdmVcIik7XG4gICAgfVxuICAgIGlmIChzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgaWYgKHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ICE9PSBcImdyaWRcIikge1xuICAgICAgICB0b2RvX21haW4uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSA9PT0gXCJncmlkXCIpIHtcbiAgICAgICAgcHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbn0pXG5cbnNpZGViYXJfcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghc2lkZWJhcl9wcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LnJlbW92ZShcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgIT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHByb2plY3RfbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfVxuXG4gICAgaWYgKHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID09PSBcImdyaWRcIikge1xuICAgICAgICB0b2RvX21haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxufSlcblxubG93aW5wdXQub25jbGljayA9ICgpID0+IHtcbiAgICBsb3dfYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJwcmlvcml0eS1idG4tbG93LWFjdGl2ZVwiKTtcbiAgICBtZWRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4tbWVkaXVtLWFjdGl2ZVwiKTtcbiAgICBoaWdoX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLWhpZ2gtYWN0aXZlXCIpO1xufVxuXG5tZWRpbnB1dC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIG1lZF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0bi1tZWRpdW0tYWN0aXZlXCIpXG4gICAgbG93X2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktYnRuLWxvdy1hY3RpdmVcIik7XG4gICAgaGlnaF9idG4uY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWJ0bi1oaWdoLWFjdGl2ZVwiKTtcbn1cblxuaGlnaGlucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaGlnaF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcInByaW9yaXR5LWJ0bi1oaWdoLWFjdGl2ZVwiKTtcbiAgICBsb3dfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4tbG93LWFjdGl2ZVwiKTtcbiAgICBtZWRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1idG4tbWVkaXVtLWFjdGl2ZVwiKTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy90by1kbyBpdGVtc1xuLy8gY29uc3QgdG9kb2RldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXRhaWxcIik7XG4vLyBjb25zdCB0b2RvY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY2hlY2tcIik7XG4vLyBjb25zdCB0b2RvZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kYXRlXCIpO1xuLy8gY29uc3QgdG9kb3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpO1xuXG5cbi8vIHR1cm4gaW50byBxdWVyeXNlbGVjdG9yIGFsbCBhbmQgdXNlIGUudGFyZ2V0LCBoYXZlIHRvIGNvbnZlcnQgYWxsIHRvIGFkZCBjbGFzc2xpc3Qgb24gc3BlY2lmaWMgdG9kbyBkaXZzXG4vKnRvZG9jaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZG9jaGVjay5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1jaGVjay1hY3RpdmVcIik7XG4gICAgdG9kb2RldGFpbC5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1kZXRhaWwtYWN0aXZlXCIpO1xuICAgIHRvZG9kYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLWRhdGUtYWN0aXZlXCIpO1xuICAgIHRvZG90aXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby10aXRsZS1hY3RpdmVcIik7XG5cblxufSlcbiovXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=