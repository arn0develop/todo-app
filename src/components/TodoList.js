import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  createTodo,
  IsActive,
  SetSelectedtodo,
  ActiveColor,
} from '../redux/todolist/todo-actions';
import './todoList.scss';

const Todolist = ({
  createTodo,
  IsActive,
  todos,
  selectedTodo,
  SetSelectedtodo,
  ActiveColor,
}) => {
  const [recordList, setRecordList] = useState('');
  const [activeList, setActiveList] = useState(0);
  const [passlist, setPassList] = useState(0);
  const [allist, setAllList] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 30) {
      setRecordList(value);
    }
  };

  const addTodo = () => {
    if (recordList === '') {
      alert('Enter Todo');
    } else if (recordList.length >= 30) {
      alert('Must length can be less than 30');
    } else {
      createTodo(recordList);
      setRecordList('');
    }
    setAllList(allist + 1);
  };

  const changeStatus = (id) => {
    let l = 0;
    let c = 0;
    ActiveColor('backcol');
    IsActive(id);
    todos.map((a, i) => {
      if (a.active === true) {
        l++;
        setActiveList(l);
      }
      if (a.active !== true) {
        setPassList(0 + todos.length * 1 - l);
      }
    });
    ActiveColor('backcol');
  };

  const filter = (e) => {
    const value = e.target.value;
    selectedTodo = [];
    SetSelectedtodo(selectedTodo);
    todos.map((a) => {
      if (value === 'All') {
        selectedTodo.push(a.payload);
        SetSelectedtodo(selectedTodo);
      } else if (value === 'Active' && a.active === true) {
        selectedTodo.push(a.payload);
        SetSelectedtodo(selectedTodo);
      } else if (value === 'DisActive' && a.active === false) {
        selectedTodo.push(a.payload);
        SetSelectedtodo(selectedTodo);
      }
    });
  };
  const listItem = selectedTodo.map((value, item) => {
    return <li key={item}>{value}</li>;
  });

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-4'>
          <div className='row mb-5'>
            <div className='col-6'>
              <input
                className='form-control mb-2 mr-sm-2 inp-todo'
                placeholder='Your Todo'
                type='text'
                value={recordList}
                onChange={handleChange}
              />
            </div>
            <div className='col-6'>
              <button
                type='buton'
                className='btn btn-primary mb-2'
                onClick={addTodo}
              >
                Submit
              </button>
            </div>
          </div>
          {todos?.map((value, item) => {
            return (
              <p
                key={item}
                className={value.classCol}
                onClick={() => changeStatus(value.id)}
              >
                {value.payload}
              </p>
            );
          })}
        </div>
        <div className='col-4'>
          <select onChange={filter} className='form-control'>
            <option>Filter</option>
            <option>All</option>
            <option>Active</option>
            <option>DisActive</option>
          </select>
          <ul className='mt-5'>{listItem}</ul>
        </div>
        <div className='col-4 '>
          <p> {allist} all </p>
          <p> {activeList} active </p>
          <p> {passlist} disactive </p>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = {
  createTodo: createTodo,
  IsActive: IsActive,
  ActiveColor: ActiveColor,
  SetSelectedtodo: SetSelectedtodo,
};

const mapState = (state) => {
  return {
    todos: state.listProd.todos,
    selectedTodo: state.listProd.selectedTodo,
  };
};
export default connect(mapState, mapDispatch)(Todolist);
