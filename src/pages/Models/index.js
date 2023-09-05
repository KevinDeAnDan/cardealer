import { useRef, useEffect } from 'react';
import styles from './Models.module.scss';
import classNames from 'classnames/bind';
import Cars from './cars'
const cx = classNames.bind(styles);


function Models() {
    const btnRef = useRef();
    useEffect(() => {
        if (btnRef.current) {
            btnRef.current.focus();
        }
    }, []);


    return (
        <div className={cx('wapper')}>
            <div>
                <h2 className={cx('title')}>Các dòng xe BMW</h2>
            </div>
            <div className={cx('navbar')}>
                <button className={cx('car__btn')} ref={btnRef}>
                    Tất cả
                </button>
                <button className={cx('car__btn')}>3</button>
                <button className={cx('car__btn')}>
                    4
                </button>
                <button className={cx('car__btn')}>5</button>
                <button className={cx('car__btn')}>X</button>
                <button className={cx('car__btn')}>Z</button>
            </div>
            <hr />
            <div className={cx('car__list')}>
                <Cars/>
            </div>
        </div>
    );
}

export default Models;
