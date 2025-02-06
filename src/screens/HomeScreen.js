import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Share,
  Animated,
  Easing,
  ImageBackground,
  SafeAreaView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';
import MelodiesScreen from './MelodiesScreen';
import GameScreen from './GameScreen';


const fontLuckiestGuyRegular = 'LuckiestGuy-Regular';

const HomeScreen = () => {

  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [selectedScreen, setSelectedScreen] = useState('Home');
  const [isSoundEnabled, setSoundEnabled] = useState(true);

  const [isLevelsVisible, setIsLevelsVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [completedLevels, setCompletedLevels] = useState([]);

  const loadSettings = async () => {
    try {
      const soundValue = await AsyncStorage.getItem('isSoundEnabled');

      if (soundValue !== null) setSoundEnabled(JSON.parse(soundValue));
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };


  useEffect(() => {
    const loadCompletedLevels = async () => {
      try {
        const storedLevels = await AsyncStorage.getItem('completedLevels');
        if (storedLevels !== null) {
          setCompletedLevels(JSON.parse(storedLevels));
        } else {
          const initialLevels = [1];
          await AsyncStorage.setItem('completedLevels', JSON.stringify(initialLevels));
          setCompletedLevels(initialLevels);
        }
      } catch (error) {
        console.error('Failed to load completed levels:', error);
      }
    };

    loadCompletedLevels();
  }, [selectedLevel, selectedScreen]);


  const handleLevelPress = async (lvl) => {
    if (completedLevels.includes(lvl)) {
      setSelectedLevel(lvl);
      setSelectedScreen('Game');
    } else {
      Alert.alert('Level not completed', 'You have not completed this level yet.');
    }
  };

  useEffect(() => {
    loadSettings();
  }, [selectedScreen]);


  useEffect(() => {
    console.log(`isSound is ` + isSoundEnabled)
  }, [isSoundEnabled])


  useEffect(() => {
    setIsLevelsVisible(false);
  }, [selectedScreen]);



  return (
    <ImageBackground
      source={selectedScreen === 'Game' ? require('../assets/images/gameBackgroundImage.png') : require('../assets/images/backgroundImageNoText.png')}
      style={{ flex: 1, alignItems: 'center', width: '100%' }}
      resizeMode="cover"
    >

      {selectedScreen === 'Home' ? (
        <SafeAreaView style={{
          flex: 1,
          paddingHorizontal: dimensions.width * 0.05,
          paddingTop: dimensions.width * 0.01,
          width: '100%'
        }}>


          {isLevelsVisible && (
            <TouchableOpacity
              onPress={() => {
                setIsLevelsVisible(false);
              }}

              style={{
                position: 'absolute',
                top: '8%',
                right: '8%',
                borderRadius: dimensions.width * 0.057,
                backgroundColor: '#afe157',
                borderColor: '#B4D282',
                paddingVertical: dimensions.width * 0.03,
                paddingHorizontal: dimensions.width * 0.05,

                borderWidth: dimensions.width * 0.01,
              }}>
              <Image
                source={require('../assets/icons/homeIcon.png')}
                style={{
                  width: dimensions.width * 0.061,
                  height: dimensions.width * 0.061,
                  textAlign: 'center'
                }}
                resizeMode="contain"
              />

            </TouchableOpacity>
          )}

          {!isLevelsVisible ? (
            <View style={{ flex: 1 }}>

              <Text
                style={{
                  fontFamily: fontLuckiestGuyRegular,
                  marginTop: dimensions.height * 0.12,
                  textAlign: "center",
                  fontSize: dimensions.width * 0.12,
                  alignSelf: 'center',
                  fontWeight: 800,
                  color: '#F72401',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: dimensions.width * 0.05,
                  textShadowColor: '#F9D447',
                  textShadowOffset: { width: dimensions.width * 0.01, height: dimensions.width * 0.01, },
                  textShadowRadius: dimensions.width * 0.01,
                }}
              >
                Melody King: Ging’s Color Keys
              </Text>


              <TouchableOpacity
                onPress={() => {
                  setIsLevelsVisible(true)
                }}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: dimensions.height * 0.05,
                  borderRadius: dimensions.width * 0.057,
                  backgroundColor: '#afe157',
                  borderColor: '#65862b',
                  width: dimensions.width * 0.8,
                  alignSelf: 'center',

                  borderWidth: dimensions.width * 0.01,
                }}>
                <Text
                  style={{
                    fontFamily: fontLuckiestGuyRegular,
                    textAlign: "center",
                    fontSize: dimensions.width * 0.064,
                    alignSelf: 'center',
                    fontWeight: 800,
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: dimensions.width * 0.03,
                  }}
                >
                  Play
                </Text>

              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  setSelectedScreen('Melodies');
                }}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: dimensions.height * 0.021,
                  borderRadius: dimensions.width * 0.057,
                  backgroundColor: '#afe157',
                  borderColor: '#65862b',
                  width: dimensions.width * 0.8,
                  alignSelf: 'center',

                  borderWidth: dimensions.width * 0.01,
                }}>
                <Text
                  style={{
                    fontFamily: fontLuckiestGuyRegular,
                    textAlign: "center",
                    fontSize: dimensions.width * 0.064,
                    alignSelf: 'center',
                    fontWeight: 800,
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: dimensions.width * 0.03,
                  }}
                >
                  Your Melodies
                </Text>

              </TouchableOpacity>


              <View style={{
                position: 'absolute',
                bottom: dimensions.height * 0.07,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: dimensions.width * 0.07,
              }}>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedScreen('About')
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: dimensions.width * 0.057,
                    backgroundColor: '#fae287',
                    borderColor: '#e0c14c',
                    width: dimensions.width * 0.4,
                    alignSelf: 'center',

                    borderWidth: dimensions.width * 0.01,
                  }}>
                  <Text
                    style={{
                      fontFamily: fontLuckiestGuyRegular,
                      textAlign: "center",
                      fontSize: dimensions.width * 0.064,
                      alignSelf: 'center',
                      fontWeight: 800,
                      color: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: dimensions.width * 0.03,
                    }}
                  >
                    About
                  </Text>

                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => {
                    setSelectedScreen('Settings')
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: dimensions.width * 0.057,
                    backgroundColor: '#fae287',
                    borderColor: '#e0c14c',
                    alignSelf: 'center',
                    width: dimensions.width * 0.4,
                    borderWidth: dimensions.width * 0.01,
                  }}>
                  <Text
                    style={{
                      fontFamily: fontLuckiestGuyRegular,
                      textAlign: "center",
                      fontSize: dimensions.width * 0.064,
                      alignSelf: 'center',
                      fontWeight: 800,
                      color: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: dimensions.width * 0.03,
                    }}
                  >
                    Settings
                  </Text>

                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: dimensions.height * 0.16,
            }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((lvl, index) => (
                <TouchableOpacity
                  key={index}
                  // onPress={() => {
                  //   setSelectedLevel(lvl);
                  //   setSelectedScreen('Game');
                  // }}
                  onPress={() => handleLevelPress(lvl)}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: dimensions.width * 0.057,
                    backgroundColor: '#fae287',
                    borderColor: '#e0c14c',
                    width: dimensions.width * 0.22, 
                    margin: dimensions.width * 0.01, 
                    flexDirection: 'row',
                    borderWidth: dimensions.width * 0.01,
                  }}>
                  <Text
                    style={{
                      fontFamily: fontLuckiestGuyRegular,
                      textAlign: "center",
                      fontSize: dimensions.width * 0.064,
                      alignSelf: 'center',
                      fontWeight: 800,
                      color: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: dimensions.width * 0.03,
                    }}
                  >
                    {completedLevels.includes(lvl) ? lvl : '·'}
                  </Text>

                </TouchableOpacity>
              ))}
            </View>
          )}





        </SafeAreaView>
      ) : selectedScreen === 'Settings' ? (
        <SettingsScreen setSelectedScreen={setSelectedScreen} isSoundEnabled={isSoundEnabled} setSoundEnabled={setSoundEnabled} selectedScreen={selectedScreen} />
      ) : selectedScreen === 'About' ? (
        <AboutScreen setSelectedScreen={setSelectedScreen} />
      ) : selectedScreen === 'Melodies' ? (
        <MelodiesScreen setSelectedScreen={setSelectedScreen} selectedScreen={selectedScreen}/>
      ) : selectedScreen === 'Game' ? (
        <GameScreen setSelectedScreen={setSelectedScreen} selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel}/>
      ) : null}
    </ImageBackground>
  );
};

export default HomeScreen;
