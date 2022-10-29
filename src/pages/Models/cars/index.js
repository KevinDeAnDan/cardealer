import React from "react";
import axios from 'axios'
import styles from './Cars.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);
const getProductCars = () => 
    axios.get("http://localhost:9000/product")
        .then((res) => res.data)

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null 
        }
         
    }
    componentDidMount() {
        if(this.state.data === null){
            getProductCars().then((res) => {
                this.setState({
                    data: res
                })
            })
        }
    }

    printData = () => {
        if(this.state.data !== null) {
            return this.state.data.map((value, key) => 
                (
                    <div className={cx('car__item')} key={key}>
                        <Link className={cx('car__link')} to={{pathname: `${value.slug}`}}>
                            <img className={cx('car__img')} src={value.image} alt={value.image}></img>  
                            <h5 className={cx('car__h5')}>{value.name}</h5>
                            <h6 className={cx('car__h6')}>{value.description}</h6>
                            <p className={cx('car__p')}>Giá từ {value.price} VNĐ</p>
                        </Link>
                    </div> 
                )
            )
        }
    }

    render() {
        console.log(this.state.data);

        return <>
            {this.printData()}
        </>
    }
    
}

export default Cars