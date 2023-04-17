import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo/Todo';
import Covid from './views/Covid/Covid';
import { Countdown, NewCountDown } from './views/Countdown/Countdown';
import Blog from './views/Blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import DetailBlog from './views/Blog/DetailBlog';
import AddNewBlog from './views/Blog/AddNewBlog';
import NotFound from './views/NotFoundPage/NotFound';
import YoutubeSearch from './views/Youtube/YoutubeSearch';

const App = () => {
  // let name = 'phong';
  let number = 2021;
  // let obj = { name: 'jay', age: 20 }

  //gia tri bien - funtion xu li bien khi co su thay doi - (destructuring) : giản lược cú pháp
  let [name, setName] = useState('phong')
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      title: 'xem ytb',
      type: 'phong'
    },
    {
      id: 'todo2',
      title: 'hoc bai',
      type: 'jay'
    }
  ]);

  useEffect(() => {
    console.log('>>>> run ')
  }, [])

  const handleEventClick = (event) => {
    // setName('Bi')//bat dong bo
    // console.log('click me', name)
    // console.log(address)
    // setName(address);
    //hook not merge state: 
    if (!address) {
      alert('misssing')
      return
    }
    let todo = {
      id: Math.floor((Math.random() * 1000) + 1),
      title: address,
      type: 'phong'
    }
    setTodos([
      ...todos, todo
    ])
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodo = todos
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodos(currentTodo)
  }

  const onTimesup = () => {
    // alert('times up')
  }
  //re-render
  //for -> for theo index, for each -> for theo phan tu => map -> tra array moi va k anh huong den du lieu
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Countdown onTimesup={onTimesup} />
          <span>-----------------------</span>
          <NewCountDown onTimesup={onTimesup} />
          <p>
            Hello world {name} in {number}
            <p>{JSON.stringify(obj)}
          </p> */}
          {/* <Covid /> */}
          {/* <input type="text" value="AAA" onClick={(event) => handleEventClick(event)} /> */}
          {/* <Todo
          todos={todos}
          title={'all todo'}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 'phong')}
          title={`todo filter`}
          deleteDataTodo={deleteDataTodo}
        />
        <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button> */}
        </header>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <Countdown onTimesup={onTimesup} />
            <span>---------------------</span>
            <NewCountDown onTimesup={onTimesup} />

          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={'All todos'}
              deleteDataTodo={deleteDataTodo}
            />
            <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
            <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
          <Route path="/secret">
            <YoutubeSearch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div >
    </Router>
  );
}

export default App;
