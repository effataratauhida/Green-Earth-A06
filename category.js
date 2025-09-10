const categoryContainer = document.getElementById('categoryContainer');
const plantsContainer = document.getElementById('plants-container');

const treeBtn = document.getElementById("all_tress_btn");

const clearActive = () => {
    treeBtn.classList.remove("bg-[#15803d]", "text-white"); 
    const allP = categoryContainer.querySelectorAll('p');

    allP.forEach(p => { 
        p.classList.remove("bg-[#15803d]", "text-white")}); 
};

treeBtn.addEventListener("click", () => {
    clearActive();
    treeBtn.classList.add("bg-[#15803d]", "text-white");  
});

const loadCategory = () => {

    fetch('https://openapi.programming-hero.com/api/categories')
    .then(response => response.json())
    .then(data => {
        
        const categories = data.categories
        categories.forEach(cat => {
        categoryContainer.innerHTML += `
        <p id="${cat.id}" class="hover:bg-[#15803d] hover:text-white py-2 px-2 font-medium">${cat.category_name}</p>`
    });

    categoryContainer.addEventListener('click' , (e) => {

    if(e.target.localName === 'p'){
        clearActive();;
        e.target.classList.add('bg-[#15803d]' , 'text-white');
        getPlantsByCategory(e.target.id)
    }
})
    .catch(error => {
         //console.log(error);
            
    });
});
};

// get plants by category

const getPlantsByCategory = (categoryId) =>{
    
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then(res => res.json())
    .then(data => {
        showPlantsByCategory(data.plants);
    })
    .catch(err => {
        //console.log(err)
    })
}




// show plants 
const showPlantsByCategory = (plants) => {

    // clear old cards
    plantsContainer.innerHTML = "";
    
    const arr = Array.isArray(plants) ? plants : [plants];

    let cardsHTML = "";

        arr.slice(0, 3).forEach(plant => {
            cardsHTML += `
            <div  class="card bg-base-100 w-full h-[500px] shadow-sm  rounded-lg">
                <div class="card-body p-2">
                    <img src="${plant.image}" alt="${plant.name}" class="max-w-full h-64 rounded-lg">
                    <h1 class="text-lg font-semibold" onclick="loadPlantsDetail(${plant.id})">${plant.name}</h1>
                    <p class="text-xs">${plant.description}</p>
                    <div class="grid grid-cols-2 items-center w-full">
                        <p class=" bg-[#dcfce7] rounded-lg py-1 px-1 border-green-700 border text-[#15803d] text-sm font-semibold text-center">${plant.category}</p>
                        <p class="font-semibold text-right">৳${plant.price}</p>
                    </div>
                    <button class="btn bg-[#15803d] rounded-full w-full  mx-1 mt-2  text-white hover:bg-[#013b17]">Add to Cart</button>
                </div>
            </div>
            `;
             
        })
        plantsContainer.innerHTML = cardsHTML;
}

 
loadCategory();


 






