import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { Outlet, useLocation } from 'react-router-dom';


function App() {
    let location = useLocation();
    return (
        <div className="App">
            <div>
                {location.pathname === '/login' || location.pathname==='/register' || location.pathname==='/admin' || <Header/>}
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                {location.pathname === '/login' || location.pathname==='/register' || location.pathname==='/create' || location.pathname==='/admin' || <Footer/>}
            </div>
        </div>
    );
}   

export default App;
