import {createContext, useState} from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

export default function FavouritesContextProvider({children}){

    const [favMealIds, setFavMealIds] = useState([]);

    function addFavourite(id) {
        setFavMealIds((currentIds) => [ ...currentIds, id]);
    }

    function removeFavourite(id) {
        setFavMealIds((currentIds) =>
            currentIds.filter(mealId => mealId !== id )
        );
    }

    const value = {
      ids : favMealIds,
      addFavourite: addFavourite,
      removeFavourite: removeFavourite
    };

    return  <FavouritesContext.Provider value={value}>
                {children}
            </FavouritesContext.Provider>
}