import { useRef, useEffect, useState } from 'react';
import styles from './Models.module.scss';
import classNames from 'classnames/bind';
import bmw3 from '../../assets/img/bmw-3.png';
import bmw4 from '../../assets/img/bmw-4-green.png'

const cx = classNames.bind(styles);

function Models(props) {
    const btnRef = useRef();

    useEffect(() => {
        if (btnRef.current) {
            btnRef.current.focus();
        }
    }, []);

    const [click, SetClick] = useState(false);
    const handleClick = () => {
        SetClick(true);
    };

    return (
        <div className={cx('wapper')}>
            <div>
                <h2 className={cx('title')}>Các dòng xe BMW</h2>
            </div>
            <div className={cx('navbar')}>
                <button className={cx('car__btn')} ref={btnRef} onClick={handleClick}>
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
            {click && (
                <div className={cx('car__list')}>
                    <div className={cx('car__item')}>
                        <img className={cx('car__img')} src={bmw3} alt={bmw3}></img>
                        <h5 className={cx('car__h5')}>Dòng xe Sedan BMW 3 Series</h5>
                        <h6 className={cx('car__h6')}>XĂNG</h6>
                        <p className={cx('car__p')}>Hết hàng</p>
                    </div>
                    <div className={cx('car__item')}>
                        <img className={cx('car__img')} src={bmw4} alt={bmw4}></img>
                        <h5 className={cx('car__h5')}>BMW 4 Series Mui Trần</h5>
                        <h6 className={cx('car__h6')}>XĂNG</h6>
                        <p className={cx('car__p')}>Giá từ 3.399.000.000 VNĐ</p>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Models;
