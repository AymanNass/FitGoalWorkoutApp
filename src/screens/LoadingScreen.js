import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import styled from 'styled-components'
import Text from "../components/Text"
import LottieView from 'lottie-react-native'

import { UserContext } from '../context/UserContext'
import { FirebaseContext } from '../context/FirebaseContext'

export default LoadingScreen = () => {
    const [_, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {

        setTimeout(async () => {

            const user = firebase.getCurrentUser()
            if (user) {
                const userInfo = await firebase.getUserInfo(user.uid)
                setUser({
                    isLoggedIn: true,
                    email: userInfo.email,
                    uid: user.uid,
                    username: userInfo.username,

                })
            } else {
                setUser((state) => ({ ...state, isLoggedIn: false }));
            }
        }, 1500);
    }, []);

    return (
        <Container>

            <Image
                source={
                    require('../../assets/Logo-red.png')
                }
                style={{ width: 175, height: 200 }}
            />
            <View style={{ height: 20 }} />
            <Text logo semi color="#FFFFFF">FitGoal</Text>
            <LottieView
                source={require("../../animation.json")}
                autoPlay
                loop
                style={{ width: "50%" }}

            />


        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #222222;
`