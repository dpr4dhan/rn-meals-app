import {View, Text, Image, StyleSheet,ScrollView } from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import {useContext, useLayoutEffect} from "react";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {FavouritesContext} from "../store/context/favourites-context";

export default function MealDetailScreen({route, navigation})
{
    const favMealCtx = useContext(FavouritesContext);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId );

    const mealIsFavourite = favMealCtx.ids.includes(mealId);

    function selectedFavHandler()
    {
        if(mealIsFavourite){
            favMealCtx.removeFavourite(mealId);
        }else{
            favMealCtx.addFavourite(mealId);
        }
        console.log('here');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
        })
    }, [mealId, navigation])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => {
                return <IconButton icon={mealIsFavourite ? 'star' : 'star-outline'} size={24} color="white" onPress={selectedFavHandler}/>
            }
        })
    }, [navigation, selectedFavHandler])

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listWrapper}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List listItems={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List listItems={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   container: {
       marginBottom: 32
   },
    image: {
        width: "100%",
        height: 350
    },
    title: {
       fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
       color: "white"
    },
    listWrapper: {
       alignItems: "center",
    },
    listContainer: {
       width : "80%",
    }


});