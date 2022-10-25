import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
    return <div className={cx('wapper')}>
        <h2 className={cx('contact__h2')}>Liên hệ</h2>
        <div className={cx('contain')}>
            <div>
                <h5>BMW Hà Nội</h5>
                <p>Địa chỉ: Số 132 đường Lê Duẩn, P. Nguyễn Du, Q. Hai Bà Trưng, Tp. Hà Nội.</p>
            </div>
            <div>
                <h5>BMW Hà Nội</h5>
                <p>Địa chỉ: Số 132 đường Lê Duẩn, P. Nguyễn Du, Q. Hai Bà Trưng, Tp. Hà Nội.</p>
            </div>
            <div>
                <h5>BMW Hà Nội</h5>
                <p>Địa chỉ: Số 132 đường Lê Duẩn, P. Nguyễn Du, Q. Hai Bà Trưng, Tp. Hà Nội.</p>
            </div>
        </div>
        <div>
            <h5>BMW Hà Nội</h5>
            <span>Hotline: 0971.71.26.62</span><br/>
            <span>Email: bmwvietnam.com.vn@gmail.com</span><br/>
            <span>Website: bmwvietnam.com.vn</span><br/>
        </div>
    </div>
}

export default Contact;