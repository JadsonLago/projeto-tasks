import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
    return (
        <li className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Concluída' : 'Pendente'}</p>
            <button onClick={() => onEdit(task)}>Editar</button>
            <button onClick={() => onDelete(task.id)}>Excluir</button>
        </li>
    );
};

export default TaskItem;