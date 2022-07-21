/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/



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

































/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5jb25zdCBhZGRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRwcm9qZWN0XCIpO1xuY29uc3QgYWRkX3Byb2plY3Rfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3Qtb3ZlcmxheVwiKTtcbmNvbnN0IHRvZG9kZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGV0YWlsXCIpO1xuY29uc3QgdG9kb2NoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNoZWNrXCIpO1xuY29uc3QgdG9kb2RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGF0ZVwiKTtcbmNvbnN0IHRvZG90aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKTtcbmNvbnN0IGFkZF9wcm9qZWN0X2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1jbG9zZVwiKTtcblxuXG5cbmFkZHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBjb25zb2xlLmxvZyhhZGRfcHJvamVjdF9vdmVybGF5LnN0eWxlLmRpc3BsYXkpO1xufSlcbmFkZF9wcm9qZWN0X2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwoKSA9PiB7XG4gICAgYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc29sZS5sb2coYWRkX3Byb2plY3Rfb3ZlcmxheS5zdHlsZS5kaXNwbGF5KTtcbn0pXG50b2RvY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2RvY2hlY2suY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tY2hlY2stYWN0aXZlXCIpO1xuICAgIHRvZG9kZXRhaWwuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tZGV0YWlsLWFjdGl2ZVwiKTtcbiAgICB0b2RvZGF0ZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1kYXRlLWFjdGl2ZVwiKTtcbiAgICB0b2RvdGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tdGl0bGUtYWN0aXZlXCIpO1xuXG4gICAgY29uc29sZS5sb2coXCJ3b3Jrc1wiKTtcbn0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9