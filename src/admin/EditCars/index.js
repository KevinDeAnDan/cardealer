import styles from './EditCars.module.scss';
import classNames from 'classnames/bind';
import BasicExample from '../../components/GlobalStyles/component/Table';

const cx = classNames.bind(styles);

function EditCars() {
    return <div className={cx('wapper')}>
        <h1 className={cx('admin-h2')}>ADMIN</h1>
        <BasicExample/>
    </div>
}

export default EditCars;

