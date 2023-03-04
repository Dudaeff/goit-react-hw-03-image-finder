import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyClose)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyClose)
    };

    onKeyClose = (e) => e.code === 'Escape' && this.props.onClose();

    handleOverlayClick = e => e.currentTarget === e.target && this.props.onClose();

    render() {
        const { children } = this.props;

        return (
            createPortal(
            <div onClick={this.handleOverlayClick} className="Overlay">
                <div className="Modal">
                    {children}
                </div>
            </div>, modalRoot)
        );
    };
};
    
export { Modal };

Modal.propTypes = {
    children: PropTypes.object,
};