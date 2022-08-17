import { Text, View, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Keyboard, Image,} from 'react-native';
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



const Home = ({navigation}) => {
    const [recipes, setRecipes] = useState();
    const [searchQuery, setSearchQuery] = useState('Random')
    const [loanding, setLoading] = useState(false);
    const [gif, setGif] = useState(true)
    console.log(recipes)

    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
    const url = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
    
    async function apiCall() {
        setLoading(true);
        let resp = await fetch(url)
        let respJson = await resp.json();
        setRecipes(respJson.hits);
        setLoading(false);
        Keyboard.dismiss()
        
    }

    useEffect(() => {
        setGif(true)
        setLoading(true)
        apiCall()
    }, [])
      

  return (
    <View style= {{flex : 1 , backgroundColor: 'black'}}>
        <View style= {{display: 'flex', flexDirection:'row', justifyContent: 'center'  }}>
            <TextInput placeholder='Search Recipe...'
            style={styles.inputField}
            onChangeText= {text => setSearchQuery(text)}
            />
        <TouchableOpacity style= {styles.button}
        onPress= {apiCall}
        title= 'submit'>
         <FontAwesome5 name="search" size={20} color="rgba(100, 30, 22, .9)"/> 
            
        </TouchableOpacity>
        </View>
        
    <View style= {styles.container} >
        
        

        <SafeAreaView style = {{flex: 1}}>
            {loanding ? <ActivityIndicator size='large' color='#008080'/> : 

            
            <FlatList 
            
            style={{borderRadius: 10,  width: '120%'}}
            data={recipes}
            renderItem= {({item}) => (
            <View style = {styles.recipe}>
                <Text style={styles.label}>{item.recipe.label}</Text>
                <Image style = {styles.image}
                source= {{uri : `${item.recipe.image}`}}/>

                <View style= {{marginTop: 15, marginStart: -5, flexDirection: 'row' , justifyContent: 'space-evenly'}} >
                    <View style = {{flexDirection: 'row'}}>
                         <Ionicons name="people" size={24} color='rgba(  255 , 255, 255, .8)' />
                         <Text style = {{color: 'rgba(  255 , 255, 255, .4)'}}>{item.recipe.yield} </Text>
                    </View>
                    <TouchableOpacity onPress={ () => {navigation.navigate('Details', {recipe: item.recipe})}}>
                        
                        <FontAwesome name="cutlery" size={24} color='rgba(  255 , 255, 255, .8)'  />
                        
                    </TouchableOpacity>
                    
                </View>
                <View style= {{backgroundColor: "rgba(100, 30, 22, .3)", height:2 , width: '120%' , marginTop: 50, alignSelf: 'center'}} />
            </View>
            
        )}
        />
        }
        
        </SafeAreaView>
        

    </View>
    
    </View>
    
  )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(100, 30, 22, .9)',
        
    },
    inputField: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop:5,
        marginStart: 50,
        paddingLeft: 10    
    },
    buttons : {
        flexDirection: 'row'
    },
    
    button: {
        width: '10%',
        height: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 10,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 5,
        position:'relative',
        right:50
        
        
        
    },
    buttonText : {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    image: {
      width: '95.5%',
      height: 210,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      marginStart: 8
    },

    label: {
        fontSize: 16,
        height: 40,
        width: '90%',
        color: 'rgba(  255 , 255, 255, .5)',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginStart: 15,
        
    },
    recipe: { 
        height: 300 ,
        width: 350,
        borderRadius: 20, 
        backgroundColor: 'rgba(  000, 000, 000, .5)',
        margin: 40,
        marginBottom: 35,
        shadowColor : 'white',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        elevation: 10,
    }

})




export default Home