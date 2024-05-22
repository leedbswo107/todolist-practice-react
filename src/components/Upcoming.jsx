import { useState } from 'react';
import style from '../css/Upcoming.module.css';
import TodoInputForm from './TodoInputForm';
import Modal from './Modal';
const Upcoming = () => {
  return (
    <section className={style.upcoming}>
      <h2>
        Upcoming <span>18</span>
      </h2>
      <div className={style.test}>
        <TodoInputForm title={'Today'} />
      </div>
      <div className={style.test}>
        <TodoInputForm title={'Tomorrow'} />
        <TodoInputForm title={'This Week'} />
      </div>
      <Modal />
    </section>
  );
};

export default Upcoming;
