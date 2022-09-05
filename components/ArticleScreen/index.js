import { View, Text , StyleSheet , Image, ScrollView, Pressable} from 'react-native'
import React from 'react';
import bg2 from '../assets/bg2.png';
import time from '../assets/png/time.png';
import paper from '../assets/png/Paper.png';
import Bookmark1 from '../assets/png/Bookmark1.png';
import Heart from '../assets/png/Heart.png';
import Rectangle from '../assets/png/Rect.png';
import RectangleProgress from '../assets/png/RectangleProgress.png';
import RectangleRemain from '../assets/png/RectRemain.png';



 const ArticleScreen = ({navigation}) => {
  return (
    <ScrollView>
   <View style={{flexDirection:'column' , backgroundColor : '#ffff'}}>
        <View style={{height:250 , marginTop:0 , zIndex:0 , position:'relative'}}>
            <Image source={bg2} style={{ height:250 , width: '100%' , resizeMode:'contain'}}/>
        </View>

        <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={Rectangle} style={styles.reactangle} />
                <Image source={Heart} style={styles.reactangle1}/>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Image source={Rectangle} style={styles.reactangle2} />
                <Image source={Bookmark1} style={styles.reactangle3}/>
            </View>
            
            
        </View>

        <View style={{flexDirection:'column'}}>
            <Text style={styles.bannerHeader}>Hormones</Text>
            <Text style={styles.bannerText}>101</Text>
        </View>

        <View style={{marginTop:20}}>
            <View style={{ flexDirection :'row'}}>
                <Text style={{color:'black' , marginLeft:20 , alignContent:'center' , paddingLeft:10, fontSize:20}}>COURSE</Text>
                <Text style={{color:'black' , marginLeft:20 , alignContent:'center' , paddingLeft:0 , color : 'gray', fontSize:20}}>by Dr. Marina V.</Text>
            </View>

            <View style={{ flexDirection :'row', paddingVertical:15}}>
                <Text style={{color:'black' , marginLeft:20 , alignContent:'center' , paddingLeft:10 , fontSize: 20 }}>Hormones 101</Text>
            </View>

            <View style={{ flexDirection :'row', paddingVertical:5}}>
                <Image source={time} style={{marginLeft:28 , alignContent:'center' , paddingRight:-20 , marginVertical:8, color: '#1C74A1'}}/>
                <Text style={{color:'black' , marginLeft:0 , alignContent:'center' , paddingLeft:10 , fontSize:20}}>30 mins</Text>
                <Image source={paper} style={{marginLeft:10 , alignContent:'center' , paddingRight:-20 , marginVertical:8 }}/>
                <Text style={{color:'black' , marginLeft:0 , alignContent:'center' , paddingLeft:10 ,fontSize:20}}>5 lessons</Text>
            <View style={{ flexDirection :'column', paddingVertical:5}}>
                <Text style={{color:'black' , marginLeft:0 , alignContent:'center' , paddingLeft:120 ,fontSize:20, marginVertical:-10}}>72%</Text>
                <View  style={{ flexDirection :'row'}}>
                    <Image source={RectangleProgress} style={{marginLeft:90 , alignContent:'center' , paddingRight:-20 , marginVertical:8 }}/>
                    <Image source={RectangleRemain} style={{marginLeft:120 , alignContent:'center' , paddingRight:-20 , marginVertical:8 , zIndex:1}}/>
                </View>

            </View>
            </View>

            <View style={{ flexDirection :'row', paddingVertical:25}}>
                <Text style={{color:'black' , marginLeft:25 , alignContent:'center' , paddingLeft:10 , fontSize:20}}>Part 3 :</Text>
                <Text style={{color:'black' , marginLeft:15 , alignContent:'center' , paddingLeft:0 , fontSize:20 , color: '#8D43A4'}}>Progesterone</Text>
            </View>

            <View style={{ flexDirection :'column', paddingVertical:5}}>
               <Text style={{color:'black' , marginLeft:25 , alignContent:'center' , paddingLeft:10 , fontSize:20}}>Introduction</Text>
               <Text style={{color:'black' , marginLeft:35 , alignContent:'center' , paddingLeft:0 , fontSize:15 , marginRight:35 , paddingVertical:10 ,color : '#858585'}}>  
                Progesterone is a hormone released by the corpus luteum in the ovary.
                 It plays important roles in the menstrual cycle and in maintaining the early stages of pregnancy. 
                It may also be involved in the growth of certain cancers.
            </Text>
                
            </View>

            <View style={{ flexDirection :'column', paddingVertical:5}}>
               <Text style={{color:'black' , marginLeft:25 , alignContent:'center' , paddingLeft:10 , fontSize:20}}>Biology</Text>
               <Text style={{color:'black' , marginLeft:35 , alignContent:'center' , paddingLeft:0 , fontSize:15 , marginRight:35 , paddingVertical:10 , color : '#858585'}}>  
               Progesterone belongs to a group of steroid hormones called progestogens. It is mainly secreted by the corpus luteum in the ovary during the second half of the menstrual cycle. 
               It plays important roles in the menstrual cycle and in maintaining the early stages of pregnancy.
            </Text>
                
            </View>

            <View style={{ flexDirection :'column', paddingVertical:5}}>
               <Text style={{color:'black' , marginLeft:25 , alignContent:'center' , paddingLeft:10 , fontSize:20}}>How is it Controllled</Text>
               <Text style={{color:'black' , marginLeft:35 , alignContent:'center' , paddingLeft:0 , fontSize:15 , marginRight:35 , paddingVertical:10 , color : '#858585'}}>  
               The formation of the corpus luteum (which produces the majority of progesterone) is triggered by a surge in luteinising hormone production by the anterior pituitary gland.
                This normally occurs at approximately day 14 of the menstrual cycle and it stimulates the release of an egg from the ovary and the formation of the corpus luteum. The corpus luteum then releases progesterone, which prepares the body for pregnancy. 
                If the egg is not fertilised and no embryo is conceived, the corpus luteum breaks down and the production of progesterone decreases. 
                As the lining of the womb is no longer maintained by progesterone from the corpus luteum, it breaks away and menstrual bleeding occurs, marking the start of a new menstrual cycle.
            </Text>
                
            </View>

            <View>
                <Pressable style={{width: '83%' , height:40 , backgroundColor :'#FD93A1' , marginVertical : 10 , marginBottom: 50 , marginLeft: 33, marginRight: 33, borderRadius: 10 , alignItems :'center' , paddingTop:8}}
                    onPress={()=> navigation.navigate("Quiz")}
                >
                    <Text style={{ color : 'white'}}>Lets take a quiz</Text>
                </Pressable>
            </View>

          
        </View>
   </View>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
    reactangle : {
        position : 'relative',
        marginTop: -220,
        marginLeft: 315,
        marginRight:0,
        zIndex:0,
        padding:5
    },
    reactangle1 : {
        position : 'relative',
        marginTop: -210,
        marginLeft: -25,
        marginRight:30,
        zIndex:1,
        padding:5

    },

    reactangle2 : {
        position : 'relative',
        marginTop: -220,
        marginRight:0,
        zIndex:0,
        padding:5
    },
    reactangle3 : {
        position : 'relative',
        marginTop: -210,
        marginLeft: -25,
        marginRight:30,
        zIndex:1,
        padding:5

    },
    bannerHeader:{
        position:'relative',
        zIndex : 1,
        marginTop : -90,
        fontSize:25,
        color: '#ffff',
        fontWeight:'bold',
        paddingLeft: 310,

    },
    bannerText:{
        position:'relative',
        zIndex : 1,
        marginBottom : -90,
        fontSize:35,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 310,

    }
})


export default ArticleScreen;