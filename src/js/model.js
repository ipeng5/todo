export const state = {
  category: { title: '', task: {} },
  newCat: [],
};

let title = 'Category from JS';
let taskName = 'Task from JS';
let dueDate = 'Nov 1';
let completed = false;

state.category.title = title;
state.category.task = {
  taskName: taskName,
  dueDate: dueDate,
  completed: false,
};

state.category;

// export const addCategory = function (cat) {
//   state.newCat.push(cat);
// };
