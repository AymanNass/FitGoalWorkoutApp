

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
        color: '#DB504A'
    };
    const buttonTextStyleBack = {
        color: '#61C9A8'
    };
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
                    Benvenuto
            </Text>
            </Main>

            <ProgressSteps
                activeStepIconBorderColor={"#DB504A"}
                completedProgressBarColor={"#DB504A"}
                activeStepIconColor={"#E5E1EE"}
                completedStepIconColor={"#DB504A"}
                activeLabelColor={"#F15152"}>

                <ProgressStep
                    label="Benvenuto"
                    nextBtnText="Avanti"
                    nextBtnTextStyle={buttonTextStyle}>

                    <View style={{ height: 20 }} />
                    <Text large bold center>Benvenuto in FitGoal</Text>
                    <View style={{ height: 20 }} />
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
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.inputContainer}>


                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor="grey"

                                type="text"
                                value={username}
                                onChangeText={(username) => setUsername(username.trim())}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="grey"
                                type="email"
                                value={email}
                                onChangeText={(email) => setEmail(email.trim())}
                            />

                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                placeholder="Password"
                                placeholderTextColor="grey"
                                type="password"
                                value={password}
                                onChangeText={(password) => setPassword(password.trim())}
                            />


                        </View>

                    </View>
                </ProgressStep>
                <ProgressStep
                    label="Data di nascita"
                    nextBtnText="Avanti"
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnText="Indietro"
                    previousBtnTextStyle={buttonTextStyleBack}
                    onSubmit={signUp}
                >
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="Giorno"
                                placeholderTextColor="grey"
                                type="text"
                                value={date}
                                onChangeText={(date) => setDate(date.trim())}
                            />

                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="Mese"
                                placeholderTextColor="grey"
                                type="text"
                                value={month}
                                onChangeText={(month) => setMonth(month.trim())}
                            />
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="Anno"
                                placeholderTextColor="grey"
                                type="text"
                                value={year}
                                onChangeText={(year) => setYear(year.trim())}
                            />


                        </View>
                    </View>

                </ProgressStep>
            </ProgressSteps>




            <SignUp onPress={() => navigation.navigate("SignUp")}>
                <Text small center>
                    New to SocialApp?{" "}
                    <Text bold color="#007AFF">
                        Sign Up
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


const ProfilePhoto = styled.Image`
    flex: 1;
`;