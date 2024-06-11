import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({ show, type, onDismiss, children }) => {
  if (!show) return null;

  return (
    <div className={`alert alert-${type} justify-content-between gap-5 d-flex`}>
      {children}
      {onDismiss ? (
        <i
          className={'bi bi-x-lg'}
          onClick={onDismiss}
          style={{ cursor: 'pointer' }}
        ></i>
      ) : null}
    </div>
  );
};

export default Alert;
