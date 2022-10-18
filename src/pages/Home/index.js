import banner1 from '../../assets/img/car1.png'
import banner2 from '../../assets/img/car2.png'
import img1 from '../../assets/img/BMW-MY23-X7.jpg'
import img2 from '../../assets/img/BMW-MY22-.jpg'
import img3 from '../../assets/img/BMW-HP-X5-.jpg'
import img4 from '../../assets/img/BMW-HP-June.jpg'
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Home() {
    return <div className={cx('wapper')}>
        <div className={cx('container')}>
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
    </div>
}

export default Home;