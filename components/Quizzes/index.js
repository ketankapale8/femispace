import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Quizzes = ({navigation}) => {
const [tickedValue , setTickedValue] = React.useState(false)
const [selected , onSelected] = React.useState({borderColor : 'black'})

const selectColorChange = () =>{
    setTickedValue(!tickedValue);
    onSelected(selected.borderColor = "#FD93A1")
}
  return (
    <View style={{flexDirection:'column' , backgroundColor : '#ffff'}}>
      <View>
        <Text style={{fontSize:35 , paddingTop: 30 , paddingLeft:20}}>A Lesson Quiz</Text>
      </View>

      <View>
        <Text style={{fontSize:20 ,paddingTop: 50 , padding:30}}>
                Q1. Which organ releases progesteron?
        </Text>
      </View>

      <View >
        <Pressable style={{width : '90%' , height: 50, border: 20 , borderRadius : 10  , borderWidth : 2 ,marginLeft: 20 , marginRight: 30 , marginVertical: 20 , borderColor: tickedValue ? '#8D43A4' : "#E5E5E5"}}
            onPress={()=>selectColorChange()}
        >
            <Text style={{fontSize:20 , marginTop: 10 , marginLeft:30 }}>Liver</Text>
        </Pressable>

        <Pressable style={{width : '90%' , height: 50, borderWidth : 2 , borderRadius : 10 ,  marginLeft: 20 , marginRight: 30 , marginVertical: 20 , borderColor: tickedValue ? '#8D43A4' : "#E5E5E5"}}
            onPress={()=>selectColorChange()}
            >
            <Text style={{fontSize:20 , marginTop: 10 , marginLeft:30}}>Uteris</Text>
        </Pressable>

        <Pressable style={{width : '90%' , height: 50, marginLeft: 20 , marginRight: 30 , marginVertical: 20 , borderRadius : 10 , borderWidth : 2 , borderColor: tickedValue ? '#8D43A4' : "#E5E5E5"}}
            onPress={()=>selectColorChange()}
            >
            <Text style={{fontSize:20 , marginTop: 10 , marginLeft:30 }}>Ovary</Text>
        </Pressable>

        <Pressable style={{width : '90%' , height: 50, border: 20 , borderRadius : 10  ,marginLeft: 20 , marginRight: 30 , marginVertical: 20 , borderWidth : 2 , borderColor: tickedValue ? '#8D43A4' : "#E5E5E5"}}
            onPress={()=>selectColorChange()}
            >
            <Text style={{fontSize:20 , marginTop: 10 , marginLeft:30}}>Corpus luteum</Text>
        </Pressable>

        <View style={{flexDirection: 'row' , alignItems: 'center', paddingLeft: '10%' , marginVertical:40}}>
        <Pressable style={{width: '23%' , height:40 , backgroundColor :'#ffff' , marginVertical : 10 , marginBottom: 50 , marginLeft: 33, marginRight: 33, borderRadius: 10 , alignItems :'center' , paddingTop:8 , border:10 , borderWidth:1 , borderColor:'#8D43A452'}}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={{ color : 'black'}}>Previous</Text>
        </Pressable>
        <Text style={{fontSize:30 , marginBottom:40}}>
            4/4
        </Text>
        <Pressable style={{width: '23%' , height:40 , backgroundColor :'#FD93A1' , marginVertical : 10 , marginBottom: 50 , marginLeft: 33, marginRight: 33, borderRadius: 10 , alignItems :'center' , paddingTop:8}}
                    onPress={()=> navigation.navigate("QuizResults")}
                >
                    <Text style={{ color : 'white'}}>Submit</Text>
                </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Quizzes