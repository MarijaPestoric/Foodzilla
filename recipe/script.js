let recipeTitle = document.querySelector('.food-title');
let recipeImage = document.querySelector('.food-image');
let directionsList = document.querySelector('.directions-list');
let directionsItems = Array.from(document.querySelectorAll('.directions-item'));
let cookingTime = document.querySelector('.cooking-time');
let servingCount = document.querySelector('.serving-count');
let servingKcal = document.querySelector('.serving-kcal');
let ingredientItems = document.querySelector('.container__ingredients-items');
let ingredientName = document.querySelector('.ingredient-name');
let ingredientQuantity = document.querySelector('.ingredient-quantity');

let key = config.SECRET_API_KEY;
async function getInfo() {
    const url = `https://api.spoonacular.com/recipes/716429/information?apiKey=${key}&includeNutrition=false`;
   let response = await fetch(url);
    let data = await response.json();
    let {title, image, servings, readyInMinutes} = data;
     recipeTitle.textContent = title;
     recipeImage.src = image; 
     servingCount.textContent = servings + 'servings';
     cookingTime.textContent = readyInMinutes + 'minutes';  
}
getInfo();
async function getDirections(){
    let url = `https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=${key}`;
    let response = await fetch(url);
    let data = await response.json();
    for(let i=0; i<data[0].steps.length; i++){
        directionsList.innerHTML += `<li>${data[0].steps[i].step}</li>` 
    }
}

getDirections();

async function getIngredients(){
    let url = `https://api.spoonacular.com/recipes/716429/information?apiKey=${key}&includeNutrition=false`;
    let response = await fetch(url);
    let data = await response.json();
    let ingredients = data.extendedIngredients;
    for(let i=0; i<ingredients.length; i++){
        ingredientItems.innerHTML += `<div class="ingredient-item">
        <p class="ingredient-name"> ${ingredients[i].nameClean}</p> 
        <p> ${ingredients[i].amount} ${ingredients[i].unit}</div>` ;
    }
}
getIngredients();

async function getNutrition(){
    let url = `https://api.spoonacular.com/recipes/1003464/nutritionWidget.json?apiKey=${key}`;
    let response = await fetch(url);
    let data = await response.json();
    let {calories} = data;
    servingKcal.textContent = calories + 'cal';
}   

getNutrition()