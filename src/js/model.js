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

export const addCategory = function (id, categoryName) {
  const obj = {
    id: '',
    categoryName: '',
    task: {},
  };
  obj.id = id;
  obj.categoryName = categoryName;
  categories.push(obj);
};

export const deleteCategory = function (id) {
  const index = categories.findIndex(el => el.id === id);
  categories.splice(index, 1);
};
