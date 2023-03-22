import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground } from "react-native-web";

const Home = ({ navigation }) => {
  

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <View style={styles.atas}>
                  <Feather name="home" size={24} color="#373737" />
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome5 name="user" size={24} color="#373737" />
                  </TouchableOpacity>
              
              </View>
              
            </View>
            <Image
                style={{width: 270, height:140, borderRadius:10, marginTop:25}}
                source={require('../assets/cekrek.png')}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Cam')}>
            <Image
                style={{width: 270, height:180, borderRadius:10, marginTop:25}}
                source={require('../assets/camera.png')}
            />
                  </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
                style={{width: 270, height:180, borderRadius:10, marginTop:25}}
                source={require('../assets/menuProfile.png')}
            />
                  </TouchableOpacity>
            
           

            
        
            
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Tara Nadani Mozart-120140039</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#f1f1f1',
    overflow: "hidden",
    alignItems: "center",
  },
    top: {
    width: "100%",
    // flexDirection:'row',
    alignItems: 'center',
    padding:40,
    // justifyContent: "flex-end",
    marginTop:20,
    // backgroundColor: 'red'
  },
    atas: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    // padding:40,
    justifyContent: 'space-between',
    // marginTop:20,
    // backgroundColor: 'blue'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
},
header: {
    color: "#373737",
    fontSize: 12,
    // fontWeight : "bold",
    top: 0,
    // alignItems:"flex-end"
    left: 140
},

openKamera: {
  marginTop:20,
    color: "#373737",
    fontSize: 25,
    width:300,
    // fontWeight : "bold",
    textAlign:"center",
    justifyContent:"center",
    top: 0,
    backgroundColor:"#FFF",
    padding:20,
    borderRadius:20,
    // alignItems:"flex-end"
    // left: 140
},
daftarLagu: {
    color: "#373737",
    fontSize: 15,
    fontWeight : "bold",
    top: 0,
    // alignItems:"flex-end"
    // left: 140
},
    search: {
    color : '#ffff',
    width: '100%',
    height: 40,
    margin : 30,
    backgroundColor: "#e67e1f",
    fontSize: 20,
    borderRadius: 3,
    alignSelf: "center",
    textAlign: "center",
    fontweight : "Bold"
},
    header2: {
    margin: 5,
    fontWeight : "bold",

},
card: {
    // top : 100,
    // backgroundColor: 'red',
    margin: "auto",
    width: '90%',
    height: 100,
    // padding:20,
    borderRadius:10,
  },
  cardItems: {
    top : 80,
    // backgroundColor: 'red',
    margin: "auto",
    width: '90%',
    // padding:20,
    borderRadius:10,
  },
  cardLagu: {
    // top : 10,
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor: 'yellow',
    margin: "auto",
    width: '100%',
    display:"flex",
    marginTop:10,
    // padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    width: "100%",
    zIndex: -999,
    flex:1,
    borderRadius:10,
    backgroundColor: '#fff',
    marginTop : 100,
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default Home;