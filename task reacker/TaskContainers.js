import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { addTask, taskMoved } from './actions';
class TaskContainers extends React.Component {
    constructor(props) {
        super(props);

        this.spinnerRef = React.createRef();
        this.state = {
            taskId: [],
            taskTitles: [],
            taskDetails: [],
            taskStatus: [] //can be backlog ,inprogress or complete
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            ReactDOM.findDOMNode(this.spinnerRef.current).style.display = 'none';
            this.setState({});
            this.setState({  taskId: this.props.taskIds,
                taskTitles: this.props.taskTitles,
                taskDetails: this.props.taskDetails,
                taskStatus: this.props.taskStatus });
        }
    }
    componentDidMount() {
        this.setState(
            {
                taskId: this.props.taskIds,
                taskTitles: this.props.taskTitles,
                taskDetails: this.props.taskDetails,
                taskStatus: this.props.taskStatus
            });

    }


    render() {
        const containerName = this.props.name;
        const antIcon = <LoadingOutlined style={{ fontSize: "50px", color: "white" }} spin />;

        return (
            <div id={containerName.replace(/ /g, '')}>
                <p className="blockheading">{this.props.name}</p>
                <Spin ref={this.spinnerRef} indicator={antIcon} style={{ marginTop: "60%" }} />
                <div key={this.state.taskId} id={containerName.replace(/ /g, '') + "taskscontainer"} class="taskscontainer"
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
                    <button id="addtask" onClick={this.addTaskLocal}>add task</button> : null}
            </div>
        );
    }

    addTaskLocal = () => {
        var title = prompt("enter task title");
        var details = prompt("enter task details (optional)");
        if (title.length === 0 || title === null) return;
        var id = this.state.taskTitles.length === 0 ? 0 : this.state.taskTitles.length;
        const { addTask } = this.props;
        addTask(id, title, details, "backlog");

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
        console.log(this.state);
        const { taskMoved } = this.props;
        var indexOfMovedTask=this.state.taskId.indexOf(Number(taskId));
        taskMoved(Number(taskId), droppedAt, this.state.taskTitles[indexOfMovedTask], this.state.taskDetails[indexOfMovedTask]);

    }
}

//redux
// const mapStateToProps = (state) => { return {taskDetails:state.taskDetails,taskIds:state.taskId,taskStatus:state.taskStatus,taskTitles:state.taskTitles} };
const mapStateToProps = (state) => { return state };

const mapDispatchToProps = {
    addTask, taskMoved
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainers);

// export default TaskContainers;