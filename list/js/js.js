// const apiKey = "1a6bb5b6f75a4d81a0c9e061ff13e161";
// const url = `https://api.spoonacular.com/recipes/random?number=30&apiKey=${apiKey}`;
const url = "/Recipes.json";
async function filterRecipes() {
  const url = "/Recipes.json";
  try {
    let res = await fetch(url);
    let data = await res.json();
    let recipeList = document.querySelector(".cat-food-list");
    let empty = document.querySelector(".empty");

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

          box.className = "box";
          recipeTitle.className = "food-title";
          recipeImage.className = "img-food";
          cookingTime.className = "food-duration";
          getPreparation.className = "preparation";
          createBoxDesc.className = "box-description";
          createBoxImg.className = "box-img";
          createDuration.className = "duration";

          recipeTitle.textContent = element["title"];
          recipeImage.src = element["image"];
          getPreparation.innerHTML =
            element["summary"].substring(0, 400) + "...";
          cookingTime.textContent = element["readyInMinutes"] + " min";

          createBoxImg.append(recipeImage);
          box.append(createBoxImg);

          createDuration.append(recipeTitle, cookingTime);
          createBoxDesc.append(createDuration);
          createBoxDesc.append(getPreparation);

          box.append(createBoxDesc);

          recipeList.append(box);
          empty.style.display = "none";
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}
filterRecipes();

async function searchRecipe() {
  // const url = "/Recipes.json";
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

            box.className = "box";
            recipeTitle.className = "food-title";
            recipeImage.className = "img-food";
            cookingTime.className = "food-duration";
            getPreparation.className = "preparation";
            createBoxDesc.className = "box-description";
            createBoxImg.className = "box-img";
            createDuration.className = "duration";

            recipeTitle.textContent = element["title"];
            recipeImage.src = element["image"];
            getPreparation.innerHTML =
              element["summary"].substring(0, 400) + "...";
            cookingTime.textContent = element["readyInMinutes"] + " min";

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
