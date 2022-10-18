import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return  <footer className={cx('wapper')}>
        <div className={cx('wapper-child')}>
            <div className={cx('contain')}>
                <h6>BMW VIỆT NAM</h6>
                <h6>Hà Nội</h6>
                <p className={cx('contact-icon__p')}>Địa chỉ: Số 132 đường Lê Duẩn, P. Nguyễn Du, Q. Hai Bà Trưng, Tp. Hà Nội.</p>
                <h6>Đà Nẵng</h6>
                <p className={cx('contact-icon__p')}>Địa chỉ: Số 356 đường Điện Biên Phủ, Q. Thanh Khê, Tp. Đà Nẵng.</p>
                <h6>Tp. Hồ Chí Minh</h6>
                <p className={cx('contact-icon__p')}>Địa chỉ: Số 12 Đ. Mai Chí Thọ, An Lợi Đông, Quận 2, Thành phố Hồ Chí Minh.</p>
                <hr/>
                <p className={cx('contact-icon__p')}>Hotline: 0971.71.26.62</p>
                <p className={cx('contact-icon__p')}>Email: bmwvietnam.com.vn@gmail.com</p>
                <p className={cx('contact-icon__p')}>Website: bmwvietnam.com.vn</p>
            </div>
            <div className={cx('contain')}>
                <h6>LIÊN KẾT</h6>
                <p className={cx('contact-icon__p')}>Trang chủ</p>
                <p className={cx('contact-icon__p')}>Tin tức</p>
                <p className={cx('contact-icon__p')}>Giới thiệu</p>
                <p className={cx('contact-icon__p')}>Xe BMW</p>
                <p className={cx('contact-icon__p')}>Liên hệ</p>
            </div>
            <div className={cx('contain')}>
                <h6>GIỜ MỞ CỬA</h6>
                <span className={cx('contact-icon__p')}>Thứ hai - Thứ sáu : 8h - 18h</span><br/>
                <span className={cx('contact-icon__p')}>Thứ bảy : 8h - 18h</span><br/>
                <span className={cx('contact-icon__p')}>Chủ nhật : 8h - 18h</span><br/><br/>
                <h6>FOLLOW US</h6>
                <FontAwesomeIcon className={cx('contact-icon')} icon={faFacebook}/>
                <FontAwesomeIcon className={cx('contact-icon')} icon={faInstagram}/>
                <FontAwesomeIcon className={cx('contact-icon')} icon={faTiktok}/>
                <FontAwesomeIcon className={cx('contact-icon')} icon={faYoutube}/>
            </div>
        </div>       
    </footer>
}

export default Footer;