import TodayInputForm from './TodoInputForm';
import style from '../css/Today.module.css';
const Today = () => {
  return (
    <section className={style.today}>
      <h2>
        Today <span>8</span>
      </h2>
      <TodayInputForm title={'Today'} />
    </section>
  );
};

export default Today;
