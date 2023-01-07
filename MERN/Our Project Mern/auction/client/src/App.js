import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';
import Ad from './views/Ad';
import AdForm from './views/AdForm';
import Nav from './components/Nav';
import Dashboard from './views/Dashboard';
// Actions
import { loadUser } from './actions/auth';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  // Load user
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/ads/:adId' element={<Ad />} />
          <Route path='/postad' element={<AdForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
