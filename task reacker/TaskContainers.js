import React from 'react';
import Task from './Task';
import db from "./init-firebase";
class TaskContainers extends React.Component {
    constructor() {
        super();
        this.state = {
            taskId: [],
            taskTitles: [],
            taskDetails: [],
            taskStatus: [] //can be backlog ,inprogress or complete
        }
    }

    componentDidMount() {
        db.collection("tasks").orderBy("id").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data().title}`);
                this.setState(
                    {
                        taskId: this.state.taskId.concat(doc.data().id),
                        taskTitles: this.state.taskTitles.concat(doc.data().title),
                        taskDetails: this.state.taskDetails.concat(doc.data().details),
                        taskStatus: this.state.taskStatus.concat(doc.data().status)
                    });
            });
        });
    }

    render() {
        const containerName = this.props.name;
        return (
            <div id={containerName.replace(/ /g, '')}>
                <p class="blockheading">{this.props.name}</p>
                <div id={containerName.replace(/ /g, '') + "taskscontainer"} class="taskscontainer"
                    onDrop={(e) => this.dropped(e, this.id)} onDragOver={(e) => this.dragOver(e, this.id)}
                    ondragleave="stopDrop(event, this.id);">
                    {/* ==rendering all tasks in their particular containers== */}
                    {this.state.taskTitles.map((title, i) => (
                        this.state.taskStatus[i] === containerName.replace(/ /g, '') ? //==dispaly task in container based on its status
                            <Task taskid={"task" + this.state.taskId[i]} title={title} details={this.state.taskDetails[i]} /> :
                            null
                    ))}
                </div>
                {/*==to display add button only for backlog container==*/}
                {this.props.name === "backlog" ?
                    <button id="addtask" onClick={this.addTask}>add task</button> : null}
            </div>
        );
    }

    addTask = () => {
        var title = prompt("enter task title");
        var details = prompt("enter task details (optional)");
        if(title.length===0)return;
        var id = this.state.taskTitles.length === 0 ? 0 : this.state.taskTitles.length;

        //adding data in firestore
        db.collection("tasks").add({
            id: id,
            title: title,
            details: details,
            status: "backlog"
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            }).then(() => { //setting new data in state
                this.setState(
                    {
                        taskId: this.state.taskId.concat(id),
                        taskTitles: this.state.taskTitles.concat(title),
                        taskDetails: this.state.taskDetails.concat(details),
                        taskStatus: this.state.taskStatus.concat("backlog")
                    });
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

    }

    //functions for drag and drop functionality
    dragOver(ev) {
        ev.preventDefault();
    }

    stopDrop(ev) {
        ev.preventDefault();
    }

    dropped(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
        var droppedAt = ev.target.id.slice(0, ev.target.id.indexOf("task"));
        var taskId = data.slice(4);
        var docId = "";
        db.collection("tasks").where("id", "==", Number(taskId)).get() //fetching document id of moved task
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    docId = doc.id;
                });
            })
            .then(() => {
                db.collection("tasks").doc(docId).set({ //updateing moved task's data
                    id: Number(taskId),
                    title: this.state.taskTitles[taskId],
                    details: this.state.taskDetails[taskId],
                    status: droppedAt
                })
                    .then(() => console.log("updated"))
                    .then(() => {
                        this.setState(this.state);
                    })
            }
            );
    }
}

export default TaskContainers;