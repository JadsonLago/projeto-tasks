import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../services/api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    const handleEdit = (task) => {
        setEditingTask(task);
    };

    const handleTaskUpdated = () => {
        setEditingTask(null);
        fetchTasks();
    };

    return (
        <div className="task-list">
            <h1>Lista de Tarefas</h1>
            <TaskForm 
                task={editingTask} 
                onTaskUpdated={handleTaskUpdated} 
            />
            <ul>
                {tasks.map(task => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        onDelete={handleDelete} 
                        onEdit={handleEdit} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;