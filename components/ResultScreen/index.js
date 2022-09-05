import { View, Text , Image , StyleSheet , Pressable } from 'react-native'
import React from 'react';
import Ellipse from '../assets/ellipse.png';
import Ellipse1 from '../assets/ellipse1.png';
import Outer from '../assets/png/Outer.png'
import Vector from '../assets/png/Vector.png';
import Five from '../assets/png/5.png'
import Correct from '../assets/png/Correct.png'
import Polygon from '../assets/png/Polygon.png'







const Result = ({ navigation}) => {
  return (
    <View style={{flexDirection:'column' , backgroundColor : '#ffff'}}>
      <View>
      <Text style={{fontSize:35 , paddingTop: 30 , paddingLeft:20}}>Quiz Results</Text>
      </View>
      <View style={{paddingLeft:50}}>
            <View style={{paddingVertical: 50 , paddingHorizontal:50, alignContent:'center'}}>
                    <Image source={Ellipse} style={{zIndex : 1}}/>
            </View>
            <View style={{paddingVertical: 0 , paddingHorizontal:90, alignContent:'center'}}>
                    <Image source={Ellipse1} style={styles.ellipseRemaining}/>
            </View>
            <View>
                <Image source={Vector} style={styles.vector}/>
            </View>
            <View>
                <Image source={Five} style={styles.five}/>
            </View>
            <View>
                <Image source={Correct} style={styles.correct}/>
            </View>
            {/* <View>
                <Image source={Outer} style={styles.outer}/>
            </View> */}
            <View>
                <Image source={Polygon} style={styles.polygon}/>
            </View>

      </View>

      <View style={{flexDirection:'row', paddingLeft:'15%'}}>
        <Text  style={{fontSize:25 , paddingTop: 30 , }}>
        You've Earned 
        </Text>
        <Text style={{fontSize:25 , paddingTop: 30 , paddingLeft:5, color:'#87B715' }}>
         300 Points!
        </Text>
      </View>

      <View style={{paddingTop: 30}}>
        <Pressable style={{width: '50%' , height:40 , backgroundColor :'#FD93A1' , marginVertical : 40 , marginBottom: 300 , marginLeft: 100, marginRight: 80, borderRadius: 10 , alignItems :'center' , paddingTop:8}}
            onPress={()=> navigation.navigate("Home")}
        >
                <Text style={{ color : 'white'}}>Go to Main Page</Text>
        </Pressable>

    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    ellipseRemaining : {
        transform : [{ rotate : '15deg'}],
        marginVertical: 0,
        marginTop:-200,
        position: 'relative',
        zIndex: 0
    },
    vector :{
        marginLeft:110,
        paddingBottom:-20,
        position:'relative',
        marginVertical: -150,
        
    },
    five : {
        marginLeft:130,
        paddingBottom:-20,
        position:'relative',
        marginVertical: -110,

    },
    // outer: {
    //     marginLeft:90,
    //     paddingBottom:-20,
    //     position:'relative',
    //     marginVertical: -150,

    // },
    correct : {
        marginLeft:150,
        paddingBottom:-20,
        position:'relative',
        marginVertical: -50,

    },
    polygon : {
        marginLeft:220,
        paddingBottom:-20,
        position:'relative',
        marginVertical: -140,

    }
})
export default Result