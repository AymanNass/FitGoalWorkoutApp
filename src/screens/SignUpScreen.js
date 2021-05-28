

import React, { useState, useContext } from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import { Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components"
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FirebaseContext } from '../context/FirebaseContext';
import { UserContext } from '../context/UserContext';
import Text from '../components/Text'

export default SignUpScreen = ({ navigation }) => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [date, setDate] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [profilePhoto, setProfilePhoto] = useState();
    const [loading, setLoading] = useState();
    const firebase = useContext(FirebaseContext)
    const [_, setUser] = useContext(UserContext)


    const signUp = async () => {
        setLoading(true)

        const user = { username, email, ProfilePhoto, password, date, month, year }
        try {
            const createdUser = await firebase.createUser(user)
            setUser({ ...createdUser, isLoggedIn: true })

        } catch (error) {
            console.log("Error @signup: ", error)
        } finally {
            setLoading(false);
        }
    }

    const buttonTextStyle = {
        color: '#FF2D55'
    };
    const buttonTextStyleBack = {
        color: '#007AFF'
    };
    return (
        <Container>
            <StatusBar style="light" />

            <Logo>
                <Image
                    source={
                        require('../../assets/Logo-white.png')
                    }
                    style={{ width: 70, height: 127, resizeMode: 'contain' }}
                />
            </Logo>



            <ProgressSteps
                activeStepIconBorderColor={"#FF2D55"}
                completedProgressBarColor={"#007AFF"}
                activeStepIconColor={"white"}
                completedStepIconColor={"#007AFF"}
                activeLabelColor={"#FF2D55"}>

                <ProgressStep
                    label="Benvenuto"
                    nextBtnText="Avanti"
                    nextBtnTextStyle={buttonTextStyle}>
                    <View style={{ height: 20 }} />

                    <Text title semi center color="#FF2D55">
                        Benvenuto su FitGoal
                        </Text>

                    <View style={{ height: 40 }} />
                    <Text large semi center>Tieni traccia dei tuoi allenamenti</Text>
                    <View style={{ height: 20 }} />
                    <Text large semi center>Trova il programma giusto per te</Text>
                    <View style={{ height: 20 }} />
                    <Text large semi center>Monitora i tuoi progressi</Text>
                </ProgressStep>

                <ProgressStep
                    label="Credenziali"
                    nextBtnText="Avanti"
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnText="Indietro"
                    previousBtnTextStyle={buttonTextStyleBack}>

                    <Auth>

                        <AuthContainer>
                            <AuthTitle>Email Address</AuthTitle>
                            <AuthField
                                autoCapitalize="none"
                                autoCompleteType="email"
                                autoCorrect={false}
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

                </ProgressStep>
                <ProgressStep
                    label="Informazioni"
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnText="Indietro"
                    previousBtnTextStyle={buttonTextStyleBack}
                    onSubmit={signUp}
                >

                    <Auth>
                        <AuthContainer>
                            <AuthTitle>Username</AuthTitle>
                            <AuthField
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoFocus={true}
                                onChangeText={(username) => setUsername(username.trim())}
                                value={username}
                            />
                        </AuthContainer>
                        <AuthTitle>Data di nascita</AuthTitle>

                        <AuthContainer2>
                            <AuthField2
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(date) => setDate(date.trim())}
                                value={date}
                                keyboardType="numeric"
                                placeholder="Giorno"
                                placeholderTextColor="#F2F2F7"

                            /><AuthField2
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(month) => setMonth(month.trim())}
                                value={month}
                                keyboardType="numeric"
                                placeholder="Mese"
                                placeholderTextColor="#F2F2F7"

                            /><AuthField2
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(year) => setYear(year.trim())}
                                value={year}
                                keyboardType="numeric"
                                placeholder="Mese"
                                placeholderTextColor="#F2F2F7"

                            />
                        </AuthContainer2>
                    </Auth>

                </ProgressStep>
            </ProgressSteps>




            <SignUp onPress={() => navigation.navigate("SignIn")}>
                <Text medium center>
                    Già registrato?{" "}
                    <Text medium bold color="#007AFF">
                        Accedi
                </Text>
                </Text>
            </SignUp>

            <HeaderGraphic>
                <LeftCircle />
                <RightCircle />
            </HeaderGraphic>
        </Container>


    );
}
const Signin = styled.TouchableOpacity`
    margin-top: 16px;

`


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    inputContainer: {
        width: 300,

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DB504A',
        padding: 10,
        borderRadius: 18,
        width: 140,
        height: 40,

    },
    input: {
        margin: 0,
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 30,
        fontSize: 18,


    },



});



const Container = styled.View`
    flex: 1;
`;

const Logo = styled.View`
    margin-top: 12px;
    align-items: center;

`;

const Main = styled.View`
    margin-top: 22px;
`;

const Auth = styled.View`
    margin: 22px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
`;
const AuthContainer2 = styled.View`
    margin-bottom: 32px;
    align-items: center;
    width: 240px;
    flexDirection: row;
    margin-left:12px;
    margin-right:12px;


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
const AuthField2 = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
    width: 80px;
    margin-left: 12px;
    align-items: center;

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
    margin-bottom: 30px;
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
    top: -400px;
`;

const LeftCircle = styled.View`
    background-color: #007AFF;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 150px;
    left: -100px;
    top: -100px;
`;


const ProfilePhoto = styled.Image`
    flex: 1;
`;