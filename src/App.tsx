import Modal from './components/Modal/Modal';
import { useState } from 'react';

const App = () => {
  const [modalShow, setModalShow] = useState(false);

  const modalClose = () => setModalShow(true);

  return (
    <div className={'d-flex justify-content-center align-items-center vh-100'}>
      <div className="row w-25 mx-auto">
        <button className={'btn btn-primary'} onClick={modalClose}>
          Open modal
        </button>
        <Modal
          show={modalShow}
          title={'Order'}
          onClose={() => setModalShow(false)}
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
