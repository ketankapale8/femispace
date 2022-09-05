import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ArticleScreen from './components/ArticleScreen';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuizScreen from './components/QuizScreen';
import Quizzes from './components/Quizzes';
import Result from './components/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" 
          >
            <Stack.Screen name="Home" component={ArticleScreen}/>
            <Stack.Screen name="Quiz" component={QuizScreen}/>
            <Stack.Screen name="Quizzes" component={Quizzes}/>
            <Stack.Screen name="QuizResults" component={Result}/>

          </Stack.Navigator>
        </NavigationContainer>
      
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
