import React, {useContext} from 'react'
import { View, Image } from 'react-native'
import{UserContext} from '../context/UserContext'
import{FirebaseContext} from '../context/FirebaseContext'
import {TouchableOpacity} from 'react-native-gesture-handler'
import styled from 'styled-components'
import Text from '../components/Text'
import { StatusBar } from "expo-status-bar";

export default function ProfileScreen() {
    
    const [user, setUser] =useContext(UserContext)
    const firebase = useContext(FirebaseContext)


    const logOut = async () =>{
        const loggedOut= await firebase.logOut()

        if(loggedOut){
            setUser((state) => ({...state, isLoggedIn: false}));
        }
    }

    const  getAge = ()=>{
        var today = new Date();
        var age = today.getFullYear() - user.year;
        var m = today.getMonth() - user.month;
        if (m < 0 || (m === 0 && today.getDate() < user.date)) {
            age--;
        }
        return today;
    }

    return (
        
        <View><StatusBar style="dark"/>
        <Container>
            <InfoContainer>
                <Image
                source={  
                    require('../../assets/Logo-grey.png')
                }
                style={{ width:175, height:200 }}
                />
                <View style={{height: 20 }}/>
                 <Text title bold color="#F15152">
                Profilo
                </Text>
                </InfoContainer>
                <InfoContainer>

                <Text  medium light>
                    Username: 
                </Text>
                <Text medium bold >
                    {user.username}
                </Text>
                <View style={{height: 20 }}/>

                <Text  medium light>
                Email:
                </Text>
                <Text medium bold >
                {user.email}
                </Text>
                <View style={{height: 20 }}/>

                <Text  medium light>
                Età:               
                </Text>
                <Text medium bold >
                {user.date}
                </Text>

            </InfoContainer>
            <LogoutContainer 
            onPress={logOut}
            >       
            <Text bold center color="white"> Logout </Text>
            </LogoutContainer>  
        </Container>
        </View>

    )
}

const Container = styled.View`
    margin-top: 64px;

`
const InfoContainer = styled.View`
    align-items: center;
    margin: 20px 32px 32px ;  

`
const LogoutContainer = styled.TouchableOpacity `
    margin: 32px 32px;
    height: 48px;
    align-items: center;
    background-color: #F15152;
    borderRadius: 6px;
    justify-content: center;
    `
