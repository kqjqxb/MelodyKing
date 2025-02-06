import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Animated, Text, TouchableOpacity, ImageBackground, Dimensions, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const fontOpenSansRegular = 'OpenSans-Regular';


const fontLuckiestGuyRegular = 'LuckiestGuy-Regular';

const OnboardingScreen = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const navigation = useNavigation();

  useEffect(() => {
    const onChange = ({ window }) => {
      setDimensions(window);
    };

    const dimensionListener = Dimensions.addEventListener('change', onChange);

    return () => {
      dimensionListener.remove();
    };
  }, []);



  return (
    <View
      style={{ justifyContent: 'space-between', flex: 1, backgroundColor: '#212121', alignItems: 'center', height: dimensions.height }}
    >
      <Image
        resizeMode="stretch"
        source={require('../assets/images/OnboardingBackground.png')}
        style={{
          marginBottom: 15.8,
          height: '100%',
          width: '100%',
        }}
      />
      <View style={{
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        height: '45%',
        zIndex: 0,
        width: '100%',
        alignSelf: 'center',

        marginTop: '-14%',
        borderTopLeftRadius: dimensions.width * 0.12,
        borderTopRightRadius: dimensions.width * 0.12
      }}>
        <Text
          style={{
            fontFamily: fontLuckiestGuyRegular,
            marginTop: dimensions.height * 0.05,
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
          Welcome
        </Text>
        <Text
          style={{
            fontFamily: fontOpenSansRegular,
            fontSize: dimensions.width * 0.05,
            paddingHorizontal: 21,
            color: 'white',
            textAlign: 'center',
            fontWeight: 500,
          }}>
          Get ready to groove! Challenge your memory in the main game or unleash your creativity by crafting your own melodies🎶
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.replace('Home');
        }}
        style={{
          bottom: '19%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: dimensions.height * 0.05,
          borderRadius: dimensions.width * 0.057,
          backgroundColor: '#afe157',
          paddingVertical: dimensions.width * 0.03,
          width: dimensions.width * 0.8,
          borderWidth: dimensions.width * 0.0095,
          borderColor: '#65862b',
          fontFamily: fontLuckiestGuyRegular
        }}
      >
        <Text
          style={{ 
            fontFamily: fontLuckiestGuyRegular, 
            color: 'white', 
            fontSize: dimensions.width * 0.07, 
            textAlign: 'center', fontWeight: 600 
          }}>
          Let’s Play
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default OnboardingScreen;
