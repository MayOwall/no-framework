import getTodos from "./getTodos.js";
import todoView from "./todoView.js";
import filterView from "./filterView.js";
import counterView from "./counterView.js";

import registry from "./registry.js";

registry.add("todos", todoView);
registry.add("filter", filterView);
registry.add("counter", counterView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

window.requestAnimationFrame(() => {
  const main = document.querySelector(".todoapp");
  const newMain = registry.renderRoot(root, state);
  main.replaceWith(newMain);
});
