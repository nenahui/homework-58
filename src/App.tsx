import Modal from './components/Modal/Modal';
import { useState } from 'react';

const App = () => {
  const [modalShow, setModalShow] = useState(false);

  const modalOpenAndClose = () => setModalShow(!modalShow);
  const modalContinue = () => alert('Clicked continue!');

  return (
    <div className={'d-flex justify-content-center align-items-center vh-100'}>
      <div className="row mx-auto">
        <button className={'btn btn-primary'} onClick={modalOpenAndClose}>
          Open modal
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
    </div>
  );
};

export default App;
