const apiKey = "1a6bb5b6f75a4d81a0c9e061ff13e161";
//const url = `https://api.spoonacular.com/recipes/random?number=30&apiKey=${apiKey}`;
async function getInfoRecipes() {
   const url = "Recipes.json";
  try {
    let res = await fetch(url);
    let data = await res.json();
    let recipeList = document.querySelector("#recipe-list");
    data["recipes"].forEach((element) => {
      let recipeTitle = document.createElement("strong");
      let recipeImage = document.createElement("img");
      let cookingTime = document.createElement("p");
      let getPreparation = document.createElement("p");
      let createBoxImg = document.createElement("div");
      let createBoxDesc = document.createElement("div");
      let createDuration = document.createElement("div");
      let box = document.createElement("div");
      
      let details = document.createElement("div");
      let directionsList = document.createElement("div");
      let servingCount = document.createElement("p");
      let servingKcal = document.createElement("p");
      let ingredientItems = document.createElement("div");

      box.className = "box";
      details.className = "details";
      recipeTitle.className = "food-title";
      recipeImage.className = "food-image";
      cookingTime.className = "food-duration";
      getPreparation.className = "preparation";
      createBoxDesc.className = "box-description";
      createBoxImg.className = "box-img";
      createDuration.className = "duration";

      directionsList.className = "directionsList";
      servingCount.className = "servingCount";
      servingKcal.className = "servingKcal";
      ingredientItems.className = "ingredientItems";

      recipeTitle.innerHTML = element["title"];
      recipeImage.src = element["image"];
      getPreparation.innerHTML =
        '<i class="fas fa-user-friends"></i> ' + element["servings"];
      cookingTime.innerHTML =
        '<i class="fas fa-stopwatch"></i> ' +
        element["readyInMinutes"] +
        " min";
      directionsList.innerHTML = element["instructions"];
      servingCount.innerHTML = element["servings"];
      servingKcal.innerHTML = element["pricePerServing"];
      element["extendedIngredients"].forEach((element) => {
        // ingredientItems.innerHTML += `<li>${element["name"]}</li>`;
        ingredientItems.innerHTML += `<div class="ingredient-item">
        <p class="ingredient-name"> ${element["name"]}</p> 
        <p> ${element["amount"]} ${element["unit"]}</div>`;
      });

      details.style.display = "none";
      createBoxImg.append(recipeImage);
      box.append(createBoxImg);

      createDuration.append(recipeTitle);
      createBoxDesc.append(createDuration);
      createBoxDesc.append(cookingTime, getPreparation);

      box.append(createBoxDesc);

      details.append(directionsList);
      details.append(servingCount);
      details.append(servingKcal);
      details.append(ingredientItems);
      box.append(details);
      recipeList.append(box);
    });
  } catch (error) {
    console.log(error);
  }
}
getInfoRecipes();

// top rated

async function topRatedRecipes() {
   const url = "Recipes.json";
  try {
    let res = await fetch(url);
    let data = await res.json();
    let topRatedRecipeList = document.querySelector("#top-rated-recipe");
    data["recipes"].forEach((element) => {
      let topRatedRecipeTitle = document.createElement("p");
      let topRatedRecipeImage = document.createElement("img");
      let topRatedCookingTime = document.createElement("p");
      let topRatedPreparation = document.createElement("p");
      let topRatedcreateBoxImg = document.createElement("div");
      let topRatedCreateBoxDesc = document.createElement("div");
      let topRatedCreateDuration = document.createElement("div");
      let topRatedBox = document.createElement("div");
      let details = document.createElement("div");

      let directionsList = document.createElement("div");
      let directionsItems = document.createElement("div");
      let servingCount = document.createElement("p");
      let servingKcal = document.createElement("p");
      let ingredientItems = document.createElement("ul");

      topRatedBox.className = "box";
      details.className = "details";
      topRatedRecipeTitle.className = "food-title";
      topRatedRecipeImage.className = "food-image";
      topRatedCookingTime.className = "food-duration";
      topRatedPreparation.className = "food-preparation";
      topRatedcreateBoxImg.className = "box-img";
      topRatedCreateBoxDesc.className = "box-description";
      topRatedCreateDuration.className = "duration";

      directionsList.className = "directionsList";
      directionsItems.className = "directionsItems";
      servingCount.className = "servingCount";
      servingKcal.className = "servingKcal";
      ingredientItems.className = "ingredientItems";

      details.style.display = "none";

      if (element["veryPopular"] === true) {
        topRatedRecipeTitle.textContent = element["title"];
        topRatedRecipeImage.src = element["image"];
        topRatedPreparation.innerHTML =
          '<i class="fas fa-user-friends"></i> ' + element["servings"];
        topRatedCookingTime.innerHTML =
          '<i class="fas fa-stopwatch"></i> ' +
          element["readyInMinutes"] +
          " min";
        directionsList.innerHTML = element["instructions"];
        servingCount.innerHTML = element["servings"];
        servingKcal.innerHTML = element["pricePerServing"];
        element["extendedIngredients"].forEach((element) => {
          ingredientItems.innerHTML += `<div class="ingredient-item">
          <p class="ingredient-name"> ${element["name"]}</p> 
          <p> ${element["amount"]} ${element["unit"]}</div>`;
        });
  
        topRatedcreateBoxImg.append(topRatedRecipeImage);
        topRatedBox.append(topRatedcreateBoxImg);
        topRatedCreateDuration.append(topRatedRecipeTitle);
        topRatedCreateBoxDesc.append(topRatedCreateDuration);
        topRatedCreateBoxDesc.append(topRatedPreparation, topRatedCookingTime);

        details.append(directionsList);
        details.append(servingCount);
        details.append(servingKcal);
        details.append(ingredientItems);

        topRatedBox.append(topRatedCreateBoxDesc);
        topRatedBox.append(details);
        topRatedRecipeList.append(topRatedBox);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

topRatedRecipes();

async function healthyRecipes() {
   const url = "Recipes.json";
  try {
    let res = await fetch(url);
    let data = await res.json();
    let healthyRecipeList = document.querySelector("#healthy-recipes");
    data["recipes"].forEach((element) => {
      let healthyRecipeTitle = document.createElement("p");
      let healthyRecipeImage = document.createElement("img");
      let healthyCookingTime = document.createElement("p");
      let healthyPreparation = document.createElement("p");
      let healthycreateBoxImg = document.createElement("div");
      let healthyCreateBoxDesc = document.createElement("div");
      let healthyCreateDuration = document.createElement("div");
      let healthyBox = document.createElement("div");
      let details = document.createElement("div");

      let directionsList = document.createElement("div");
      let servingCount = document.createElement("p");
      let servingKcal = document.createElement("p");
      let ingredientItems = document.createElement("ul");

      healthyBox.className = "box";
      details.className = "details";
      healthyRecipeTitle.className = "food-title";
      healthyRecipeImage.className = "food-image";
      healthyCookingTime.className = "food-duration";
      healthyPreparation.className = "food-preparation";
      healthycreateBoxImg.className = "box-img";
      healthyCreateBoxDesc.className = "box-description";
      healthyCreateDuration.className = "duration";

      directionsList.className = "directionsList";
      servingCount.className = "servingCount";
      servingKcal.className = "servingKcal";
      ingredientItems.className = "ingredientItems";

      if (element["veryHealthy"] === true) {
        healthyRecipeTitle.textContent = element["title"];
        healthyRecipeImage.src = element["image"];
        healthyPreparation.innerHTML =
          '<i class="fas fa-user-friends"></i> ' + element["servings"];
        healthyCookingTime.innerHTML =
          '<i class="fas fa-stopwatch"></i> ' +
          element["readyInMinutes"] +
          " min";
        directionsList.innerHTML = element["instructions"];
        servingCount.innerHTML = element["servings"];
        servingKcal.innerHTML = element["pricePerServing"];
        element["extendedIngredients"].forEach((element) => {
          ingredientItems.innerHTML += `<div class="ingredient-item">
          <p class="ingredient-name"> ${element["name"]}</p> 
          <p> ${element["amount"]} ${element["unit"]}</div>`;
        });
  

        details.style.display = "none";

        healthycreateBoxImg.append(healthyRecipeImage);
        healthyBox.append(healthycreateBoxImg);

        healthyCreateDuration.append(healthyRecipeTitle);
        healthyCreateBoxDesc.append(healthyCreateDuration);
        healthyCreateBoxDesc.append(healthyPreparation, healthyCookingTime);

        details.append(directionsList);
        details.append(servingCount);
        details.append(servingKcal);
        details.append(ingredientItems);
        healthyBox.append(details);
        healthyBox.append(healthyCreateBoxDesc);
        healthyRecipeList.append(healthyBox);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

healthyRecipes();

// load more

function loadMore() {
  const loadmore = document.querySelector("#loadmore");
  let currentItems = 3;
  loadmore.addEventListener("click", (e) => {
    const elementList = [...document.querySelectorAll("#recipe-list .box")];
    for (let i = currentItems; i < currentItems + 3; i++) {
      if (elementList[i]) {
        elementList[i].style.display = "block";
        // elementList1[i].style.display = "block";
      }
    }
    currentItems += 3;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
      event.target.style.display = "none";
    }
  });
}

loadMore();

function loadMore1() {
  const loadmore = document.querySelector("#loadmore");
  let currentItems = 3;
  loadmore.addEventListener("click", (e) => {
    const elementList = [
      ...document.querySelectorAll("#top-rated-recipe .box"),
    ];
    for (let i = currentItems; i < currentItems + 3; i++) {
      if (elementList[i]) {
        elementList[i].style.display = "block";
        // elementList1[i].style.display = "block";
      }
    }
    currentItems += 3;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
      event.target.style.display = "none";
    }
  });
}
loadMore1();
async function recipes() {
  const url = "Recipes.json";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function modelWindow() {
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on the button, open the modal;

  // var

  let recipeTitle = document.querySelector(".food-title");
  let recipeImage = document.querySelector(".food-image");
  let directionsList = document.querySelector(".directions-list");
  let cookingTime = document.querySelector(".cooking-time");
  let servingCount = document.querySelector(".serving-count");
  let servingKcal = document.querySelector(".serving-kcal");
  let ingredientItems = document.querySelector(".container__ingredients-items");

  $(document).on("click", ".box", function () {
    modal.style.display = "block";
    let foodTitle = this.querySelector(".food-title");
    let foodImg = this.querySelector(".food-image");
    let time = this.querySelector(".food-duration");
    let dirList = this.querySelector(".directionsList");
    let serCount = this.querySelector(".servingCount");
    let ingredItems = this.querySelector(".ingredientItems");
    let servKcal = this.querySelector(".servingKcal");

    recipeTitle.append(foodTitle.textContent);
    recipeImage.src = foodImg.src;
    cookingTime.textContent = time.textContent;
    directionsList.innerHTML = dirList.innerHTML;
    servingCount.innerHTML = serCount.textContent + ' servings';
    servingKcal.innerHTML = servKcal.textContent + " kcal";
    ingredientItems.innerHTML += "<ul>" + ingredItems.innerHTML + "</ul>";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

modelWindow();
