import React from 'react';

interface ModalButtons {
  type: string;
  label: string;
  onClick?: () => void;
}

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons: ModalButtons[];
}

const Modal: React.FC<Props> = ({
  show,
  title,
  onClose,
  buttons,
  children,
}) => {
  const modalFooterElements = () => {
    if (buttons) {
      return (
        <div className="modal-footer">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`btn btn-${button.type}`}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      );
    }
  };

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
            {modalFooterElements()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
