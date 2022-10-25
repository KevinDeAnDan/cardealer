import styles from './About.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function About() {
    return ( 
        <div className={cx('wapper')}>
            <div className={cx('wapper-child')}>
                <h2 className={cx('title-h2')}>BMW VIỆT NAM</h2>
                <div className={cx('title-text')}>
                    <p className={cx('title-text__p')}>Lời đầu tiên cho phép BMW Việt Nam được gửi tới quý khách hàng của BMW một lời chào trân trọng, lời chúc sức khỏe, an khang và thịnh vượng.BMW Việt Nam là thành viên của tập đoàn THACO là nhà nhập khẩu ủy quyền chính thức của tâp đoàn BMW tại Việt Nam, cung cấp xe hơi BMW  chính hãng và các dịch vụ liên quan đến xe BMW nhằm thỏa mãn nhu cầu sử dụng các thương hiệu cao cấp đang tặng trưởng tại Việt Nam.Việt Nam là một trong những thị trường đang tăng trưởng quan trong nhất của tập đoàn BMW trong khu vực. Vì vậy, chúng tôi đã khẳng định thêm vị thế của BMW trong trị trường bằng cách phát triển liên tục mạng lưới bán hàng và dịch vụ để đáp ứng nhu cầu hiện tại và tương lai. Liên tục tìm kiếm các cơ hội kinh doanh và tiềm năng phát triển, chúng tôi hiểu sự phát triển nhanh chóng của thị trường xe hơi tại Việt Nam và nắm bắt cơ hội của thị trường này.</p>
                    <p>Để phục vụ cho lượng khách hàng yêu thích thương hiệu BMW ngày càng tăng. BMW Việt Nam cung cấp các sản phẩm đa dạng từ xe 4 chỗ, phù hợp cho việc đi lại tiện nghi, phong cách và sang trọng (BMW 1, 3, 5, 7 series) đến những chiếc xe đa dụng đẳng cấp, phù hợp với nhiều phong cách sống khác nhau (X1,X2, X3,X4, X5, X6,X7). Ngoài ra, chúng tôi cũng mang đến sự lựa chọn tinh tế, và cá tính cho các khách hàng thông qua các dòng xe coupe, xe mui trần và xe roadster (4 series, 8 series Gran Coupé, 3GT, 5GT). BMW Việt Nam luôn nỗ lực hướng đến quyền lợi của khách hàng bằng cách mang đến những sản phẩm mới nhất, và dịch vụ sau bán hàng chuyên nghiệp nhất.</p>
                </div>
                <h5 className={cx('title-h5')}>Tầm nhìn, Sứ mệnh, Giá trị</h5>
                <div>
                    <h6 className={cx('title-h6')}>Tầm nhìn</h6>
                    <p>Sáng tạo trong tiếp thị, chiến lược bán hàng và dịch vụ hậu bán hàng xuất sắc để duy trì thị phần, quảng bá hình ảnh đặc biệt và sang trọng của BMW tại Việt Nam.</p>
                    <h6 className={cx('title-h6')}>Sứ mệnh phục vụ</h6>
                    <p>Để hiện thực hóa tầm nhìn trên chúng tôi luôn trung thành với những giá trị cốt lõi như: <br/>
                        – Uy tín: Thực hiện đúng và cao hơn những cam kết với khách hàng, đối tác <br/>
                        – Năng lực: Tập hợp, huấn luyện và phát triển năng lực nhân sự <br/>
                        – Chia sẻ: Chia sẻ lợi ích với đối tác, khách hàng, nhân sự và xã hội <br/>
                        – Hệ thống: Hệ thống quản trị khoa học, hiện đại và luôn đổi mới để hoàn thiện <br/>
                        – Trung: Trung thực và minh bạch trong các hoạt động, trung thành và theo đuổi mục tiêu tới cùng.
                    </p>
                    <h6 className={cx('title-h6')}>Giá Trị</h6>
                    <p>Vì tất cả những sản phẩm cũng như dịch vụ trên mà BMW Việt Nam chúng tôi đem tới cho khách hàng, chúng tôi tin tưởng rằng, quý khách hàng sẽ thật sự hài lòng khi sử dụng sản phẩm và dịch vụ của BMW tại Việt Nam.</p>
                    <h5 className={cx('title-h5')}>Đào tạo & Phát triển</h5>
                    <p>Mục đích Thaco cam kết huấn luyện và phát triển cho toàn thể nhân viên nhằm đạt được mục tiêu kinh doanh và làm lớn mạnh tiềm năng nhân sự qua việc tạo ra nuôi dưỡng một môi trường làm việc năng động, sáng tạo, chuyên nghiệp.Tuyên bố cam kết.BMW Việt NAm cam kết tiếp tục đào tạo và phát triển nhân viên trong cả kỹ năng nghề nghiệp và trong việc huấn luyện lâu dài cho sự phát triển cá nhân. Mỗi Nhân viên BMW là một tài sản quí giá nhất của công ty và hỗ trợ phát triển là điều quan trọng trong việc đạt được thành tích của công ty.</p>
                    <span>Chúc quý khách hàng của BMW gặp nhiều may mắn và thành công!</span>
                    <p>Trân trọng cám ơn!</p>
                </div>
            </div>
        </div> 
    );
}

export default About;