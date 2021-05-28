import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import { Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from "styled-components"
import Icon from 'react-native-vector-icons/FontAwesome';
import { FirebaseContext } from "../context/FirebaseContext"
import { UserContext } from "../context/UserContext"
import Text from '../components/Text'

export default SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState();
    const firebase = useContext(FirebaseContext)
    const [_, setUser] = useContext(UserContext)

    const signIn = async () => {
        setLoading(true)
        try {
            await firebase.signIn(email, password)
            const uid = firebase.getCurrentUser().uid
            const userInfo = await firebase.getUserInfo(uid)
            setUser({
                username: userInfo.username,
                email: userInfo.email,
                date: userInfo.date,
                month: userInfo.month,
                year: userInfo.year,
                uid,
                isLoggedIn: true,
            });
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (

        <Container>
            <Logo>
                <Image
                    source={
                        require('../../assets/Logo-white.png')
                    }
                    style={{ width: 100, height: 127, resizeMode: 'contain' }}
                />
            </Logo>

            <Main>

                <Text title semi center color="#FF2D55">
                    Bentornato
                </Text>
            </Main>

            <Auth>
                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardType="email-address"
                        onChangeText={(email) => setEmail(email.trim())}
                        value={email}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password.trim())}
                        value={password}
                    />
                </AuthContainer>
            </Auth>

            <SignInContainer onPress={signIn} disabled={loading}>
                {loading ? (
                    <Loading />
                ) : (
                    <Text bold center color="#ffffff">
                        Sign In
                    </Text>
                )}
            </SignInContainer>

            <SignUp onPress={() => navigation.navigate("SignUp")}>
                <Text small center>
                    Nuovo su FitGoal?{" "}
                    <Text bold color="#007AFF">
                        Registrati
                    </Text>
                </Text>
            </SignUp>

            <HeaderGraphic>
                <LeftCircle />
                <RightCircle />
            </HeaderGraphic>
            <StatusBar barStyle="light-content" />
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

const Logo = styled.View`
    margin-top: 42px;
    align-items: center;

`;

const Main = styled.View`
    margin-top: 42px;
`;

const Auth = styled.View`
    margin: 44px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
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

const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #FF2D55;
    border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: "#ffffff",
    size: "small",
}))``;

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
    right: -200px;
    top: -350px;
`;

const LeftCircle = styled.View`
    background-color: #007AFF;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 150px;
    left: -100px;
    top: -50px;
`;



