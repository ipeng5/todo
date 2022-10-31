import { format, differenceInDays } from 'date-fns';

export let categories = [];
export let categoryArr = [];
export let currentCategory;
export let currentTask;
export let filteredCategory = {
  categoryName: '',
  tasks: [],
};

export const addCategory = function (id, categoryName) {
  const newCategory = {
    id: '',
    categoryName: '',
    tasks: [],
  };
  newCategory.id = id;
  newCategory.categoryName = categoryName;
  categories.push(newCategory);
  setLocalStorage();
};

export const addTask = function (id, data) {
  const newTask = {};
  newTask.id = id;
  newTask.title = data.title;
  newTask.description = data.description;
  newTask.dueDate = data.dueDate;
  newTask.priority = data.priority;
  newTask.completed = false;
  currentCategory.tasks.push(newTask);
  setLocalStorage();
};

export const deleteCategory = function (id) {
  const index = categories.findIndex(el => el.id === id);
  filteredCategory.tasks = [];
  categories.splice(index, 1);
  categoryArr = [...Object.values(categories)];
  filteredCategory.categoryName = 'All';
  filteredCategory.tasks = categoryArr.flatMap(cat => cat.tasks);
  setLocalStorage();
};

export const selectCategory = function (id) {
  currentCategory = categories.find(cat => cat.id === id);
};

export const selectTopFilter = function (id) {
  categoryArr = [...Object.values(categories)];
  filteredCategory.tasks = [];

  if (id === 'filter--all') {
    filteredCategory.categoryName = 'All';
    filteredCategory.tasks = categoryArr.flatMap(cat => cat.tasks);
  } else if (id === 'filter--today') {
    filteredCategory.categoryName = 'Today';
    filteredCategory.tasks = categoryArr
      .flatMap(cat => cat.tasks)
      .filter(task => task.dueDate === format(new Date(), 'yyyy-MM-dd'));
  } else if (id === 'filter--7days') {
    filteredCategory.categoryName = 'Next 7 days';
    filteredCategory.tasks = categoryArr
      .flatMap(category => category.tasks)
      .filter(
        task =>
          differenceInDays(new Date(task.dueDate), new Date()) <= 7 &&
          differenceInDays(new Date(task.dueDate), new Date()) >= 0
      );
  }
};

export const deleteTask = function (id) {
  const index = currentCategory.tasks.findIndex(task => task.id === id);
  currentCategory.tasks.splice(index, 1);
  setLocalStorage();
};

export const selectTask = function (id) {
  categoryArr = [...Object.values(categories)];
  [currentTask] = categoryArr.flatMap(cat => cat.tasks).filter(task => task.id === id);
};

export const editTask = function (data) {
  currentTask.title = data.title;
  currentTask.description = data.description;
  currentTask.dueDate = data.dueDate;
  currentTask.priority = data.priority;
  setLocalStorage();
};

export const completeTask = function (id) {
  const index = currentCategory.tasks.findIndex(task => task.id === id);
  currentTask = currentCategory.tasks[index];
  currentTask.completed = !currentTask.completed;
  setLocalStorage();
};

function setLocalStorage() {
  localStorage.setItem('categories', JSON.stringify(categories));
}

function getLocalStorage() {
  const data = JSON.parse(localStorage.getItem('categories'));
  if (!data) return;
  categories = data;
  categoryArr = [...Object.values(categories)];
  filteredCategory.tasks = categoryArr.flatMap(cat => cat.tasks);
}
getLocalStorage();
