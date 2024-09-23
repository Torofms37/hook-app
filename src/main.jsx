import ReactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { MainApp } from './09-useContext/MainApp'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { MemoHook } from './06-memo/MemoHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { Memorize } from './06-memo/Memorize'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { SimpleForm } from './02-useForm/SimpleForm'
// import { FromWithCustomHook } from './02-useForm/FormWithCustomHook'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/*<React.StrictMode> */}
    <MainApp />
    {/*</React.StrictMode>, */}
  </BrowserRouter>
)
