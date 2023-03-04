import { Component } from "react";
import PropTypes from 'prop-types';

import { Modal } from "components/Modal/Modal";

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

    handleImageClick = () => this.toggleModal();

    render(){
        const { largeImageURL, webformatURL, tags} = this.props;
        const { showModal } = this.state;

        return (
            <li className="ImageGalleryItem">
                <img src={webformatURL} alt={tags} onClick={this.handleImageClick} className="ImageGalleryItem-image" />
      
                {showModal &&
                <Modal onClose={this.toggleModal}>
                    <img src={largeImageURL} alt={tags} />
                </Modal>}
            </li>
        );
    };
};

export { ImageGalleryItem };

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
};