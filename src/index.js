import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import Home from './pages/home';
import About from './pages/about';
import Models from './pages/models';
import News from './pages/news';
import Login from './pages/account/login';
import Register from './pages/account/register';
import Contact from './pages/contact';
import CreateCar from './admin/createCars';
import Detail from './pages/models/detail';
import AdminCars from './admin/adminCars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="home" element={<Home />} />
                        <Route path="news" element={<News />} />
                        <Route path="about" element={<About />} />
                        <Route path="models" element={<Models />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="create" element={<CreateCar />} />
                        <Route path="models/:slug" element={<Detail />} />
                        <Route path="admin" element={<AdminCars />} />
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalStyles>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
