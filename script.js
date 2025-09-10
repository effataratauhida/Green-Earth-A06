// sob plants er data niye card banabo
const allPlants = () => {
  fetch('https://openapi.programming-hero.com/api/plants')
  .then(res => res.json())
  .then((data) => displayAllPlants(data.plants));
}


// modal card detail

const loadPlantsDetail = async(id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    
    const res = await fetch(url);
    const details = await res.json();
    displayPlantsDetail(details);
}
const displayPlantsDetail = (modPlants) => {
    console.log(modPlants);

    const plant = modPlants.plants;

    const detailsBox = document.getElementById('detail-container');
     detailsBox.innerHTML = `
     
            <h2 class="font-semibold text-lg">${plant.name}</h2>
            <img src="${plant.image}" alt="" class="w-full h-64 mt-3">
            <p class="mt-3"><span class="font-semibold">Category:</span>${plant.category}</p>
            <p class="mt-3"><span class="font-semibold">Price:</span> ৳${plant.price}</p>
            <p class="mt-3"><span class="font-semibold">Description:</span>${plant.description} </p>
        `;
    document.getElementById('plant_modal').showModal();
}





const displayAllPlants = (allPlant) => {

const allPlantsContainer = document.getElementById('plants-container');

allPlantsContainer.innerHTML = '';

const sixPlant = allPlant.slice(0, 6);

for (let plant of sixPlant){
    
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div  class="card bg-base-100 w-full h-[500px]  shadow-sm  rounded-lg ">
            <div class="card-body p-2">
                <img src="${plant.image}" alt="" class="max-w-full h-64">
                <h1 class="text-lg font-semibold"  onclick="loadPlantsDetail(${plant.id})" >${plant.name}</h1>
                <p class="text-xs">${plant.description}</p>
                <div class="flex justify-between items-center gap-24">
                    <p class=" bg-[#dcfce7] rounded-lg py-1 px-1 border-green-700 border text-[#15803d] text-sm font-semibold text-center">${plant.category}</p>
                    <p class="font-semibold ">৳${plant.price}</p>
                </div>
                <button class="btn bg-[#15803d] rounded-full w-full  mx-1 mt-2  text-white hover:bg-[#013b17]">Add to Cart</button>
            </div>
        </div>`

    allPlantsContainer.append(cardDiv);    

}    
};

allPlants();