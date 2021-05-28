import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"

export function addMeasure(measure, addComplete, part) {
    firebase
        .firestore()
        .collection("Measures")
        .doc(firebase.auth().currentUser.uid)
        .collection(part)
        .add(measure)
        .then((snapshot) => {
            measure.id = snapshot.id
            snapshot.set(measure)
        })
        .then(() => addComplete(measure))
        .catch((error) => console.log(error))
}

export async function getMeasures(measureRetrived, part) {
    var measureList = []
    var snapshot = await firebase
        .firestore()
        .collection("Measures")
        .doc(firebase.auth().currentUser.uid)
        .collection(part)
        .get()
    snapshot.forEach((doc) => {
        const measureDoc = doc.data()
        measureDoc.id = doc.id
        measureList.push(measureDoc)
    })
    measureRetrived(measureList)
}




export async function updateDanceMove(dance, updateComplete) {
    firebase.
        firestore().
        collection("DanceMoves").
        doc(dance.id).
        set(dance).then(() => updateComplete(dance)).
        catch((error) => console.log(error))
}

export async function deleteDanceMove(dance, deleteComplete) {
    firebase.
        firestore().
        collection("DanceMoves").
        doc(dance.id).
        delete().
        then(() => deleteComplete()).
        catch((error) => console.log(error))
}