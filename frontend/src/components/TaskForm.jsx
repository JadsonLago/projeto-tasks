import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../services/api';

const TaskForm = ({ task, onTaskUpdated }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        completed: false
    });

    useEffect(() => {
        if (task) {
            setFormData({
                title: task.title,
                description: task.description,
                completed: task.completed
            });
        } else {
            resetForm();
        }
    }, [task]);

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            completed: false
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (task) {
            await updateTask(task.id, formData);
        } else {
            await createTask(formData);
        }
        
        resetForm();
        onTaskUpdated();
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Título"
                required
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descrição"
            />
            <label>
                <input
                    type="checkbox"
                    name="completed"
                    checked={formData.completed}
                    onChange={handleChange}
                />
                Concluída
            </label>
            <button type="submit">
                {task ? 'Atualizar' : 'Adicionar'}
            </button>
            {task && (
                <button type="button" onClick={resetForm}>
                    Cancelar
                </button>
            )}
        </form>
    );
};

export default TaskForm;