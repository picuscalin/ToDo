import { Todo } from "./to-do-create.js";
import { formHandle } from "./form.js";
import { projectForm } from "./form.js";
const list = [];
const projectList = [];

export function toDoCard() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
  wrapper.classList.add("wrapper");
  list.forEach((element) => {
    const card = document.createElement("div");
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", (e) => {
      list.splice(e.target.dataset.index, 1);
      card.remove();

      toDoCard();
    });
    card.classList.add("card");
    card.dataset.index = list.indexOf(element);
    card.innerHTML = `<div>${element.title}<div/> <div>${element.due}<div/> <div>${element.desc}<div/>  <div>${element.priority}<div/> `;
    card.appendChild(deleteBtn);
    deleteBtn.textContent = "delete";

    wrapper.appendChild(card);
  });
}
function projectDisplay() {
  const sidebar = document.querySelector(".sidebar");
  const wrapper = document.querySelector(".wrapper");

  const projectButtons = document.querySelector(".projectButtons");
  projectButtons.innerHTML = "";

  projectList.forEach((element) => {
    const button = document.createElement("button");

    button.textContent = element;
    button.addEventListener("click", (e) => {
      console.log("nigger");
    });
    projectButtons.appendChild(button);
    button.classList.add("projectNames");
  });
}
export function showTask() {
  const plus = document.querySelector(".plus");
  const dialog = document.querySelector("dialog");
  const close = document.querySelector(".close");
  const form = document.querySelector("form");

  plus.addEventListener("click", (e) => {
    dialog.showModal();
  });
  close.addEventListener("click", (e) => {
    form.reset();
    dialog.close();
  });

  formHandle(toDoCard, list);
}
export function showForm() {
  const modal = document.querySelector(".projectDialog");
  const projectClose = document.querySelector(".projectClose");
  const projectBtn = document.querySelector(".project");
  projectBtn.addEventListener("click", (e) => {
    modal.showModal();
  });
  projectClose.addEventListener("click", (e) => {
    modal.close();
    projectForm().newProject.reset();
  });
  projectForm(projectDisplay, projectList);
}
console.log(list);
