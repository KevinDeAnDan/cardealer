import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Login() {
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState(faEye)
    const [value, setValue] = useState()
    const handleToggle = () => {
        
        if(type === "password"){
            setType("text")
            setIcon(faEyeSlash)
        }
        else {
            setType("password")
            setIcon(faEye)
        }
    }
    return (
        <div className={cx('wapper')}>
            <div className={cx('wapper-child')}>
                <div className={cx('sign-in')}>
                    <h2>ĐĂNG NHẬP</h2>
                    <hr />
                    <form>
                        <div className={cx('contain')}>
                            <button className={cx('user')}>
                                <FontAwesomeIcon icon={faUser} />
                            </button>
                            <input className={cx('email')} type="email" placeholder='Email'/>
                        </div>
                        <div className={cx('contain')}>
                            <button className={cx('lock')}>
                                <FontAwesomeIcon icon={faLock} />
                            </button>
                            <input className={cx('password')} type={type} placeholder='Mật khẩu' onChange={(e) => setValue(e.target.value)}/>
                            {value && (
                                <span className={cx('password__display')} onClick={handleToggle}>
                                    <FontAwesomeIcon icon={icon}/>
                                </span>
                            )}
                        </div>
                        <span className={cx('forgot-password')}>Quên mật khẩu?</span>
                        <div className={cx('form-footer')}>
                            <Link className={cx('form-btn')}to="/register">Tạo tài khoản mới</Link>
                            <button className={cx('form-btn')}>Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
