import React from 'react';
import './DeleteListItemModal.css';
import { Modal } from 'react-bootstrap';
import { ButtonComponent } from '../../components/Ui/index';

const DeleteListItemModal = ({ show, linkName, okModal, closeModal}) => {

    return (
        <Modal show={show}  onHide={() => closeModal()} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Remove Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-content-container">
                    <div className="modal-content-title">Do you want to remove:</div>
                    <div className="modal-content-linkName">{linkName}</div>
                    <div className="modal-buttons">
                        <div className="ok-button">
                        <ButtonComponent onClick={() => okModal()} text="OK"/>
                        </div>
                        <div className="cancel-button">
                        <ButtonComponent onClick={() => closeModal()} text="CANCEL"/>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export { DeleteListItemModal };