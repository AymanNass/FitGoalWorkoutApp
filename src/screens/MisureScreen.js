
import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import styled from 'styled-components'
import Text from '../components/Text'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

import "firebase/auth"
import "firebase/firestore"
import firebase from 'firebase'

export default function MisureScreen({ navigation }) {


    return (

        <Container>
            <Text title light>Misure</Text>
            <GroupContainer>
                <StatsContainer>
                    <MaterialCommunityIcons
                        onPress={() => navigation.navigate("Aggiungi", { size: 'Peso', })}
                        name={"plus"}
                        size={30}
                        color={"#007AFF"} />
                    <StatContainer>
                        <View style={{ marginLeft: 10 }}>
                            <Text large light>
                                Peso
                            </Text>
                        </View>


                    </StatContainer>

                    <StatContainer>
                        <View style={{ padding: 0, flexDirection: "row" }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Statistiche", { size: 'Peso' })}
                                style={styles.button}
                            >
                                <Text style={{ color: "#F15152" }}> Diario </Text>
                            </TouchableOpacity>

                        </View>


                    </StatContainer>
                </StatsContainer>

                <StatsContainer>
                    <MaterialCommunityIcons
                        onPress={() => navigation.navigate("Aggiungi", { size: 'Altezza', })}
                        name={"plus"}
                        size={30}
                        color={"#007AFF"} />
                    <StatContainer>
                        <View style={{ marginLeft: 10 }}>
                            <Text large light>
                                Altezza
                            </Text>
                        </View>

                    </StatContainer>

                    <StatContainer>
                        <View style={{ padding: 0, flexDirection: "row" }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Statistiche", { size: 'Altezza' })}
                                style={styles.button}
                            >
                                <Text style={{ color: "#F15152" }}> Diario </Text>
                            </TouchableOpacity>

                        </View>


                    </StatContainer>
                </StatsContainer>

                <StatsContainer>
                    <MaterialCommunityIcons
                        onPress={() => navigation.navigate("Aggiungi", { size: 'Petto', })}
                        name={"plus"}
                        size={30}
                        color={"#007AFF"} />
                    <StatContainer>
                        <View style={{ marginLeft: 10 }}>
                            <Text large light>
                                Petto
                            </Text>
                        </View>

                    </StatContainer>

                    <StatContainer>
                        <View style={{ padding: 0, flexDirection: "row" }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Statistiche", { size: 'Petto' })}
                                style={styles.button}
                            >
                                <Text style={{ color: "#F15152" }}> Diario </Text>
                            </TouchableOpacity>
                        </View>


                    </StatContainer>
                </StatsContainer>
                <StatsContainer>
                    <MaterialCommunityIcons
                        onPress={() => navigation.navigate("Aggiungi", { size: 'Vita', })}
                        name={"plus"}
                        size={30}
                        color={"#007AFF"} />

                    <StatContainer>
                        <View style={{ marginLeft: 10 }}>
                            <Text large light>
                                Vita
                            </Text>
                        </View>

                    </StatContainer>

                    <StatContainer>
                        <View style={{ padding: 0, flexDirection: "row" }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Statistiche", { size: 'Vita' })}
                                style={styles.button}
                            >
                                <Text style={{ color: "#F15152" }}> Diario </Text>
                            </TouchableOpacity>
                        </View>


                    </StatContainer>
                </StatsContainer>

                <StatsContainer>
                    <MaterialCommunityIcons
                        onPress={() => navigation.navigate("Aggiungi", { size: 'Bicipitesx', })}
                        name={"plus"}
                        size={30}
                        color={"#007AFF"} />

                    <StatContainer>
                        <View style={{ marginLeft: 10 }}>
                            <Text large light>
                                Bicipite Sx
                            </Text>
                        </View>

                    </StatContainer>

                    <StatContainer>
                        <View style={{ padding: 0, flexDirection: "row" }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Statistiche", { size: 'Bicipitesx' })}
                                style={styles.button}
                            >
                                <Text style={{ color: "#F15152" }}> Diario </Text>
                            </TouchableOpacity>
                        </View>


                    </StatContainer>
                </StatsContainer>

                <StatsContainer>
                    <MaterialCommunityIcons
                        onPress={() => navigation.navigate("Aggiungi", { size: 'Bicipitedx', })}
                        name={"plus"}
                        size={30}
                        color={"#007AFF"} />

                    <StatContainer>
                        <View style={{ marginLeft: 10 }}>
                            <Text large light>
                                Bicipite Dx
                            </Text>
                        </View>

                    </StatContainer>

                    <StatContainer>
                        <View style={{ padding: 0, flexDirection: "row" }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Statistiche", { size: 'Bicipitedx' })}
                                style={styles.button}
                            >
                                <Text style={{ color: "#F15152" }}> Diario </Text>
                            </TouchableOpacity>
                        </View>


                    </StatContainer>
                </StatsContainer>

                <StatsContainer>
                    <MaterialCommunityIcons
                        onPress={() => navigation.navigate("Aggiungi", { size: 'GambaSx', })}
                        name={"plus"}
                        size={30}
                        color={"#007AFF"} />

                    <StatContainer>
                        <View style={{ marginLeft: 10 }}><Text large light>
                            Gamba Sx
                        </Text></View>

                    </StatContainer>

                    <StatContainer>
                        <View style={{ padding: 0, flexDirection: "row" }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Statistiche", { size: 'GambaSx' })}
                                style={styles.button}
                            >
                                <Text style={{ color: "#F15152" }}> Diario </Text>
                            </TouchableOpacity>
                        </View>


                    </StatContainer>
                </StatsContainer>
                <StatsContainer>
                    <MaterialCommunityIcons
                        onPress={() => navigation.navigate("Aggiungi", { size: 'GambaDx', })}
                        name={"plus"}
                        size={30}
                        color={"#007AFF"} />

                    <StatContainer>
                        <View style={{ marginLeft: 10 }}><Text large light>
                            Gamba Dx
                        </Text></View>
                    </StatContainer>
                    <StatContainer>
                        <View style={{ padding: 0, flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Statistiche", { size: 'GambaDx' })}
                                style={styles.button}
                            >
                                <Text style={{ color: "#F15152" }}> Diario </Text>
                            </TouchableOpacity>
                        </View>
                    </StatContainer>
                </StatsContainer>
            </GroupContainer>
        </Container>
    );
}



const Container = styled.View`
    margin-top: 50px;
    marginLeft: 15px;
    flex: 1;
`;

const GroupContainer = styled.View`
    margin-top: 20px;
    flex: 1;
`;

const StatsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 2px;
`;

const StatContainer = styled.View`
    flex: 1;
`;

const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        padding: 6,
        borderRadius: 5,
        width: 130,
        height: 30,
        borderColor: '#F15152',
        borderWidth: 1
    },
    button2: {
        alignItems: 'center',
        padding: 6,
        borderRadius: 5,
        width: 100,
        height: 30,
        borderColor: '#F15152',
        borderWidth: 1
    },
});
