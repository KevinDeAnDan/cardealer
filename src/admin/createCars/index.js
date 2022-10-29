import styles from './CreateCar.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function CreateCar() {

    const navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            image: "",
            price: "",
            videoID: "",
        },
        onSubmit: values => {
            console.log(values);    
            axios.post(`http://localhost:9000/product/create`, {
                name: formik.values.name,
                description: formik.values.description,
                image: formik.values.image,
                price: formik.values.price,
                videoID: formik.values.videoID,
            })
            .then(res => {
                console.log(res.data);
                navigate('/models');
            })
        }
    })


    return  <div className={cx('wapper')}>
        <form onSubmit={formik.handleSubmit} method="POST" action="/models" className={cx('wapper-child')}>
            <h2 className={cx('title')}>Đăng siêu xe</h2>
            <div className={cx('info-input')}>
                <Box
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Tên siêu xe" id="name" value={formik.values.name} onChange={formik.handleChange}/>
                </Box>
            </div>
            <div className={cx('info-input')}>
                <Box
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Nhiên liệu" id="description" value={formik.values.description} onChange={formik.handleChange}/>
                </Box>
            </div>
            <div className={cx('info-input')}>
                <Box
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Link ảnh" id="image" value={formik.values.image} onChange={formik.handleChange}/>
                </Box>
            </div>
            <div className={cx('info-input')}>
                <Box
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Video ID" id="videoID" value={formik.values.videoID} onChange={formik.handleChange}/>
                </Box>
            </div>
            <div className={cx('info-input')}>
                <Box
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Giá bán" id="price" value={formik.values.price} onChange={formik.handleChange}/>
                </Box>
            </div>
            <button type="submit" className={cx('btn-car')}>Thêm xe</button>
        </form>
    </div>
}

export default CreateCar;