import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDtN3kpTjk_Ij6w4NVo_5LYm8PmaMgBMJY",
	authDomain: "todo-7f4aa.firebaseapp.com",
	projectId: "todo-7f4aa",
	storageBucket: "todo-7f4aa.appspot.com",
	messagingSenderId: "199038705361",
	appId: "1:199038705361:web:17302b299dc3582fe56ff0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
