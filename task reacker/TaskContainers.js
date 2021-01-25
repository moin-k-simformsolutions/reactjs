import React from 'react';
import Task from './Task';
class TaskContainers extends React.Component {
    constructor() {
        super();
        this.state = {
            taskTitles: ["task 1", "task 2"],
            taskDetails: ["task details", "some task details"],
            taskStatus: ["backlog", "inprogress"] //can be backlog ,inprogress or complete
        }
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
                            <Task taskid={"task" + (i + 1)} title={title} details={this.state.taskDetails[i]} /> :
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
        this.setState(
            {
                taskTitles: this.state.taskTitles.concat(title),
                taskDetails: this.state.taskDetails.concat(details),
                taskStatus: this.state.taskStatus.concat("backlog")
            });
        console.table(this.state);
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
        var taskNum = Number(data.slice(4)) - 1;
        var allstatus = this.state.taskStatus.slice();
        allstatus[taskNum] = "inprogress";
        // this.setState({taskStatus:allstatus});
        // alert(allstatus);
    }
}

export default TaskContainers;