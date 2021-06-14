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





