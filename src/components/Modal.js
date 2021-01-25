import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ children, show, handleShow }) =>
  show
    ? ReactDOM.createPortal(
        <Wrapper>
          <div className="modal-overlay" onClick={handleShow} />
          <div className="modal-wrapper" aria-modal aria-hidden role="dialog">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleShow}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </Wrapper>,
        document.body
      )
    : null;

const Wrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 1000;
    opacity: 0.9;
  }

  .modal-wrapper {
    position: fixed;
    top: 1em;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    height: 85vh;
    max-width: 1200px;
    padding: 2rem;
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
  }

  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.3;
    cursor: pointer;
    border: none;
  }

  button {
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    padding: 0.3rem 1rem;
    margin-left: 0.5rem;
  }

  .button-default {
    background: #247ba0;
    color: #fff;
  }
`;

export default Modal;
