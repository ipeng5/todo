import { format, parseISO, differenceInDays } from 'date-fns';

export const categories = [];
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
};

export const deleteCategory = function (id) {
  const index = categories.findIndex(el => el.id === id);
  categories.splice(index, 1);
};

export const selectCategory = function (id) {
  currentCategory = categories.find(cat => cat.id === id);
};

export const selectTopFilter = function (id) {
  const now = new Date();
  const categoryArr = [...Object.values(categories)];
  filteredCategory.tasks = [];

  if (id === 'filter--all') {
    console.log(filteredCategory.tasks);
    filteredCategory.categoryName = 'All';
    filteredCategory.tasks = categoryArr.flatMap(cat => cat.tasks);
  }
  if (id === 'filter--today') {
    filteredCategory.categoryName = 'Today';
    filteredCategory.tasks = categoryArr
      .flatMap(cat => cat.tasks)
      .filter(task => task.dueDate === format(now, 'yyyy-MM-dd'));
  }
  if (id === 'filter--7days') {
    const todayDate = format(new Date(), 'yyyy-MM-dd');
    filteredCategory.categoryName = 'Next 7 days';
    filteredCategory.tasks = categoryArr
      .flatMap(cat => cat.tasks)
      .filter(task => {
        differenceInDays(parseISO(new Date(task.dueDate)), parseISO(new Date())) <= 7;
      });
  }
};

export const deleteTask = function (id) {
  const index = currentCategory.tasks.findIndex(task => task.id === id);
  currentCategory.tasks.splice(index, 1);
};

export const selectTask = function (id) {
  const index = currentCategory.tasks.findIndex(task => task.id === id);
  currentTask = currentCategory.tasks[index];
};

export const editTask = function (data) {
  currentTask.title = data.title;
  currentTask.description = data.description;
  currentTask.dueDate = data.dueDate;
  currentTask.priority = data.priority;
};

export const completeTask = function (id) {
  const index = currentCategory.tasks.findIndex(task => task.id === id);
  currentTask = currentCategory.tasks[index];
  currentTask.completed = !currentTask.completed;
};
