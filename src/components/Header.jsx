import { Link, Outlet } from 'react-router-dom';
import style from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={style.hd}>
      <h1>Menu</h1>
      <button className={style.ham}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <label className={style.searchArea}>
        <button className={style.submit}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          type="text"
          className={style.searchInput}
          placeholder="Search..."
        />
      </label>
      <ul className={style.gnb}>
        <li>
          <span className={style.sub}>Tasks</span>
          <ul className={style.tasks}>
            <li>
              <Link to={'/upcoming'}>
                <i className="fa-solid fa-angles-right"></i>Upcoming
              </Link>
            </li>
            <li>
              <Link to={'/today'}>
                <i className="fa-solid fa-list"></i>Today
              </Link>
            </li>
            <li>
              <Link to={'/calendar'}>
                <i className="fa-regular fa-calendar"></i>Calendar
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <i className="fa-solid fa-note-sticky"></i>Sticky Wall
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <span className={style.sub}>Lists</span>
          <ul className={style.lists}>
            <li className={style.subject}>Work</li>
            <li className={style.subject}>Personal</li>
            <li className={style.subject}>Study</li>
          </ul>
          <a href="/">
            <i className="fa-solid fa-circle-plus"></i>Add new list
          </a>
        </li>
      </ul>
      <a href="/">
        <i className="fa-solid fa-gear"></i>Settings
      </a>
      <a href="/">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>Sign Out
      </a>
    </header>
  );
};

export default Header;
