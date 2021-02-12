import db from "./init-firebase";
import { message } from "antd";

const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case ("ADDTASK"):
            console.log("add task action called");
            //adding data in firestore
            db.collection("tasks").add({
                id: action.payload.id,
                title: action.payload.title,
                details: action.payload.details,
                status: action.payload.status
            })
                .then(()=> {
                    message.success({ content: "task added", duration: 1, style: { marginTop: "5%" } });
                })
                
                .catch((error) =>{
                    console.error("Error adding document: ", error);
                });
            break;
        case ("TASKMOVED"):
            var docId = "";
            var taskId = action.payload.taskId;
            db.collection("tasks").where("id", "==", Number(taskId)).get() //fetching document id of moved task
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        docId = doc.id;
                    });
                })
                .then(() => {
                    db.collection("tasks").doc(docId).set({ //updateing moved task's data
                        id: Number(taskId),
                        title: action.payload.title,
                        details: action.payload.details,
                        status: action.payload.droppedAt
                    })
                        .then(() => console.log("updated"))
                }
                );
            break;
        default:
            return state;
    }
}

export default taskReducer;