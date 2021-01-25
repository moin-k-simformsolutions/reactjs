import React from 'react';
import "./TaskTrackerStyle.css"
import TaskContainers from './TaskContainers'
class TaskTracker extends React.Component {

    render() {
        return (<div>
            <div id="tasktrackercontainer">
                <p id="tasktrackerheading">Task Tracker</p>
                <TaskContainers name="backlog" />
                <TaskContainers name="in progress" />
                <TaskContainers name="complete" />
                <div id="deletetask" onDragEnd="onDragEnd(event)" onDrop="deletedropped(event, this.id)"
                    onDragOver="dragOver(event, this.id)" onDragLeave="stopDrop(event, this.id);">
                    <p style={{ fontSize: "25", fontFamily: "impact", padding: "0%" }}>remove</p>
                </div>

            </div>
        </div>);
    }
}

export default TaskTracker