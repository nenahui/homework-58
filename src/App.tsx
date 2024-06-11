import Modal from './components/Modal/Modal';
import { useState } from 'react';
import Alert from './components/Alert/Alert';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);

  const modalOpenAndClose = () => setModalShow(!modalShow);
  const alertOpenAndClose = () => setAlertShow(!alertShow);
  const modalContinue = () => alert('Clicked continue!');

  return (
    <div
      className={
        'd-flex justify-content-center align-items-center vh-100 flex-column'
      }
    >
      <div className="row mx-auto">
        <button className={'btn btn-primary mb-3'} onClick={modalOpenAndClose}>
          Open modal
        </button>
        <button className={'btn btn-primary'} onClick={alertOpenAndClose}>
          Open alerts
        </button>
        <Modal
          show={modalShow}
          title={'Order'}
          onClose={() => setModalShow(false)}
          buttons={[
            { type: 'primary', label: 'Continue', onClick: modalContinue },
            { type: 'danger', label: 'Close', onClick: modalOpenAndClose },
          ]}
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores,libero!
          </span>
        </Modal>
      </div>

      <div className="row mt-5">
        <Alert
          show={alertShow}
          type={'danger'}
          onDismiss={() => alertOpenAndClose()}
        >
          Lorem ipsum dolor sit amet.
        </Alert>
        <Alert show={alertShow} type={'info'}>
          Lorem ipsum dolor sit amet.
        </Alert>
      </div>
    </div>
  );
};

export default App;
