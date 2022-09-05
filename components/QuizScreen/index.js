import { View, Text , Image , Pressable} from 'react-native'
import React from 'react';
import bg1 from '../assets/bg1.png';
import time from '../assets/png/time.png';
import Star from '../assets/png/Star.png'

const QuizScreen = ({ navigation }) => {
  return (
    <View style={{flexDirection:'column' , backgroundColor : '#ffff'}}>
      <View style={{height:290 , marginTop:50}}>
         <Image source={bg1} style={{ height:250 , width: '100%'}}/>
      </View>

      <View style={{alignItems: 'center', paddingVertical: 20 , flexDirection: 'column'}}>
        <Text style={{fontSize: 20}}>Let's Take A Lesson Quiz</Text>
        <Text style={{fontSize: 15, paddingTop: 10 , color: '#918868'}}>Answer these simple MCQs to score points</Text>

      </View>

      <View style={{ flexDirection :'row', paddingVertical:5 , paddingLeft:60 }}>
                <Image source={time} style={{marginLeft:28 , alignContent:'center' , paddingRight:-20 , marginVertical:8, color: '#1C74A1'}}/>
                <Text style={{color:'black' , marginLeft:0 , alignContent:'center' , paddingLeft:10 , fontSize:20 , marginHorizontal: 5}}>5 mins</Text>
                <Image source={Star} style={{marginLeft:40 , alignContent:'center' , paddingRight:-20 , marginVertical:8}}/>
                <Text style={{color:'black' , marginLeft:0 , alignContent:'center' , paddingLeft:10 ,fontSize:20}}>300 points</Text>

      </View>

    <View>
        <Pressable style={{width: '50%' , height:40 , backgroundColor :'#FD93A1' , marginVertical : 40 , marginBottom: 300 , marginLeft: 100, marginRight: 80, borderRadius: 10 , alignItems :'center' , paddingTop:8}}
            onPress={()=> navigation.navigate("Quizzes")}
        >
                <Text style={{ color : 'white'}}>Start A Quiz</Text>
        </Pressable>

    </View>

    </View>
  )
}

export default QuizScreen