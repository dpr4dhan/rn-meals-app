import {View, Text, Image, StyleSheet } from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import {useLayoutEffect} from "react";

export default function MealDetailScreen({route, navigation})
{
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title
        })
    }, [mealId, navigation])

    return (
        <View style={styles.container}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}/>
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) =>
                <Text key={ingredient}>{ingredient}</Text>
            )}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step) =>
                <Text key={step}>{step}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       padding: 16
   },
    image: {
        width: "100%",
        height: 200
    },

});