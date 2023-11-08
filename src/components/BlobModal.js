/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// motion design
import { AttentionSeeker } from 'react-awesome-reveal';

import Blobs from 'images/blobs.png';

import { ModalButton, BlobImage, BlobText, BlobGroup, ModalWrapper, CloseButton, ButtonIcon } from './BlobModalStyles';

const BlobModal = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const getTransformStyle = (width) => {
    if (width >= 1024) {
      return 'translate(70%, -20%)';
    } else if (width >= 668) {
      return 'translate(-40%, +120%)';
    } else {
      return 'translate(-30%, -40%)';
    }
  };
  const customStyles = {
    overlay: {
      background: 'none',
      position: 'initial'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      border: 'none',
      background: 'none',
      transform: getTransformStyle(windowWidth)
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true)
  };
  const closeModal = () => {
    setIsOpen(false)
  }
  Modal.setAppElement('#root');
  return (
    <>
      <ModalButton
        type="button"
        onClick={openModal}>
            Midjourney
      </ModalButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldReturnFocusAfterClose={false}
        contentLabel="Info Modal">
        <ModalWrapper>
          <CloseButton type="button" onClick={closeModal} aria-label="Icon-only Button">
            <ButtonIcon xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></ButtonIcon>
          </CloseButton>
          <AttentionSeeker effect="pulse">
            <BlobGroup>
              <BlobText>All the images on this website were created using Midjourney, for example!</BlobText>
              <BlobImage src={Blobs} alt="blobs" />
            </BlobGroup>
          </AttentionSeeker>
        </ModalWrapper>
      </Modal>
    </>
  )
}

export default BlobModal;