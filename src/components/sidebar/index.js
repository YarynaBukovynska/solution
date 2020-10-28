import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import Table from './Table';
import './styles.css';
import { loadData } from '../store/actions'
import { formattingDay } from '../utils'

const Sidebar = ({ markers }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState(new Date());
  const dateChangeHandler = useCallback((date) => {
    const formattedDay = formattingDay(date);
    dispatch(loadData(formattedDay));
    setDate(date);
    }, [dispatch]
  );
  return (
    <aside style={{
      width: expanded ? '40%' : '50px'
    }}>
      <div>
        <div onClick={() => setExpanded(state => !state)}>
          {
            expanded
              ? <GrFormPrevious size='30px' />
              : <GrFormNext size='30px' />

          }
        </div>
      </div>
      {
        expanded && (
          <div className='body'>
            <div>
              <DatePicker selected={date} onChange={dateChangeHandler}/>
              <span>Оберіть дату</span>
            </div>
            <Table markers={markers} />
          </div>
        )
      }
    </aside>
  )
};

export default Sidebar;
