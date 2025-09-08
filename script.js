// promise .. pending, resolve(success), reject(error)

const categoryContainer = document.getElementById('categoryContainer')



const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
.then(response => response.json())
.then(data => {
    console.log(data.categories);

    const categories = data.categories
    categories.forEach(cat => {
        categoryContainer.innerHTML += `
        <p class="hover:bg-[#15803d] hover:text-white py-2 px-2">${cat.category_name}</p>`
    });
})
.catch(error => {
    console.log(error);
})
}
loadCategory();
