import { Todo } from "./to-do-create";
import { toDoCard } from "./visual-to-to";
import { storeToDo } from "./project";
export function formHandle(fnc, list) {
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
    fnc();
  });
}

export function projectForm(fnc, listproject) {
  const newProject = document.querySelector(".projectForm");
  newProject.addEventListener("submit", (e) => {
    const projectText = document.querySelector("#projectText").value;
    console.log(projectText);
    e.preventDefault();

    newProject.reset();
    listproject.push(projectText);
    console.log(listproject);
    fnc();
  });
  return { newProject };
}
