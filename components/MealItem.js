import {View, Text, Image, Pressable, StyleSheet, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({item, onPress})
{
    const navigation = useNavigation();
    function selectMealItemHandler()
    {
        navigation.navigate('MealDetailScreen', {
            mealId: item.id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}}
                       style={({pressed}) => (pressed ? styles.buttonPressed : null)}
                       onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: item.imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <MealDetails duration={item.duration} complexity={item.complexity} affordability={item.affordability}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity:' 0.35',
        shadowOffset: {width: 0, height:2 },
        shadowRadius: 16,
        overflow: Platform.OS == "android" ? "hidden" : "visible"
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    buttonPressed: {
        opacity: 0.5,

    },
    image: {
        width: "100%",
        height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
})