import React, {Component} from 'react';
import {View,Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';


export default class SignUpLoginScreen extends Component {

    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            name:'',
            address:'',
            contact:''
        }
    }

    render(){
        return(
            <View style={styles.container}>

            <View>
                <Text style = {styles.title}>Information To and Fro</Text>

            </View>

            
          <View style={styles.signupView}>
            <Text style={styles.signupText}> Sign Up </Text>
          </View>
                  <Text style={styles.label}> Name </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={" Name"}
                    maxLength={30}
                    onChangeText={(text) => {
                      this.setState({
                        Name: text,
                      });
                    }}
                  />

<Text style={styles.label}>Contact </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Contact"}
                    maxLength={10}
                    keyboardType={"numeric"}
                    onChangeText={(text) => {
                      this.setState({
                        contact: text,
                      });
                    }}
                  />

<Text style={styles.label}> Address </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Address"}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({
                        address: text,
                      });
                    }}
                  />

<Text style={styles.label}> User Name </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"User Name"}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({
                        user: text,
                      });
                    }}
                  />


<Text style={styles.label}>Email </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Email"}
                    keyboardType={"email-address"}
                    onChangeText={(text) => {
                      this.setState({
                        emailId: text,
                      });
                    }}
                  />


<Text style={styles.label}> Password </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        password: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Confirm Password</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Confrim Password"}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        confirmPassword: text,
                      });
                    }}
                  />





            </View>
            
        
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#CBBBD9',
     alignItems: 'center',
     justifyContent: 'center'
   },
   profileContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   title :{
     fontSize:50,
     fontWeight:'300',
     paddingBottom:50,
     color : '#191970'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#000000',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   signupView:{
    flex:0.05,
    justifyContent:'center',
    alignItems:'center'
},
signupText:{
  fontSize:25,
  fontWeight:"bold",
  color:"#000000",
  paddingBottom:20
},
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   modalTitle :{
     justifyContent:'center',
     alignSelf:'center',
     fontSize:30,
     color:'#ff5722',
     margin:50
   },
   modalContainer:{
     flex:1,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#ffff",
     marginRight:30,
     marginLeft : 30,
     marginTop:80,
     marginBottom:80,
   },
   formInput:{
     width:"75%",
     height:50,
     alignItem:'center',
     borderColor:'#000000',
     
     borderWidth:1,
     marginTop:20,
     padding:20
   },
   registerButton:{
     width:200,
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:1,
     borderRadius:10,
     marginTop:30
   },
   registerButtonText:{
     color:'#ff5722',
     fontSize:15,
     fontWeight:'bold'
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
   },
   label:{
    fontSize:19,
    color:"#191970",
    fontWeight:'bold',
    paddingLeft:10,
    marginLeft:20
  },
  
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })




