import store from '../Store/Store';
import firebase from 'firebase';


//Iniatilize Firebase
var config = {
    apiKey: "AIzaSyABFNS5kRxFii7Bxnk7XJYtr556nbg2XwQ",
    authDomain: "proyecto-b6696.firebaseapp.com",
    databaseURL: "https://proyecto-b6696.firebaseio.com",
    projectId: "proyecto-b6696",
    storageBucket: "proyecto-b6696.appspot.com",
    messagingSenderId: "852598140792"
  };

firebase.initializeApp(config);

const snapshotToArray = snapshot => {
    let comments = []
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        let key = childSnapshot.key;
        item.id = key;
        comments.push(item);
    });
    store.setState({
        comments: comments
    })
};

export const readAllComments = () => {
    firebase.database()
        .ref('comentarios/')
        .on('value', (res) => {
            snapshotToArray(res)
        });
}

export async function Contacto(firstName, email, puesto, compania, message) {
    /*const comments = store.getState().user;*/
    console.log(firstName+email+puesto+compania+message);
    const newcomment = {
        firstName: firstName,
        email: email,
        puesto: puesto,
        compania:compania,
        message:message
    };

    const res = await firebase.database().ref('comentarios/').push(newcomment);
    newcomment.id = res.key;

    /*const newComment = comments.concat(newcomment);
    store.setState({
        comments: newComment
    })*/
}