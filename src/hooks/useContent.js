import {useContext, useEffect, useState} from "react";
import {FirebaseContext} from "../context/firebaseContext";

export const useContent = target => {
    const [content, setContent] = useState([])
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                const allContent = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        docId: doc.id
                    }
                })
                setContent(allContent)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    return content
}