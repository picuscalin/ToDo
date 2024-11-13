import { Todo } from "./to-do-create.js";
const list = [];

function formHandle() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    const title = document.querySelector("#title").value;
    const due = document.querySelector("#due").value;
    const desc = document.querySelector("#desc").value;
    const priority = document.querySelector("#priority").value;
    e.preventDefault();
    form.reset();

    console.log(title);
    list.push(new Todo(title, due, desc, priority));
    console.log(list);
    toDoCard();
  });
}
function toDoCard() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
  wrapper.classList.add("wrapper");
  list.forEach((element) => {
    const card = document.createElement("div");
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", (e) => {
      list.splice(e.target.dataset.index, 1);
      card.remove();
      console.log(list);
    });
    card.classList.add("card");
    card.dataset.index = list.indexOf(element);
    card.innerHTML = `<div>${element.title}<div/> <div>${element.due}<div/> <div>${element.desc}<div/>  <div>${element.priority}<div/> `;
    card.appendChild(deleteBtn);
    deleteBtn.textContent = "delete";

    wrapper.appendChild(card);
  });
  console.log(list);
}

export function showTask() {
  const plus = document.querySelector(".plus");
  const dialog = document.querySelector("dialog");
  const close = document.querySelector(".close");
  const form = document.querySelector("form");

  const submit = document.querySelector(".submit");
  plus.addEventListener("click", (e) => {
    dialog.showModal();
  });
  close.addEventListener("click", (e) => {
    form.reset();
    dialog.close();
  });
  formHandle();
}
