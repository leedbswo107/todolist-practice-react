import { useState } from 'react';
import style from '../css/Modal.module.css';
const Modal = () => {
  const [modalStatus, setModalStatus] = useState(true);
  const cancel = () => {
    setModalStatus(false);
  };
  return (
    <div className={`${style.modal} ${modalStatus ? style.on : ''}`}>
      <div className={style.modalCon}>
        <p>tasks area</p>
        <label className={style.dataInput}>
          <input type="date" name="dueDate" id="dueDate" />
          <select name="category" id="category">
            <option value="work">work</option>
            <option value="work">work</option>
            <option value="work">work</option>
            <option value="work">work</option>
            <option value="work">work</option>
          </select>
        </label>
        <div className={style.btnArea}>
          {/* <button onClick={submit}>확인</button> */}
          <button onClick={cancel}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
