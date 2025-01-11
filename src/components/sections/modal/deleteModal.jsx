import React from 'react';

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Are you sure you want to delete this product?</h3>
                <div className="modal-actions">
                    <button onClick={onConfirm} className="confirm-btn">Yes, Delete</button>
                    <button onClick={onCancel} className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
