import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({ show, title, onClose, children }) => {
  return (
    <>
      <div
        className={'modal-backdrop show'}
        style={{ display: show ? 'block' : 'none' }}
      />
      <div
        className={'modal show'}
        style={{ display: show ? 'block' : 'none' }}
        onClick={onClose}
      >
        <div
          className={'modal-dialog modal-dialog-centered'}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={'modal-content'}>
            <div className={'modal-header'}>{title}</div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
