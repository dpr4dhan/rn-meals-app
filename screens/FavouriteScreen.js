import {StyleSheet, Text, View} from "react-native";
import {useContext} from "react";
import {FavouritesContext} from "../store/context/favourites-context";
import MealsList from "../components/MealsList/MealsList";
import {MEALS} from "../data/dummy-data";
export default function FavouriteScreen()
{
    const favMealCtx = useContext(FavouritesContext);
    const favMeals = MEALS.filter(meal => favMealCtx.ids.includes(meal.id));

    if(favMeals.length == 0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favourite meals yet.</Text>
        </View>
    }
    return <MealsList items={favMeals}/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
});