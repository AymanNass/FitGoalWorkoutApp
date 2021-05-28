import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"

//Prende gli esercizi per la schermata parti del corpo (ExercisesListScreen)
export async function getExercises(ExercisesRetrived) {
    var exercisesList = []
    var snapshot = await firebase
        .firestore()
        .collection("Exercises")
        .get()
    snapshot.forEach((doc) => {
        const exercisesDoc = doc.data()
        exercisesDoc.id = doc.id
        exercisesList.push(exercisesDoc)
    })
    ExercisesRetrived(exercisesList)
}

export function addWorkoutExercise(exercise, addComplete) {
    firebase
        .firestore()
        .collection("Schedules")
        .doc("kDblQx86UJMxoIkXwaCi")
        .collection("Exercises")
        .add(exercise)
        .then((snapshot) => {
            exercise.id = snapshot.id
            snapshot.set(exercise)
        })
        .then(() => addComplete(exercise))
        .catch((error) => console.log(error))
}

export function addWorkout(routine, addComplete) {
    firebase
        .firestore()
        .collection("Schedules")
        .doc(firebase.auth().currentUser.uid)
        .collection("Routines")
        .add(routine)
        .then((snapshot) => {
            routine.id = snapshot.id
            snapshot.set(routine)
        })
        .then(() => addComplete(routine))
        .catch((error) => console.log(error))
}

export async function getWorkout(measureRetrived) {
    var measureList = []
    var snapshot = await firebase
        .firestore()
        .collection("Schedules")
        .doc(firebase.auth().currentUser.uid)
        .collection("Routines")
        .doc("A")
        .collection("Lunedì")
        .doc("suQX51NNU9KP78aqZoIe")
        .get()
    snapshot.forEach((doc) => {
        const measureDoc = doc.data()
        measureDoc.id = doc.id
        measureList.push(measureDoc)
    })
    measureRetrived(measureList)
}

//Prende gli esercizi nel workout
export async function getWorkoutSchedule(WorkoutRetrived, workoutid) {
    var workoutList = []
    var snapshot = await firebase
        .firestore()
        .collection("Schedules")
        .doc(workoutid)
        .collection("Exercises")
        .get()
    snapshot.forEach((doc) => {
        const workoutDoc = doc.data()
        workoutDoc.id = doc.id
        workoutList.push(workoutDoc)
    })
    WorkoutRetrived(workoutList)
}

// prende i nomi dei  workout

export async function getWorkoutScheduleName(WorkoutNameRetrived) {
    var workoutNameList = []
    var snapshot = await firebase
        .firestore()
        .collection("Schedules")

        .get()
    snapshot.forEach((doc) => {
        const workoutNameDoc = doc.data()
        workoutNameDoc.id = doc.id
        workoutNameList.push(workoutNameDoc)
    })
    WorkoutNameRetrived(workoutNameList)
}

