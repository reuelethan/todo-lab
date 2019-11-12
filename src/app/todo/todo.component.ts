import { Component } from "@angular/core";
import { Todo } from "./todo-post";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  task: "go to school";
  completed: false;

  todo: Todo = {
    task: "eat lunch",
    completed: true
  };
  displayedTodos: Todo[] = [
    { task: "Spot a Green tree in Michigan", completed: true },
    { task: "Find A pokemon", completed: true },
    { task: "Find The Bird", completed: false },
    { task: "Drink Juice", completed: false }
  ];
  findStuff() {
    // document.querySelectorAll("li").forEach(function(element, index, array) {
    //   console.log(element.innerText);
    //   console.log(event.target.value);
    //   let words = new RegExp(event.target.value, "g");
    //   if (!element.innerText.match(words)) {
    //     element.style.display = "none";
    //   } else if (element.innerText.match(words)) {
    //     element.style.display = "initial";
    //   }
    //   if (document.querySelector("input").value == "") {
    //     console.log("empty");
    //   }
    // });

    console.log(event.target);
  }
}
