import todoView from "./todoView.js";
import counterView from "./counterView.js";
import filterView from "./filterView.js";

export default (targetElement, state) => {
  const element = targetElement.cloneNode(true);

  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.replaceWith(todoView(list, state));
  counter.replaceWith(counterView(counter, state));
  filters.replaceWith(filterView(filters, state));

  return element;
};
