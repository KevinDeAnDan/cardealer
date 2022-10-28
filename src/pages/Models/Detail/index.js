import React, { useEffect, useState } from "react";
import axios from 'axios'
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import {useParams} from "react-router-dom";
import Iframe from 'react-iframe'
const cx = classNames.bind(styles);

function Detail() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    let {slug} = useParams();
    useEffect(() => {
        setLoading(true);
        
        axios.get(`http://localhost:9000/items/${slug}`)
            .then((res) => {        
                setData(res.data)
                console.log(res.data.video);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })


    }, [slug]);

    return <>
        <div>
        {loading && <div>Loading</div>}
        {!loading && (
            <div className={cx('wapper')}>
                <h2 className={cx('detail-h2')}>{data.name}</h2>
                <div className={cx('wapper-child')}>
                    <div className={cx('wapper-iframe')}>
                        <Iframe width="560" height="315" url={data.videoID} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                    </div>
                    <div>
                        <h5>ĐẠT MỤC ĐÍCH THEO PHONG CÁCH X</h5>
                        <p>Dù cho có thử thách gì đang cản bước tiến của bạn, {data.name} mới đều sẵn sàng vượt qua. Thiết kế thuôn về phía trước cùng với các đường nét tương tự như một chiếc coupé ngay lập tức hé lộ cá tính thể thao của xe. Nhờ hệ thống động lực lái xe hạng nhất, cấu trúc nhẹ nhàng tân tiến, trọng tâm thấp cũng như mức hiệu suất cao hơn – lúc này bạn sẽ chỉ còn tràn ngập cảm giác lái phấn khích tột độ trên cung đường tới đích.</p>
                    </div>
                </div>
            </div>
        )}
        </div>
        
    </>
}

export default Detail;