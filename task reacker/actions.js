
//actions
export const addTask = (id, title, details, status) => ({
    type: "ADDTASK",
    payload: { id, title, details, status },
})
export const taskMoved = (taskId, droppedAt, title, details) => ({
    type: "TASKMOVED",
    payload: { taskId, droppedAt, title, details }
})



