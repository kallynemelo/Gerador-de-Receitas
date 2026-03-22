async function getReceita() {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    console.log(response)
    let data = await response.json()
    console.log(data)
    let receita = data.meals[0];
    console.log(receita)

    document.getElementById("receita").innerHTML = `
    <h3>${receita.strMeal}</h3>
    <img width = "150px" src="${receita.strMealThumb}">
    <p>${receita.strInstructions}</p>
    `
}
