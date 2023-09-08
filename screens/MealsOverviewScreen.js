import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from "react";

export default function MealsOverviewScreen({ route, navigation })
{
    const catId = route.params.categoryId;
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation]);


    function renderMealItem(itemData)
    {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }

        return <MealItem item={mealItemProps}/>
    }




    return (
            <View style={styles.container}>
                <FlatList
                    data={displayedMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})