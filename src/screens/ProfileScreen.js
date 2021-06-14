

import React, { useContext } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { UserContext } from '../context/UserContext'
import { FirebaseContext } from '../context/FirebaseContext'
import styled from 'styled-components'
import Text from '../components/Text'
import { StatusBar } from "expo-status-bar";
export default function ProfileScreen() {

    const [user, setUser] = useContext(UserContext)
    const firebase = useContext(FirebaseContext)
    const logOut = async () => {
        const loggedOut = await firebase.logOut()

        if (loggedOut) {
            setUser((state) => ({ ...state, isLoggedIn: false }));
        }
    }

    const getAge = () => {
        var today = new Date();
        var age = today.getFullYear() - user.year;
        var m = today.getMonth() - user.month;
        if (m < 0 || (m === 0 && today.getDate() < user.date)) {
            age--;
        }
        return today;
    }

    return (
        <Container>
            <Main>
                <Text title light color="#FFFFFF">Profilo</Text>
            </Main>

            <Auth>
                <Image
                    source={
                        require('../../assets/logo-blue.png')
                    }
                    style={{ width: 175, height: 200 }}
                />
            </Auth>
            <Auth>
                <AuthContainer>
                    <AuthTitle>Nome utente</AuthTitle>
                    <Text color="black" medium bold >
                        {user.username}
                    </Text>
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>email</AuthTitle>
                    <Text color="black" medium bold >
                        {user.email}
                    </Text>
                </AuthContainer>
            </Auth>

            <LogoutContainer onPress={logOut} >

                <Text bold center color="#ffffff">
                    Logout
                    </Text>

            </LogoutContainer>


            <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
            </HeaderGraphic>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 50px;
    margin-left: 15px;
`;

const Auth = styled.View`
    margin: 33px 32px 32px;
    align-items: center;

`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
    align-items: center;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const LogoutContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #FF2D55;
    border-radius: 6px;
`;



const SignUp = styled.TouchableOpacity`
    margin-top: 16px;
`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
    background-color: #FF2D55;
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 300px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #FF2D55;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

