import React from 'react';

const DeleteButton = ({ id }) => {
    const handleDelete = async () => {
        const response = await fetch('/api/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
        } else {
            console.error('Error deleting data');
        }
    };

    return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;