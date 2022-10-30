import styles from './News.module.scss';
import classNames from 'classnames/bind';
import avatar from '../../assets/img/avt1.jpg'
import avatar1 from '../../assets/img/quocdat.jpg'
import avatar2 from '../../assets/img/oma.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faThumbsUp, faThumbsDown, faFlag, faComment } from '@fortawesome/free-solid-svg-icons';
import PieChart from '../../components/GlobalStyles/component/PieChart';
import { useState } from 'react';

const cx = classNames.bind(styles);

function News() {
    
    const [click, setClick] = useState(19)
    const handleClick = () => {
        setClick(click + 1)
    }
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
                        <p className={cx('name')}>Phan Đình Đan</p>
                        <FontAwesomeIcon className={cx('option')} icon={faEllipsis}/>
                    </div>
                    <h5 className={cx('title-h5')}>HIỆU XUẤT TRÊN MỌI CUNG ĐƯỜNG</h5>
                    <p>BMW X cung cấp trọn bộ hiệu suất đỉnh cao như động cơ ba xi-lanh và bốn xi-lanh BMW TwinPower Turbo, hộp số Steptronic, hệ thống dẫn động bốn bánh cũng như phanh M Sport. Được trang bị các cải tiến như Apple CarPlay®, điện thoại có sạc không dây, Chức năng hiển thị thông tin trên kính chắn gió (HUD) và Màn hình điều khiển trung tâm dưới dạng 10,25 inch - cùng với hệ thống an toàn thông minh bao gồm Hỗ trợ đỗ xe Parking Assistant Plus, Hỗ trợ lùi cải tiến, BMW X1 đảm bảo bạn luôn đi đến đích một cách thoải mái và an toàn.</p>
                    <span className={cx('post-time')}>1 giờ trước</span>
                    <hr/>
                    <div className={cx('feed-back')}>
                        <div className={cx('feed-back__child')} onClick={handleClick}>
                            <span>{click}</span>
                            <FontAwesomeIcon className={cx('feed-back__icon1')} icon={faThumbsUp}/>
                        </div>
                        <div className={cx('feed-back__child')}>
                            <span>10</span>
                            <FontAwesomeIcon className={cx('feed-back__icon2')} icon={faThumbsDown}/>
                        </div>
                        <div className={cx('feed-back__child')}>
                            <span>20</span>
                            <FontAwesomeIcon className={cx('feed-back__icon3')} icon={faComment}/>
                        </div>
                        <div className={cx('feed-back__child')} >
                            <span>1</span>
                            <FontAwesomeIcon className={cx('feed-back__icon4')} icon={faFlag}/>
                        </div>
                    </div>
                </div>
                <div className={cx('post')}>
                    <div className={cx('info')}>
                        <img className={cx('avatar')} src={avatar1} alt="Avatar"/>
                        <p className={cx('name')}>Phạm Quốc Đạt</p>
                        <FontAwesomeIcon className={cx('option')} icon={faEllipsis}/>
                    </div>
                    <h5 className={cx('title-h5')}>CÁC GÓI DỊCH VỤ CỦA BMW</h5>
                    <p>Bạn và chiếc BMW được chăm sóc tốt tại Trung tâm Dịch vụ Ủy quyền BMW. Từ các gói dịch vụ dài hạn, chẳng hạn như BMW Service Inclusive, cho đến các dịch vụ hạn chế tiếp xúc, hay dầu động cơ BMW chính hãng và nhiều dịch vụ cá nhân hóa. Chúng tôi luôn có giải pháp tối ưu cho bạn - cho mọi dòng xe BMW, cho nhu cầu của bạn và cho nhiều dặm lái xe trọn vẹn trên hành trình phía trước.</p>
                    <span className={cx('post-time')}>2 ngày trước</span>
                    <hr/>
                    <div className={cx('feed-back')}>
                        <div className={cx('feed-back__child')}>
                            <span>1</span>
                            <FontAwesomeIcon className={cx('feed-back__icon1')} icon={faThumbsUp}/>
                        </div>
                        <div className={cx('feed-back__child')}>
                            <span>21</span>
                            <FontAwesomeIcon className={cx('feed-back__icon2')} icon={faThumbsDown}/>
                        </div>
                        <div className={cx('feed-back__child')}>
                            <span>11</span>
                            <FontAwesomeIcon className={cx('feed-back__icon3')} icon={faComment}/>
                        </div>
                        <div className={cx('feed-back__child')} >
                            <span>99</span>
                            <FontAwesomeIcon className={cx('feed-back__icon4')} icon={faFlag}/>
                        </div>
                    </div>
                </div>
                <div className={cx('post')}>
                    <div className={cx('info')}>
                        <img className={cx('avatar')} src={avatar2} alt="Avatar"/>
                        <p className={cx('name')}>Vũ Văn Doanh</p>
                        <FontAwesomeIcon className={cx('option')} icon={faEllipsis}/>
                    </div>
                    <h5 className={cx('title-h5')}>NHỮNG LỢI ÍCH ĐẶC QUYỀN CỦA BẠN</h5>
                    <p>1. Các gói dịch vụ đa dạng cho các nhu cầu khác nhau. <br/>
                        2.	Tiết kiệm chi phí so với các dịch vụ riêng lẻ đồng thời toàn bộ chi phí được kiểm soát và minh bạch. <br/>
                        3.	Chọn gói dịch vụ theo thời hạn từ 3 đến 6 năm, hoặc giới hạn số kilo mét từ 40,000 - 120,000*. <br/>
                        4.	Chăm sóc xe chuyên nghiệp bởi đội ngũ kỹ thuật viên BMW và phụ tùng BMW chính hãng. <br/>
                        5.	Tăng giá trị chuyển nhượng xe nhờ gói bảo dưỡng vẫn được duy trì ngay cả khi thay đổi chủ sở hữu.</p>
                    <span className={cx('post-time')}>3 tháng trước</span>
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
                <PieChart click={click} handleClick={handleClick}/>
            </div>
        </div>
    </div>

</div>
}

export default News;