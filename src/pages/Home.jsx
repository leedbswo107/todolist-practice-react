import { Outlet, useNavigate } from 'react-router-dom';
import style from '../css/Home.module.css';
import { useState } from 'react';

const Home = () => {
  const [showOutlet, setShowOutlet] = useState(false);
  const navigate = useNavigate();

  const goToTasks = () => {
    setShowOutlet(true);
    navigate('/upcoming');
  };

  return (
    <section className={style.home}>
      <h2 hidden>Home</h2>
      {!showOutlet && (
        <div className={style.initial}>
          <h3>Wellcome to ToDoPy</h3>
          <p>
            A to-do app is a simple, user-friendly digital tool designed to help
            individuals and teams organize tasks and manage their daily
            activities efficiently. Users can create, edit, and prioritize
            tasks, set deadlines or reminders, categorize items, and track their
            progress, all within an intuitive and accessible interface. These
            apps are essential for improving productivity, reducing stress, and
            ensuring that important responsibilities are not forgotten.
          </p>
          <button className={style.goToTasks} onClick={goToTasks}>
            Go to Tasks
          </button>
        </div>
      )}
      {showOutlet && <Outlet />}
    </section>
  );
};

export default Home;
