const removePriority = function () {
  const radioBtns = document.querySelectorAll('.form__priority-btn');
  radioBtns.forEach(btn => {
    btn.classList.remove(`form__priority-${btn.textContent.toLowerCase()}--active`);
  });
};

const addPriority = function (e) {
  removePriority();
  e.target.classList.add(`form__priority-${e.target.textContent.toLowerCase()}--active`);
};

const updatePriority = (function () {
  const radioBtns = document.querySelectorAll('.form__priority-btn');
  radioBtns.forEach(btn =>
    btn.addEventListener('click', e => {
      removePriority();
      addPriority(e);
    })
  );
})();

export default updatePriority;
