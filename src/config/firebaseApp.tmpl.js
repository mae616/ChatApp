// 認証情報を記述後、ファイル名の「.tmpl」を削除

// 参考：https://zenn.dev/hiro__dev/articles/605161cd5a7875

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "********************",
    authDomain: "********************",
    projectId: "********************",
    storageBucket: "********************",
    messagingSenderId: "********************",
    appId: "********************"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp
