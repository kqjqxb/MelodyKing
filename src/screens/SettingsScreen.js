import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Share,
  Alert,
  Linking
} from 'react-native';
import { useAudio } from '../context/AudioContext';
import Slider from '@react-native-community/slider';



const fontLuckiestGuyRegular = 'LuckiestGuy-Regular'


const AboutScreen = ({ setSelectedScreen }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const { volume, setVolume } = useAudio();

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
          Settings
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
          <View style={{
            borderRadius: dimensions.width * 0.05,
            borderColor: '#456E00',
            borderWidth: dimensions.width * 0.008,
            alignItems: 'center',
            justifyContent: 'center',
            width: dimensions.width * 0.8,
            paddingBottom: dimensions.height * 0.005
          }}>
            <Text
              style={{
                fontFamily: fontLuckiestGuyRegular,
                textAlign: "center",
                fontSize: dimensions.width * 0.043,
                paddingTop: dimensions.height * 0.014,
                paddingBottom: dimensions.height * 0.003,
                alignSelf: 'center',
                color: '#456E00',
              }}
            >
              Sounds
            </Text>
            <View style={{
              width: '100%',
              height: dimensions.width * 0.08,
              borderRadius: 5,
              position: 'relative',
              overflow: 'hidden',
              paddingBottom: dimensions.height * 0.05,
            }}>

              <Slider
                style={{
                  width: '91%',
                  height: 40,
                  alignSelf: 'center',
                }}
                minimumValue={0}
                maximumValue={1}
                value={volume}
                onValueChange={(value) => setVolume(value)}
                minimumTrackTintColor="#456E00"
                maximumTrackTintColor="#8BDD00"
                thumbTintColor="#456E00"
              />
            </View>
          </View>

          <TouchableOpacity 
            onPress={() => {
              Linking.openURL('https://www.termsfeed.com/live/57e2aa07-bc6c-46b4-9be3-9e365b350f49')
            }}
          style={{
            borderRadius: dimensions.width * 0.05,
            borderColor: '#456E00',
            borderWidth: dimensions.width * 0.008,
            alignItems: 'center',
            justifyContent: 'center',
            width: dimensions.width * 0.8,
            marginTop: dimensions.height * 0.01
          }}>
            <Text
              style={{
                fontFamily: fontLuckiestGuyRegular,
                textAlign: "center",
                fontSize: dimensions.width * 0.043,
                paddingVertical: dimensions.height * 0.014,
                alignSelf: 'center',
                color: '#456E00',


              }}
            >
              Terms of Use
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
