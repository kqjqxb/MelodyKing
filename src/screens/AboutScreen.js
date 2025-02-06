import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';



const fontLuckiestGuyRegular = 'LuckiestGuy-Regular'
const fontSFProRegular = 'SFProText-Regular'

const AboutScreen = ({ setSelectedScreen }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  return (
    <SafeAreaView style={{
      display: 'flex',
      alignSelf: 'center',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }}>
      <TouchableOpacity 
      onPress={() => {
        setSelectedScreen('Home');
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
      <View>
        <Text
          style={{
            fontFamily: fontLuckiestGuyRegular,
            textAlign: "center",
            fontSize: dimensions.width * 0.088,
            paddingVertical: dimensions.height * 0.01,
            alignSelf: 'center',
            fontWeight: 700,
            color: 'white',


          }}
        >
          About
        </Text>


        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: dimensions.width * 0.057,
          backgroundColor: '#F9D54D',
          borderColor: '#e0c14c',
          width: dimensions.width * 0.4,
          alignSelf: 'center',
          width: dimensions.width * 0.88,
          borderWidth: dimensions.width * 0.01,
          paddingVertical: dimensions.height * 0.03,
          paddingHorizontal: dimensions.width * 0.016
        }}>
          <Text
            style={{
              fontFamily: fontSFProRegular,
              textAlign: "center",
              fontSize: dimensions.width * 0.04,
              paddingVertical: dimensions.height * 0.014,
              alignSelf: 'center',
              fontWeight: 700,
              color: 'white',


            }}
          >
            Join Ging, the funky DJ monkey, in a rhythmic challenge to test your memory and musical skills! Listen, memorize, and tap the colorful keys to match the melody. With each level, the challenge grows, keeping you on your toes.{`\n\n\n`}

            Unleash your creativity in melody creation mode, where you can craft your own tunes and become a true music master. Dive into vibrant visuals, dynamic gameplay, and unforgettable soundscapes. Ready to groove? Let the music begin! 🎶
          </Text>

        </View>

      </View>


    </SafeAreaView>
  );
};

export default AboutScreen;
