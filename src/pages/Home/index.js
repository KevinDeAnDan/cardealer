import banner1 from '../../assets/img/car1.png'
import banner2 from '../../assets/img/car2.png'
import img1 from '../../assets/img/BMW-MY23-X7.jpg'
import img2 from '../../assets/img/BMW-MY22-.jpg'
import img3 from '../../assets/img/BMW-HP-X5-.jpg'
import img4 from '../../assets/img/BMW-HP-June.jpg'
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faRotate, faSackDollar, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);
function Home() {
    return <div className={cx('wapper')}>
        <div className={cx('container')}>
            <h2 className={cx('text')}>BAK - Bán cá khô</h2>
            <div className={cx('banner')}>
                <img className={cx('banner1')} src={banner1} alt={banner1}/>
                <img className={cx('banner2')} src={banner2} alt={banner2}/>
            </div>
        </div>
        <div className={cx('contain')}>
            <div className={cx('contain-imgs')}>
                <img className={cx('contain-img')} src={img1} alt={img1}/>
                <img className={cx('contain-img')} src={img2} alt={img2}/>
            </div>
            <div className={cx('contain-imgs')}>
                <img className={cx('contain-img')} src={img3} alt={img3}/>
                <img className={cx('contain-img')} src={img4} alt={img4}/>
            </div>
        </div>
        <div className={cx('owner')}>
            <h2 className={cx('owner-item__h2')}>Ownership starts here.</h2>
            <div className={cx('owner-items')}>
                <div className={cx('owner-item')}>
                    <FontAwesomeIcon className={cx('owner-item__icon')} icon={faRotate}/>
                    <h5 className={cx('owner-item__h5')}>Trade-In Value</h5>
                    <p className={cx('owner-item__p')}>Get the latest information on your vehicle’s trade-in value today.</p>
                    <Link className={cx('owner-item__link')}>Visit Black Book</Link>
                </div>
                <div className={cx('owner-item')}>
                    <FontAwesomeIcon className={cx('owner-item__icon')} icon={faCheckDouble}/>
                    <h5 className={cx('owner-item__h5')}>Trade-In Value</h5>
                    <p className={cx('owner-item__p')}>Get the latest information on your vehicle’s trade-in value today.</p>
                    <Link className={cx('owner-item__link')}>Visit Black Book</Link>
                </div>
                <div className={cx('owner-item')}>
                    <FontAwesomeIcon className={cx('owner-item__icon')} icon={faSackDollar}/>
                    <h5 className={cx('owner-item__h5')}>Trade-In Value</h5>
                    <p className={cx('owner-item__p')}>Get the latest information on your vehicle’s trade-in value today.</p>
                    <Link className={cx('owner-item__link')}>Visit Black Book</Link>
                </div>
                <div className={cx('owner-item')}>
                    <FontAwesomeIcon className={cx('owner-item__icon')} icon={faEnvelope}/>
                    <h5 className={cx('owner-item__h5')}>Trade-In Value</h5>
                    <p className={cx('owner-item__p')}>Get the latest information on your vehicle’s trade-in value today.</p>
                    <Link className={cx('owner-item__link')}>Visit Black Book</Link>
                </div>
            </div>
        </div>
    </div>
}

export default Home;