import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Cart from './components/Cart';
import Form from './components/Form';
import Series from './components/Series';
import Tareas from './components/Tareas';
import Inputsub from './components/Inputsub';

import Counter from './components/Counter'
import Getdata from './components/Getdata'
import Test from './components/Test'
import Todo from './components/Todo';
import Reducer from './components/Reducer';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reducer />
  </React.StrictMode>,
)
