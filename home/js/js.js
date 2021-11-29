async function getRandomRecipe() {
    let url ="https://api.spoonacular.com/recipes/random";
    let apiKey = '1a6bb5b6f75a4d81a0c9e061ff13e161';
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
}

console.log(getRandomRecipe());