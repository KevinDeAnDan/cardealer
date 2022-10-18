import styles from './News.module.scss';
import classNames from 'classnames/bind';
import avatar from '../../assets/img/avt1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faThumbsUp, faThumbsDown, faFlag, faComment } from '@fortawesome/free-solid-svg-icons';
import PieChart from '../../components/GlobalStyles/component/PieChart';

const cx = classNames.bind(styles);

function News() {
    return <div className={cx('wapper')}>
    <div className={cx('wapper-child')}>
        <h2 className={cx('title-h2')}>Bài viết nổi bật</h2>
        <p>Sáng tạo trong tiếp thị, chiến lược bán hàng và dịch vụ hậu bán hàng xuất sắc để duy trì thị phần, quảng bá hình ảnh đặc biệt và sang trọng của BMW tại Việt Nam.</p>
    </div>
    <hr/>
    <div className={cx('content')}> 
        <div className={cx('content-child')}>
            <div className={cx('posts')}>
                <div className={cx('post')}>
                    <div className={cx('info')}>
                        <img className={cx('avatar')} src={avatar} alt="Avatar"/>
                        <p className={cx('name')}>Vito Vincenzo</p>
                        <FontAwesomeIcon className={cx('option')} icon={faEllipsis}/>
                    </div>
                    <h5 className={cx('title-h5')}>Hiệu suất trên mọi cung đường</h5>
                    <p>BMW X1 cung cấp trọn bộ hiệu suất đỉnh cao như động cơ ba xi-lanh và bốn xi-lanh BMW TwinPower Turbo, hộp số Steptronic, hệ thống dẫn động bốn bánh cũng như phanh M Sport. Được trang bị các cải tiến như Apple CarPlay®, điện thoại có sạc không dây, Chức năng hiển thị thông tin trên kính chắn gió (HUD) và Màn hình điều khiển trung tâm dưới dạng 10,25 inch - cùng với hệ thống an toàn thông minh bao gồm Hỗ trợ đỗ xe Parking Assistant Plus, Hỗ trợ lùi cải tiến, BMW X1 đảm bảo bạn luôn đi đến đích một cách thoải mái và an toàn.</p>
                    <span className={cx('post-time')}>7 ngày trước</span>
                    <hr/>
                    <div className={cx('feed-back')}>
                        <div className={cx('feed-back__child')}>
                            <span>1</span>
                            <FontAwesomeIcon className={cx('feed-back__icon1')} icon={faThumbsUp}/>
                        </div>
                        <div className={cx('feed-back__child')}>
                            <span>9</span>
                            <FontAwesomeIcon className={cx('feed-back__icon2')} icon={faThumbsDown}/>
                        </div>
                        <div className={cx('feed-back__child')}>
                            <span>1</span>
                            <FontAwesomeIcon className={cx('feed-back__icon3')} icon={faComment}/>
                        </div>
                        <div className={cx('feed-back__child')} >
                            <span>0</span>
                            <FontAwesomeIcon className={cx('feed-back__icon4')} icon={faFlag}/>
                        </div>
                    </div>
                </div>
                <div className={cx('post')}>
                    <div className={cx('info')}>
                        <img className={cx('avatar')} src={avatar} alt="Avatar"/>
                        <p className={cx('name')}>Vito Vincenzo</p>
                        <FontAwesomeIcon className={cx('option')} icon={faEllipsis}/>
                    </div>
                    <h5 className={cx('title-h5')}>Hiệu suất trên mọi cung đường</h5>
                    <p>BMW X1 cung cấp trọn bộ hiệu suất đỉnh cao như động cơ ba xi-lanh và bốn xi-lanh BMW TwinPower Turbo, hộp số Steptronic, hệ thống dẫn động bốn bánh cũng như phanh M Sport. Được trang bị các cải tiến như Apple CarPlay®, điện thoại có sạc không dây, Chức năng hiển thị thông tin trên kính chắn gió (HUD) và Màn hình điều khiển trung tâm dưới dạng 10,25 inch - cùng với hệ thống an toàn thông minh bao gồm Hỗ trợ đỗ xe Parking Assistant Plus, Hỗ trợ lùi cải tiến, BMW X1 đảm bảo bạn luôn đi đến đích một cách thoải mái và an toàn.</p>
                    <span className={cx('post-time')}>7 ngày trước</span>
                    <hr/>
                    <div className={cx('feed-back')}>
                        <div className={cx('feed-back__child')}>
                            <span>1</span>
                            <FontAwesomeIcon className={cx('feed-back__icon1')} icon={faThumbsUp}/>
                        </div>
                        <div className={cx('feed-back__child')}>
                            <span>9</span>
                            <FontAwesomeIcon className={cx('feed-back__icon2')} icon={faThumbsDown}/>
                        </div>
                        <div className={cx('feed-back__child')}>
                            <span>1</span>
                            <FontAwesomeIcon className={cx('feed-back__icon3')} icon={faComment}/>
                        </div>
                        <div className={cx('feed-back__child')} >
                            <span>0</span>
                            <FontAwesomeIcon className={cx('feed-back__icon4')} icon={faFlag}/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={cx('data-rating')}>
                <PieChart/>
            </div>
        </div>
    </div>

</div>
}

export default News;