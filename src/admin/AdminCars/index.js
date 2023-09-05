import styles from './AdminCars.module.scss';
import classNames from 'classnames/bind';
import BasicExample from '../../components/globalstyles/component/Table';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AdminCars() {
    
    return <div className={cx('wapper')}>
        <h1 className={cx('admin-h2')}>ADMIN</h1>
        <Link to="/">
            <button className={cx('admin-btn')} >Trang chủ</button>
        </Link>
        <Link to="/create">
            <button className={cx('admin-btn')} >Thêm xe</button>
        </Link>
        <div>
            <BasicExample className={cx('table')}/>
        </div>
    </div>
}

export default AdminCars;

