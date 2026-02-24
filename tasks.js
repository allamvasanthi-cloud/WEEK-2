import {
    saveTaskCallback,
    getTasksCallback,
    deleteTaskCallback
} from "./storage.js";

/*CALLBACK VERSION*/

export const addTaskCallback = (task) => {
    saveTaskCallback(task, (err, data) => {
        if (err) return console.error(err);
        console.log(` Task added (Callback): ${task}`);
    });
};

export const listTasksCallback = () => {
    getTasksCallback((err, tasks) => {
        if (err) return console.error(err);
        console.log(`Tasks (Callback):`, tasks);
    });
};

/*PROMISE VERSION */

const saveTaskPromise = (task) =>
    new Promise((resolve, reject) =>
        saveTaskCallback(task, (err, data) =>
            err ? reject(err) : resolve(data)
        )
    );

const getTasksPromise = () =>
    new Promise((resolve, reject) =>
        getTasksCallback((err, data) =>
            err ? reject(err) : resolve(data)
        )
    );

const deleteTaskPromise = (index) =>
    new Promise((resolve, reject) =>
        deleteTaskCallback(index, (err, data) =>
            err ? reject(err) : resolve(data)
        )
    );

export const addTaskPromise = (task) =>
    saveTaskPromise(task)
        .then(() => console.log(`Task added (Promise): ${task}`))
        .catch(console.error);

export const deleteTaskPromiseFn = (index) =>
    deleteTaskPromise(index)
        .then(() => console.log(` Task deleted (Promise) at index ${index}`))
        .catch(console.error);

export const listTasksPromise = () =>
    getTasksPromise()
        .then(tasks => console.log(` Tasks (Promise):`, tasks))
        .catch(console.error);

/*ASYNC/AWAIT VERSION (BEST)*/

export const addTask = async (task) => {
    try {
        await saveTaskPromise(task);
        console.log(`Task added (Async): ${task}`);
    } catch (err) {
        console.error(err);
    }
};

export const deleteTask = async (index) => {
    try {
        await deleteTaskPromise(index);
        console.log(` Deleted task at index ${index}`);
    } catch (err) {
        console.error(err);
    }
};

export const listTasks = async () => {
    try {
        const tasks = await getTasksPromise();

        const formatted = tasks
            .map((t, i) => `${i + 1}. ${t}`)
            .join("\n");

        console.log(`
===== TASK LIST =====
${formatted || "No tasks yet"}
========================
        `);
    } catch (err) {
        console.error(err);
    }
};