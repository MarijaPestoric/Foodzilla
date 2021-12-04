// const apiKey = "1a6bb5b6f75a4d81a0c9e061ff13e161";
// const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`;
async function filterRecipes() {
  const url = "/Recipes.json";
  try {
    let res = await fetch(url);
    let data = await res.json();
    let recipeList = document.querySelector(".cat-food-list");
    data["recipes"].forEach((element) => {
      $(document).on("click", ".cat", function () {
        if (element[this.value] === true) {
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
          getPreparation.innerHTML = element["summary"].substring(0, 400) + '...';
          cookingTime.textContent = element["readyInMinutes"] + " min";

          createBoxImg.append(recipeImage);
          box.append(createBoxImg);

          createDuration.append(recipeTitle, cookingTime);
          createBoxDesc.append(createDuration);
          createBoxDesc.append(getPreparation);

          box.append(createBoxDesc);

          recipeList.append(box);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}
filterRecipes();
