import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/img/logocar.png';

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('contain')}>
                    <div className={cx('header__left')}>
                        <NavLink to="/">
                            <img className={cx('logo')} src={logo} alt={'logo'} />
                        </NavLink>
                        <NavLink style={({isActive}) => {return {color: isActive ? '#fab915' : ''}}} className={cx('nav-bar')} to="/news">
                            Tin Tức
                        </NavLink>
                        <NavLink style={({isActive}) => {return {color: isActive ? '#fab915' : ''}}} className={cx('nav-bar')} to="/models" className={cx('nav-bar')} to="/about">
                            Giới Thiệu
                        </NavLink>
                        <NavLink style={({isActive}) => {return {color: isActive ? '#fab915' : ''}}} className={cx('nav-bar')} to="/models">
                            Xe BMW
                        </NavLink>
                        <NavLink style={({isActive}) => {return {color: isActive ? '#fab915' : ''}}} className={cx('nav-bar')} to="/help">
                            Trợ Giúp
                        </NavLink>
                        <NavLink style={({isActive}) => {return {color: isActive ? '#fab915' : ''}}} className={cx('nav-bar')} to="/contact">
                            Liên Hệ
                        </NavLink>
                    </div>
                    <div className={cx('header__right')}>
                        <Link className={cx('btn', 'btn__regiter')} to="/register">Đăng ký</Link>
                        <Link className={cx('btn', 'btn__login')} to="/login">Đăng nhập</Link>
                    </div>
                </div>
            </header>
        </>
    )    
}

export default Header;
