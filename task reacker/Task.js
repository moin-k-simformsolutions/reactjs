import React from "react";

class Task extends React.Component {
    render() {
        return (
            <div id={this.props.taskid} class="task" draggable="true" onDragStart={(e)=>this.dragStart(e)}>
                <p class="tasktitle">{this.props.title}</p>
                <p class="taskdetails">{this.props.details}</p>
            </div>
        );
    }

    dragStart(ev){
        ev.dataTransfer.setData("text", ev.target.id);
        // document.getElementById("backlogtaskcontainer").style.border = "dashed 3px rgba(0,0,0,0.3)";
        // document.getElementById("inprogresstaskscontainer").style.border = "dashed 3px rgba(0,0,0,0.3)";
        // document.getElementById("completetaskscontainer").style.border = "dashed 3px rgba(0,0,0,0.3)";
        // document.getElementById("deletetask").style.display = "inline-block";
    }
}

export default Task;