import firebase from 'firebase/app' // firebase 全般の機能を利用するために必要
import 'firebase/auth' // ログイン機能を使うために読み込み
import 'firebase/firestore' // データベース機能を使うために読み込み。db

if (!firebase.apps.length) {
	const config = {
		apiKey: "AIzaSyD_nGv5lRGSzB41hvjypLggnoBWgYAiGfY", // データベースを定義
		authDomain: "slackcloneapp-ef085.firebaseapp.com",
		databaseURL: "https://slackcloneapp-ef085.firebaseio.com",
		projectId: "slackcloneapp-ef085",
		storageBucket: "slackcloneapp-ef085.appspot.com",
		messagingSenderId: "G-K43J9J5RYX"
	};
	firebase.initializeApp(config);
}

const db = firebase.firestore();
export {
	firebase,
	db
};
