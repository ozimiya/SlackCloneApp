import firebase from 'firebase/app' // firebase 全般の機能を利用するために必要
import 'firebase/auth' // ログイン機能を使うために読み込み
import 'firebase/firestore' // データベース機能を使うために読み込み。db

if (!firebase.apps.length) {
	const config = {
		apiKey: "AIzaSyBW1ZqIPn9V7NZ8zPsJzTRlP0QuSUtTwA8", // データベースを定義
		authDomain: "slack-clone-app-f801b.firebaseapp.com",
		databaseURL: "https://slack-clone-app-f801b.firebaseio.com",
		projectId: "slack-clone-app-f801b",
		storageBucket: "slack-clone-app-f801b.appspot.com",
		messagingSenderId: "557304819506"
	};
	firebase.initializeApp(config);
}

const db = firebase.firestore();
export {
	firebase,
	db
};
