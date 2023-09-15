import {CATEGORIES, MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

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

    return <MealsList items={displayedMeals}/>

}

