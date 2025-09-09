// promise .. pending, resolve(success), reject(error)

const categoryContainer = document.getElementById('categoryContainer');

const loadCategory = () => {

    fetch('https://openapi.programming-hero.com/api/categories')
    .then(response => response.json())
    .then(data => {
        //console.log(data.categories);

        const categories = data.categories

        categories.forEach(cat => {
        categoryContainer.innerHTML += `
        <p id="${cat.id}" class="hover:bg-[#15803d] hover:text-white py-2 px-2">${cat.category_name}</p>`
    });

    categoryContainer.addEventListener('click' , (e) => {
        const allP = document.querySelectorAll('p');
        
        allP.forEach(p => {
            p.classList.remove("bg-[#15803d]");
            p.classList.remove("text-white");

        })


    if(e.target.localName === 'p'){
        // console.log(e.target.id);
        e.target.classList.add('bg-[#15803d]');
        e.target.classList.add('text-white');
        getPlantsByCategory(e.target.id)
    }
})
        
})
    .catch(error => {
        // console.log(error);
});
};

// get plants by category

const getPlantsByCategory = (categoryId) =>{
    console.log(categoryId)
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

}


loadCategory();


    





