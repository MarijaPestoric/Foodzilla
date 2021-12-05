// let key = config.SECRET_API_KEY;
const apiKey = "1d5af0a8f60f4f16ab2fc01744b0155c";
const url = `https://api.spoonacular.com/recipes/random?number=30&apiKey=${apiKey}`;
// const url = "/Recipes.json";
async function filterRecipes() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let recipeList = document.querySelector(".cat-food-list");
    let empty = document.querySelector(".empty");
    $(function () {
      $(".cat").click(function () {
        let value = $(this).val();
        data["recipes"].forEach((element) => {
          if (element[value] === true) {
            let recipeTitle = document.createElement("strong");
            let recipeImage = document.createElement("img");
            let cookingTime = document.createElement("strong");
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
            recipeTitle.className = "food-title";
            recipeImage.className = "img-food";
            cookingTime.className = "food-duration";
            getPreparation.className = "preparation";
            createBoxDesc.className = "box-description";
            createBoxImg.className = "box-img";
            createDuration.className = "duration";
            directionsList.className = "directionsList";
            servingCount.className = "servingCount";
            servingKcal.className = "servingKcal";
            ingredientItems.className = "ingredientItems";

            recipeTitle.textContent = element["title"];
            recipeImage.src = element["image"];
            getPreparation.innerHTML =
              element["summary"].substring(0, 400) + "...";
            cookingTime.innerHTML =
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

            details.append(directionsList);
            details.append(servingCount);
            details.append(ingredientItems);
            details.append(servingKcal);
            createBoxImg.append(recipeImage);
            createDuration.append(recipeTitle, cookingTime);
            createBoxDesc.append(createDuration);
            createBoxDesc.append(getPreparation);

            box.append(createBoxImg);
            box.append(createBoxDesc);
            box.append(details);
            recipeList.append(box);
            empty.style.display = "none";
          }
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
}
filterRecipes();

async function searchRecipe() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let recipeList = document.querySelector(".cat-food-list");
    let empty = document.querySelector(".empty");
    let box1 = document.querySelector(".cat-food-list");
    $(document).on("keyup", ".search", function () {
      let word = $(this).val();
      data["recipes"].forEach((element) => {
        // console.log(Object.values(element).filter(word));
        if (word.length >= 2) {
          if (Object.values(element).includes(word)) {
            let recipeTitle = document.createElement("strong");
            let recipeImage = document.createElement("img");
            let cookingTime = document.createElement("strong");
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
            recipeTitle.className = "food-title";
            recipeImage.className = "img-food";
            cookingTime.className = "food-duration";
            getPreparation.className = "preparation";
            createBoxDesc.className = "box-description";
            createBoxImg.className = "box-img";
            createDuration.className = "duration";
            directionsList.className = "directionsList";
            servingCount.className = "servingCount";
            servingKcal.className = "servingKcal";
            ingredientItems.className = "ingredientItems";

            recipeTitle.textContent = element["title"];
            recipeImage.src = element["image"];
            getPreparation.innerHTML =
              element["summary"].substring(0, 400) + "...";
            cookingTime.innerHTML =
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

            details.append(directionsList);
            details.append(servingCount);
            details.append(servingKcal);
            details.append(ingredientItems);
            box.append(details);

            createBoxImg.append(recipeImage);
            box.append(createBoxImg);

            createDuration.append(recipeTitle, cookingTime);
            createBoxDesc.append(createDuration);
            createBoxDesc.append(getPreparation);

            box.append(createBoxDesc);

            recipeList.append(box);
            empty.style.display = "none";
            box1.style.display = "block";
          } else {
            empty.style.display = "none";
            box1.style.display = "none";
          }
        } else if (word.length < 2) {
          empty.style.display = "block";
          box1.style.display = "none";
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

searchRecipe();

function modelWindow() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
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
    let foodImg = this.querySelector(".img-food");
    let time = this.querySelector(".food-duration");
    let dirList = this.querySelector(".directionsList");
    let serCount = this.querySelector(".servingCount");
    let ingredItems = this.querySelector(".ingredientItems");
    let servKcal = this.querySelector(".servingKcal");

    recipeTitle.append(foodTitle.textContent);
    recipeImage.src = foodImg.src;
    cookingTime.textContent = time.textContent;
    directionsList.innerHTML = dirList.innerHTML;
    servingCount.innerHTML = serCount.textContent + " servings";
    servingKcal.innerHTML = servKcal.textContent + " kcal";
    ingredientItems.innerHTML += "<ul>" + ingredItems.innerHTML + "</ul>";
  });
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

modelWindow();
