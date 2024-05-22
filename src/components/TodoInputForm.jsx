import { useEffect, useState } from 'react';
import style from '../css/TodoInputForm.module.css';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskLists } from '../store/taskStore';

const TodoInputForm = ({ title }) => {
  const tasksState = useSelector((state) => state.tasks);
  const tasks = tasksState.tasks;

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [todayDate, setTodayDate] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  const modalControl = () => {
    setModalStatus(!modalStatus);
  };
  const date = new Date();
  const todayDateStr = date.toISOString().slice(0, 10).split('-').join('');
  const todayDateNum = () => {
    setTodayDate(parseInt(todayDateStr, 10));
  };
  // 해야하는 부분 -> redux 적용
  const dispatchTasks = () => {
    dispatch(getTaskLists());
  };
  const dispatch = useDispatch();
  const getWeekRange = (date) => {
    const today = new Date(date);
    const dayOfWeek = today.getDay();
    const diffToMonday = (dayOfWeek + 6) % 7;
    const monday = new Date(today);
    const sunday = new Date(monday);

    const formatDate = (date) => {
      const numDate = parseInt(
        date.toISOString().slice(0, 10).split('-').join(''),
        10
      );
      return numDate;
    };

    monday.setDate(today.getDate() - diffToMonday);
    sunday.setDate(monday.getDate() + 6);

    return {
      monday: formatDate(monday),
      sunday: formatDate(sunday),
    };
  };
  const WEEK_START = getWeekRange(date).monday;
  const WEEK_END = getWeekRange(date).sunday;
  console.log('start : ', WEEK_START);
  console.log('end : ', WEEK_END);
  const sortTitle = (title, data) => {
    const sortedTasks = [];
    console.log(data);
    switch (title) {
      case 'Today':
        data.forEach((e) => {
          if (parseInt(e.date, 10) - todayDate === 0) {
            sortedTasks.push(e);
          }
        });
        console.log('Today area :', sortedTasks);
        return sortedTasks;
      // break;
      case 'Tomorrow':
        data.forEach((e) => {
          if (parseInt(e.date, 10) - todayDate === 1) {
            sortedTasks.push(e);
          }
        });
        console.log('Tomorrow area :', sortedTasks);
        return sortedTasks;
      // break;
      case 'This Week':
        data.forEach((e) => {
          console.log(e);
          if (WEEK_START <= e.date && WEEK_END >= e.date) {
            sortedTasks.push(e);
          }
        });
        console.log('This Week area :', sortedTasks);
        return sortedTasks;
      default:
        return data;
      // break;
    }
  };
  console.log('sortTitle : ', sortTitle(title, list));
  const url = 'http://localhost:4000/tasks';
  // console.log('task ==========', tasks);
  // const getTaskLists = async () => {
  //   try {
  //     const res = await fetch(url);
  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await res.json();
  //     // console.log('data', data);
  //     const sortedData = await sortTitle(title, data);
  //     setTask(sortedData);
  //   } catch (error) {
  //     console.error('Fetching tasks failed:', error);
  //   }
  // };
  const addValue = (event) => {
    setInputValue(event.target.value);
  };

  // console.log('monday : ', getWeekRange(date).monday);
  // console.log('sunday : ', getWeekRange(date).sunday);
  const add = async () => {
    // 모달 적용 테스트
    // modalControl();

    try {
      const newTask = {
        task: inputValue,
        clear: 'notClear',
        date: todayDate,
      };
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const addedTask = await res.json();
      setList((prevTasks) => [...prevTasks, addedTask]);
      setInputValue('');
    } catch (error) {
      console.error('Fetching tasks failed:', error);
    }
  };
  useEffect(() => {
    if (todayDate !== 0) {
      dispatchTasks();
    }
  }, [todayDate]);
  useEffect(() => {
    todayDateNum();
  }, []);
  useEffect(() => {
    setList(tasks);
  }, [tasks]);
  // useEffect(() => {
  //   if (todayDate !== 0) {
  //     getTaskLists();
  //   }
  // }, [todayDate]);
  return (
    <div className={style.taskLine}>
      <h3>{title}</h3>
      <label className={style.taskInput}>
        <button
          className={style.add}
          onClick={inputValue ? modalControl() : null}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <input
          type="text"
          placeholder="Add new task"
          onChange={(e) => addValue(e)}
        />
      </label>
      <ul className={style.todo}>
        {sortTitle(title, list).length !== 0 ? (
          sortTitle(title, list).map((item) => {
            return (
              <li className={style.list} key={item.id}>
                <label>
                  <input type="checkbox" name="" id="" value={inputValue} />
                </label>
                {item.task}
              </li>
            );
          })
        ) : (
          <li>Please Input Tasks</li>
        )}
      </ul>
      {/* <Modal className={modalStatus ? style.on : ''} /> */}
    </div>
  );
};

export default TodoInputForm;
