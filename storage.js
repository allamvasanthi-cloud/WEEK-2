// Fake async storage (in-memory)
let taskDB = [];

// Callback-based storage
export const saveTaskCallback = (task, callback) => {
    setTimeout(() => {
        taskDB.push(task);
        callback(null, taskDB);
    }, 500);
};

export const getTasksCallback = (callback) => {
    setTimeout(() => callback(null, taskDB), 500);
};

export const deleteTaskCallback = (index, callback) => {
    setTimeout(() => {
        taskDB.splice(index, 1);
        callback(null, taskDB);
    }, 500);
};