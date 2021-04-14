const categoriesEl = document.querySelectorAll('#categories .item');

console.log(`В списке ${categoriesEl.length} категории.`);


const categoryItems = () => {
    categoriesEl.forEach((category) => {
        console.log('Категория: ', category.firstElementChild.textContent);
        console.log('Количество: ', category.lastElementChild.children.length);
    });
    return
};    
console.log(categoryItems(categoriesEl));