import React from 'react';
import "./TaskTrackerStyle.css"
import TaskContainers from './TaskContainers'
import db from "./init-firebase";
class TaskTracker extends React.Component {
    constructor() {
        super();
        this.state = {
            taskId: [],
            taskTitles: [],
            taskDetails: [],
            taskStatus: [] //can be backlog ,inprogress or complete
        }
    }
    render() {
        return (<div>
            <div id="tasktrackercontainer">
                <p id="tasktrackerheading">Task Tracker</p>
                <TaskContainers name="backlog" taskIds={this.state.taskId} taskTitles={this.state.taskTitles} taskDetails={this.state.taskDetails} taskStatus={this.state.taskStatus} />
                <TaskContainers name="in progress" taskIds={this.state.taskId} taskTitles={this.state.taskTitles} taskDetails={this.state.taskDetails} taskStatus={this.state.taskStatus} />
                <TaskContainers name="complete" taskIds={this.state.taskId} taskTitles={this.state.taskTitles} taskDetails={this.state.taskDetails} taskStatus={this.state.taskStatus} />
                <div id="deletetask" onDragEnd="onDragEnd(event)" onDrop="deletedropped(event, this.id)"
                    onDragOver="dragOver(event, this.id)" onDragLeave="stopDrop(event, this.id);">
                    <p style={{ fontSize: "25", fontFamily: "impact", padding: "0%" }}>remove</p>
                </div>

            </div>
        </div>);
    }

    componentDidMount() {

        //==============getting data once==============
        // db.collection("tasks").orderBy("id").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         this.setState(
        //             {
        //                 taskId: this.state.taskId.concat(doc.data().id),
        //                 taskTitles: this.state.taskTitles.concat(doc.data().title),
        //                 taskDetails: this.state.taskDetails.concat(doc.data().details),
        //                 taskStatus: this.state.taskStatus.concat(doc.data().status)
        //             });
        //     })
        // }).then(()=>{console.log("data fetched");this.setState(this.state)});

        //============reading real time changes=======
        db.collection("tasks").orderBy("id").onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().forEach((change,doc) => {
                if (change.type === "added") {
                    this.setState(
                        {
                            taskId: this.state.taskId.concat(change.doc.data().id),
                            taskTitles: this.state.taskTitles.concat(change.doc.data().title),
                            taskDetails: this.state.taskDetails.concat(change.doc.data().details),
                            taskStatus: this.state.taskStatus.concat(change.doc.data().status)
                        });
                }
                if (change.type === "modified") {
                    const index = this.state.taskId.indexOf(change.doc.data().id);
                    
                    if (index > -1) {
                        //removing moved task details from state so it is not available twice
                        this.state.taskId.splice(index, 1);
                        this.state.taskTitles.splice(index, 1);
                        this.state.taskDetails.splice(index, 1);
                        this.state.taskStatus.splice(index, 1);
                        
                        console.log(change.doc.data());
                        this.setState(
                            {
                                taskId: this.state.taskId.concat(change.doc.data().id),
                                taskTitles: this.state.taskTitles.concat(change.doc.data().title),
                                taskDetails: this.state.taskDetails.concat(change.doc.data().details),
                                taskStatus: this.state.taskStatus.concat(change.doc.data().status)
                            });
                    }

                }
                // if (change.type === "removed") {
                //     // console.log("Removed city: ", change.doc.data());
                // }
            });
        });
    }
}

export default TaskTracker