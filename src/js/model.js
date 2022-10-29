// import { nanoid } from 'nanoid';

// export const state = {
//   category: { title: '', task: {} },
//   newCategory: [],
// };

// let title = 'Category from ??JS';
// let taskName = 'Task from ??JS';
// let dueDate = 'Nov 1';
// let completed = false;
// let id;
// let description = 'this is a description';
// let priority = 'high';

// state.category.title = title;
// state.category.task = {
//   taskName: taskName,
//   dueDate: dueDate,
//   completed: false,
// };

// state.category;

// export const addCategory = function (category) {
//   state.newCategory.push(category);
// };

// export const categories = [];

// const category1 = {
//   categoryName: ' Catgory name 1 from JS',
//   tasks: [
//     {
//       id: 123,
//       title: 'task number 1 from JS XOXO', // store input
//       description: 'this is an awesome description',
//       dueDate: 'Nov-1, 2022',
//       priority: 'high',
//       completed: false,
//     },
//   ],
// };

// categories.push(category1);

export const categories = [];
export let currentCategory;

export const addCategory = function (id, categoryName) {
  const newCategory = {
    id: '',
    categoryName: '',
    tasks: [],
  };
  newCategory.id = id;
  newCategory.categoryName = categoryName;
  categories.push(newCategory);
};

// const structureData = function(id, data){
//   const{newData} = data;
//   return{
//     id: id,
//     title: newData.title,
//     description: newData.description,
//     dueData: newData.
//   }
// }

export const addTask = function (id, data) {
  const newTask = {};
  newTask.id = id;
  newTask.title = data.title;
  newTask.description = data.description;
  newTask.dueDate = data.dueDate;
  newTask.priority = data.priority;
  newTask.completed = false;
  currentCategory.tasks.push(newTask);
};

export const deleteCategory = function (id) {
  const index = categories.findIndex(el => el.id === id);
  categories.splice(index, 1);
};

export const selectCategory = function (id) {
  currentCategory = categories.find(cat => cat.id === id);
};
