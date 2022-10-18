import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);



function Register() {
    const [type1, setType1] = useState("password")
    const [icon1, setIcon1] = useState(faEye)
    const [value1, setValue1] = useState()
    const handleToggle1 = () => {
        
        if(type1 === "password"){
            setType1("text")
            setIcon1(faEyeSlash)
        }
        else {
            setType1("password")
            setIcon1(faEye)
        }
    }

    const [type2, setType2] = useState("password")
    const [icon2, setIcon2] = useState(faEye)
    const [value2, setValue2] = useState()
    const handleToggle2 = () => {
        
        if(type2 === "password"){
            setType2("text")
            setIcon2(faEyeSlash)
        }
        else {
            setType2("password")
            setIcon2(faEye)
        }
    }

    return <div className={cx('wapper')}>
        <div className={cx('wapper-child')}>
                <div className={cx('sign-in')}>
                    <h2>ĐĂNG KÝ</h2>
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
                            <input className={cx('password')} type={type1} placeholder='Mật khẩu' onChange={(e) => setValue1(e.target.value)}/>
                            {value1 && (
                                <span className={cx('password__display')} onClick={handleToggle1}>
                                    <FontAwesomeIcon icon={icon1}/>
                                </span>
                            )}
                        </div>
                        <div className={cx('contain')}>
                            <button className={cx('lock')}>
                                <FontAwesomeIcon icon={faLock} />
                            </button>
                            <input className={cx('password')} type={type2} placeholder='Nhập lại mật khẩu' onChange={(e) => setValue2(e.target.value)}/>
                            {value2 && (
                                <span className={cx('password__display')} onClick={handleToggle2}>
                                    <FontAwesomeIcon icon={icon2}/>
                                </span>
                            )}
                        </div>
                        <div className={cx('form-footer')}>
                            <Link className={cx('form-btn')} to="/login">Đăng nhập</Link>
                            <Link className={cx('form-btn')} to="/login">Đăng ký</Link>
                        </div>
                    </form>
                </div>
            </div>
    </div>
}

export default Register;