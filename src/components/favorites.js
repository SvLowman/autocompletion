export function addFavorites(id) {
    let oldFavorites = null;
    try{
    oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    } catch (error) {
        console.error(error);
        oldFavorites = [];
    }
    if (oldFavorites.includes(id)) {
        return;}

    const newFavorites = [...oldFavorites, id];
    console.log(oldFavorites, newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
}