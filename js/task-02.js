const list = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const markup = ingredients.reduce(
    (string, item) => string + '<li>${item}</li>', ""
);
console.log(markup);
