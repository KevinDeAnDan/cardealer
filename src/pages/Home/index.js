import banner1 from '../../assets/img/car1.png'
import banner2 from '../../assets/img/car2.png'
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Home(props) {
    return <div className={cx('wapper')}>
        <div className={cx('container')}>
                <div className={cx('text')}>
                </div>
                <div className={cx('banner')}>
                    <img className={cx('banner1')} src={banner1} alt={banner1}/>
                    <img className={cx('banner2')} src={banner2} alt={banner2}/>
                </div>
        </div>
    </div>
}

export default Home;