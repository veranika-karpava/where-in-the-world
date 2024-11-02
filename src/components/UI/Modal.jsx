import {  useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { spacePadding } from '../../styles/stylesLib';

const ModalWrapper = styled.dialog`
    background-color: ${({ theme }) => theme.backgroundComponent};
    border-radius: 4px;
    border: none;
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
    outline: none;
    padding: ${spacePadding.medium};
    width: 80%;
    max-width: 40rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 

    &::backdrop {
        background-color: ${({ theme }) => theme.backDropColor};
        opacity: 0.9;
    }
`
const Modal = ({ children, open }) => {
    const dialog = useRef();

    useEffect(() => {
        if(open) {
          dialog.current.showModal();
        } else {
          dialog.current.close();
        }
      }, [open])

    return createPortal(
        <ModalWrapper ref={dialog}>
             { open ? children : null }
        </ModalWrapper>,
        document.getElementById('modal')
    );
};

export default Modal;