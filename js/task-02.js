const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('#ingredients');


const listIngredients = ingredients.map( ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  
  return ingredientEl
})

list.append(...listIngredients);

console.log(list);
