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
/* harmony export */   "createToDo": () => (/* binding */ createToDo)
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



const addproject = document.querySelector(".addproject");
const add_project_overlay = document.querySelector(".add-project-overlay");
const tododetail = document.querySelector(".todo-detail");
const todocheck = document.querySelector(".todo-check");
const tododate = document.querySelector(".todo-date");
const todotitle = document.querySelector(".todo-title");
const add_project_close = document.querySelector(".add-project-close");

const sidebar_todo = document.querySelector(".add-project-sidebar-todo");
const sidebar_project = document.querySelector(".add-project-sidebar-project");
const todo_main = document.querySelector(".add-project-main");
const project_main = document.querySelector(".create-project-main");

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
    console.log("test todo")
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
    console.log("test project")
})



























})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlDOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgcHJvamVjdCkge1xuXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbWVkaXVtXCIpO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJsb3dcIikge1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sb3dcIik7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcHJvamVjdClcbiAgICB9XG5cbiAgICBsZXQgdG9kb19sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvX2xlZnQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGVmdFwiKTtcblxuICAgICAgICBsZXQgdG9kb19jaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9fY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2tcIik7XG5cbiAgICAgICAgbGV0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvX3RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICB0b2RvX3RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgbGV0IHRvZG9fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9fcmlnaHQuY2xhc3NMaXN0LmFkZChcInRvZG8tcmlnaHRcIik7XG5cbiAgICAgICAgbGV0IHRvZG9fZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19kZXRhaWwuY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlsXCIpO1xuICAgICAgICB0b2RvX2RldGFpbC5pbm5lclRleHQgPSBcImRldGFpbHNcIjtcblxuICAgICAgICBsZXQgdG9kb19kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19kYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICAgIHRvZG9fZGF0ZS5pbm5lclRleHQgPSBkYXRlO1xuXG4gICAgICAgIGxldCB0b2RvX2Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb19jbG9zZS5jbGFzc0xpc3QuYWRkKFwidG9kby1jbG9zZVwiKTtcblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluY29udGVudFwiKS5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvX2xlZnQpXG4gICAgICAgICAgICB0b2RvX2xlZnQuYXBwZW5kQ2hpbGQodG9kb19jaGVjayk7XG4gICAgICAgICAgICB0b2RvX2xlZnQuYXBwZW5kQ2hpbGQodG9kb190aXRsZSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb19yaWdodCk7XG4gICAgICAgICAgICB0b2RvX3JpZ2h0LmFwcGVuZENoaWxkKHRvZG9fZGV0YWlsKTtcbiAgICAgICAgICAgIHRvZG9fcmlnaHQuYXBwZW5kQ2hpbGQodG9kb19kYXRlKTtcbiAgICAgICAgICAgIHRvZG9fcmlnaHQuYXBwZW5kQ2hpbGQodG9kb19jbG9zZSlcbn1cblxuXG5cblxuXG5leHBvcnQge2NyZWF0ZVRvRG99XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Y3JlYXRlVG9Eb30gZnJvbSBcIi4vZG9tXCI7XG5cblxuY29uc3QgYWRkcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcHJvamVjdFwiKTtcbmNvbnN0IGFkZF9wcm9qZWN0X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW92ZXJsYXlcIik7XG5jb25zdCB0b2RvZGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbFwiKTtcbmNvbnN0IHRvZG9jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jaGVja1wiKTtcbmNvbnN0IHRvZG9kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRhdGVcIik7XG5jb25zdCB0b2RvdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIik7XG5jb25zdCBhZGRfcHJvamVjdF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtY2xvc2VcIik7XG5cbmNvbnN0IHNpZGViYXJfdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3Qtc2lkZWJhci10b2RvXCIpO1xuY29uc3Qgc2lkZWJhcl9wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1zaWRlYmFyLXByb2plY3RcIik7XG5jb25zdCB0b2RvX21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1haW5cIik7XG5jb25zdCBwcm9qZWN0X21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcm9qZWN0LW1haW5cIik7XG5cbmFkZHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBjb25zb2xlLmxvZyhhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkpO1xufSlcbmFkZF9wcm9qZWN0X2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwoKSA9PiB7XG4gICAgYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc29sZS5sb2coYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5KTtcbn0pXG50b2RvY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2RvY2hlY2suY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tY2hlY2stYWN0aXZlXCIpO1xuICAgIHRvZG9kZXRhaWwuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tZGV0YWlsLWFjdGl2ZVwiKTtcbiAgICB0b2RvZGF0ZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1kYXRlLWFjdGl2ZVwiKTtcbiAgICB0b2RvdGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tdGl0bGUtYWN0aXZlXCIpO1xuXG5cbn0pXG5cblxuXG5zaWRlYmFyX3RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXNpZGViYXJfdG9kby5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtcHJvamVjdC1hY3RpdmVcIikpIHtcbiAgICAgICAgc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1hY3RpdmVcIik7XG4gICAgfVxuICAgIGlmIChzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpKSB7XG4gICAgICAgIHNpZGViYXJfcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLXByb2plY3QtYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgaWYgKHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ICE9PSBcImdyaWRcIikge1xuICAgICAgICB0b2RvX21haW4uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0X21haW4uc3R5bGUuZGlzcGxheSA9PT0gXCJncmlkXCIpIHtcbiAgICAgICAgcHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJ0ZXN0IHRvZG9cIilcbn0pXG5cbnNpZGViYXJfcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghc2lkZWJhcl9wcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3Byb2plY3QuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZWJhcl90b2RvLmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKSkge1xuICAgICAgICBzaWRlYmFyX3RvZG8uY2xhc3NMaXN0LnJlbW92ZShcImFkZC1wcm9qZWN0LWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdF9tYWluLnN0eWxlLmRpc3BsYXkgIT09IFwiZ3JpZFwiKSB7XG4gICAgICAgIHByb2plY3RfbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfVxuXG4gICAgaWYgKHRvZG9fbWFpbi5zdHlsZS5kaXNwbGF5ID09PSBcImdyaWRcIikge1xuICAgICAgICB0b2RvX21haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRlc3QgcHJvamVjdFwiKVxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=