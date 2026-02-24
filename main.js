import {
    addTask,
    deleteTask,
    listTasks
} from "./tasks.js";

// Async runner
const run = async () => {
    await addTask("Study JavaScript");
    await addTask("Practice coding");
    await addTask("Revise ES6 modules");

    await listTasks();

    await deleteTask(1); 

    await listTasks();
};

run();