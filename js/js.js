const apiKey = "1a6bb5b6f75a4d81a0c9e061ff13e161";

async function getInfoRecipes() {
  // const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`;
  const url = "Recipes.json";
  try {
    let res = await fetch(url);
    let data = await res.json();
    let recipeList = document.querySelector("#recipe-list");
    data["recipes"].forEach((element) => {
      let recipeTitle = document.createElement("p");
      let recipeImage = document.createElement("img");
      let cookingTime = document.createElement("p");
      let getPreparation = document.createElement("p");
      let createBoxImg = document.createElement("div");
      let createBoxDesc = document.createElement("div");
      let createDuration = document.createElement("div");
      let box = document.createElement("div");

      box.className = "box";
      recipeTitle.className = "food-title";
      recipeImage.className = "food-image";
      cookingTime.className = "food-duration";
      getPreparation.className = "preparation";
      createBoxDesc.className = "box-description";
      createBoxImg.className = "box-img";
      createDuration.className = "duration";

      recipeTitle.textContent = element["title"];
      recipeImage.src = element["image"];
      let preparation = element["summary"].substring(0, 100);
      cookingTime.textContent = element["readyInMinutes"];

      createBoxImg.append(recipeImage);
      box.append(createBoxImg);

      createDuration.append(recipeTitle, cookingTime);
      getPreparation.append(preparation);
      createBoxDesc.append(createDuration);
      createBoxDesc.append(getPreparation);

      box.append(createBoxDesc);

      recipeList.append(box);
    });
  } catch (error) {
    console.log(error);
  }
}
getInfoRecipes();

// top rated

async function topRatedRecipes() {
  // const url = `https://api.spoonacular.com/recipes/random?number=30&apiKey=${apiKey}`;
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

      topRatedBox.className = "box";
      topRatedRecipeTitle.className = "top-rated-title";
      topRatedRecipeImage.className = "top-rated-image";
      topRatedCookingTime.className = "top-rated-duration";
      topRatedPreparation.className = "top-rated-preparation";
      topRatedcreateBoxImg.className = "box-img";
      topRatedCreateBoxDesc.className = "box-description";
      topRatedCreateDuration.className = "duration";

      if (element["veryPopular"] === true) {
        topRatedRecipeTitle.textContent = element["title"];
        topRatedRecipeImage.src = element["image"];
        topRatedCookingTime.textContent = element["readyInMinutes"];
        let preparation = element["summary"].substring(0, 100);

        topRatedcreateBoxImg.append(topRatedRecipeImage);
        topRatedBox.append(topRatedcreateBoxImg);

        topRatedCreateDuration.append(topRatedRecipeTitle, topRatedCookingTime);
        topRatedPreparation.append(preparation);
        topRatedCreateBoxDesc.append(topRatedCreateDuration);
        topRatedCreateBoxDesc.append(topRatedPreparation);

        topRatedBox.append(topRatedCreateBoxDesc);

        topRatedRecipeList.append(topRatedBox);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

topRatedRecipes();

async function healthyRecipes() {
  // const url = `https://api.spoonacular.com/recipes/random?number=30&apiKey=${apiKey}`;
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

      healthyBox.className = "box";
      healthyRecipeTitle.className = "healthy-title";
      healthyRecipeImage.className = "healthy-image";
      healthyCookingTime.className = "healthy-duration";
      healthyPreparation.className = "healthy-preparation";
      healthycreateBoxImg.className = "box-img";
      healthyCreateBoxDesc.className = "box-description";
      healthyCreateDuration.className = "duration";

      if (element["veryHealthy"] === true) {
        healthyRecipeTitle.textContent = element["title"];
        healthyRecipeImage.src = element["image"];
        healthyCookingTime.textContent = element["readyInMinutes"];
        let preparation = element["summary"].substring(0, 100);

        healthycreateBoxImg.append(healthyRecipeImage);
        healthyBox.append(healthycreateBoxImg);

        healthyCreateDuration.append(healthyRecipeTitle, healthyCookingTime);
        healthyPreparation.append(preparation);
        healthyCreateBoxDesc.append(healthyCreateDuration);
        healthyCreateBoxDesc.append(healthyPreparation);

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
    // const elementList1 = [
    //   ...document.querySelectorAll("#top-rated-recipe .box"),
    // ];

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
  let directionsItems = Array.from(
    document.querySelectorAll(".directions-item")
  );
  let cookingTime = document.querySelector(".cooking-time");
  let servingCount = document.querySelector(".serving-count");
  let servingKcal = document.querySelector(".serving-kcal");
  let ingredientItems = document.querySelector(".container__ingredients-items");
  let ingredientName = document.querySelector(".ingredient-name");
  let ingredientQuantity = document.querySelector(".ingredient-quantity");

  $(document).on("click", ".box", function () {
    modal.style.display = "block";
    let foodTitle = this.querySelector('.food-title');
    let foodImg = this.querySelector('.food-image');
    let time = this.querySelector('.food-duration');
    recipeTitle.append(foodTitle.textContent);
    recipeImage.src = foodImg.src;
    cookingTime.textContent = time.textContent + ' min';

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
