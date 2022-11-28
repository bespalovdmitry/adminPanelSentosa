import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {FIREBASE_API} from "../config";

const app = initializeApp(FIREBASE_API);
export const db = getFirestore(app);

export const firebaseAPI = {
    getData: async () => {
        const docRef = collection(db, 'root_applicant');
        const docSnap = await getDocs(docRef);
        let res: any = []
        docSnap.forEach(el => {
            res = [...res, el.data()]
        })
        return res
    }
}