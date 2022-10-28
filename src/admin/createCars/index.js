import styles from './CreateCar.module.scss';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik'
const cx = classNames.bind(styles);

function CreateCar() {

    const formik = useFormik({
        initialValues: {
            name: "",
            type: "",
            image: "",
            video: "",
            price: ""
        },
        onSubmit: values => {
            console.log(values);
        }
    })
    
    // console.log(formik);
    return  <div className={cx('wapper')}>
        <form onSubmit={formik.handleSubmit} method="POST" action="/create" className={cx('wapper-child')}>
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
                    <TextField fullWidth label="Nhiên liệu" id="type" value={formik.values.type} onChange={formik.handleChange}/>
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
                    <TextField fullWidth label="Video ID" id="video" value={formik.values.video} onChange={formik.handleChange}/>
                </Box>
            </div>
            <div className={cx('info-input')}>
                <Box
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Giá cả" id="price" value={formik.values.price} onChange={formik.handleChange}/>
                </Box>
            </div>
            <button type="submit" className={cx('btn-car')}>Thêm xe</button>
        </form>
    </div>
}

export default CreateCar;