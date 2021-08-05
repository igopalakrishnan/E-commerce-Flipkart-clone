import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
* @author
* @function NewModal
**/

const NewModal = (props) => {
    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                {
                    props.buttons ? props.buttons.map((btn, index) =>
                        <Button key={index} variant="primary" onClick={btn.onClick}>
                            {btn.label}
                        </Button>
                    ) :
                        <Button
                            variant="primary"
                            style={{backgroundColor: '#333'}}
                            onClick={props.handleClose}
                            {...props}
                        >
                            Save
                        </Button>
                }

            </Modal.Footer>
        </Modal>
    )

}

export default NewModal;