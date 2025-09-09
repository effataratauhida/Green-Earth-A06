// // promise .. pending, resolve(success), reject(error)

// const categoryContainer = document.getElementById('categoryContainer')

// const loadCategory = () => {

//     fetch('https://openapi.programming-hero.com/api/categories')
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data.categories);

//         const categories = data.categories
//         showCategory(categories);
// })
//     .catch(error => {
//         console.log(error);
// })
// }


// const showCategory = (categories) => {
//     categories.forEach(cat => {
//         categoryContainer.innerHTML += `
//         <p id="${cat.id}" class="hover:bg-[#15803d] hover:text-white py-2 px-2">${cat.category_name}</p>`
//     });

// }



