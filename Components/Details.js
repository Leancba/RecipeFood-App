import { View, Text, ScrollView, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Details = ({route}) => {
    const {recipe} = route.params
    const cuisine = recipe.cuisineType

    console.log(recipe)
    

  return (
    <View style= {{flex: 1 , backgroundColor: '#ffcb80'}} >
         <View style = {styles.containerImage}>

         <Image style = {styles.image}
                source= {{uri : `${recipe.image}`}}/>
        </View>

    <ScrollView style = {styles.ScrollView}>
        <View style = {styles.default}>
            <View style = {styles.item}>
                <Text style = {styles.text}>
                    Description 
                </Text>
                <View style = {{backgroundColor:'#ffcb80', height:2, width:'65%', alignSelf: 'center', marginBottom: 10}}></View>
                <View>
                {recipe.ingredients.map((ingredient, index) => {
            return (
              <View key={index}>
                <Text style={{marginRight: 10,fontWeight: 'bold', fontSize: 15, marginVertical: 0, color: 'rgba(000,000,000, .5)'}}>

                ◉ {ingredient.text}

                </Text>
              </View>)})}
              
                </View>
            </View>


            <View style = {styles.item}>
                
            <Text style = {styles.text}>Ingredients</Text>
            <View style = {{backgroundColor:'#ffcb80', height: 2, width:'65%', alignSelf: 'center', marginBottom: 10}}></View>
                <View style = {styles.list} >
                {recipe.ingredients.map((ingredient, index) => {
            return (
              <View key={index} style = {{flexDirection: 'column', alignContent:'center', padding: 10 ,}}>
            
                <Text style={{marginRight: 10, fontWeight: 'bold', fontSize: 16, marginVertical: 5, textAlign:'center' , color:'rgba(000,000,000 , .7)'}}> {ingredient.food}</Text>
                <Image style= {{height: 100, width: 100, alignSelf:'center', borderRadius: 10}}  resizeMode='contain' source={{uri: ingredient.image}}></Image>
                
              </View>)})}
              
                </View>
            </View>

            
            <View style = {styles.item}>
                <Text style = {styles.text}>Nutrients</Text >
                <View style = {{backgroundColor:'#ffcb80', height:2, width:'65%', alignSelf: 'center', marginBottom: 10}}></View>
                    <View >
                        <Text style= {styles.nutrients}> ◉Protein : {`${Math.ceil(recipe.totalNutrients.PROCNT.quantity)}`} g</Text>
                        <Text style= {styles.nutrients}> ◉Carbs : {`${Math.ceil(recipe.totalNutrients.CHOCDF.quantity)}`} g</Text> 
                        <Text style= {styles.nutrients}> ◉Energy : {`${Math.ceil(recipe.totalNutrients.ENERC_KCAL.quantity)}`} kCal</Text>
                        <Text style= {styles.nutrients}> ◉Fat : {`${Math.ceil(recipe.totalNutrients.FAT.quantity)}`} g</Text>
                        <Text style= {styles.nutrients}> ◉Fiber : {`${Math.ceil(recipe.totalNutrients.FIBTG.quantity)}`} g</Text>
                        <Text style= {styles.nutrients}> ◉Sugar : {`${Math.ceil(recipe.totalNutrients.SUGAR.quantity)}`} g</Text>
                    </View>
            </View>

        </View>
    </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create ({

    list : {
        width: 280,
         justifyContent:'center',
         alignSelf:'center',
         padding:2,
         flexDirection: 'row',
         flexWrap:'wrap' 
    },

    ScrollView: {
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius:30,

    },

    containerImage: {
        alignItems: 'center',
        height: 220,
        backgroundColor: '#ffcb80'
    },

    image: { 
        marginTop: 10,
        height: 200,
        width: 200,
        borderRadius: 20,
    },

    default: {
        marginTop: 10,
        borderTopStartRadius: 25,
        borderTopEndRadius:25,
        padding:10

    },


    details : {
        marginBottom: 30,
        padding: 5
    },

    text: {
        textAlign:'center',
        fontSize: 22 ,
        color: 'rgba(000,000,000, .6)', 
        fontWeight: 'bold'
    },
    
    nutrients: {
        marginRight: 10,
        fontWeight: 'bold',
        marginTop: 1,
        fontSize: 15, 
        color: 'rgba(000,000,000, .5)'
    },

    item : {
        textAlign:'center',
        shadowColor : 'white',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 20, 
        backgroundColor: 'rgba( 255, 203, 128 ,0.4)',
        margin: 10,
        padding: 10,
        marginBottom: 40

    }

})

export default Details