import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


function BasicExample() {
  useEffect(() => { 
    getProducts();
  }, []);

  const [contacts, setContacts] = useState([]); 
  const [loading, setLoading] = useState(false);

  
  const getProducts = async () => {
      try {
          const res = await axios.get('http://localhost:9000/product');
          setContacts(res.data);
          setLoading(true);
      } catch (err) {}
  };


  const removeData = (id, e) => {
    e.preventDefault()
    fetch(`http://localhost:9000/product/${id}`, {
        method: 'DELETE'
    }).then(res => {
        getProducts();
    }).catch (err => {

    }) 
  }
  

  return (
    <Table striped bordered hover >
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên siêu xe</th>
                <th>Nguyên liệu</th>
                {/* <th>Ảnh</th> */}
                <th>Video</th>
                <th>Giá bán</th>
                {/* <th>Sửa</th> */}
                <th>Xóa</th>
            </tr>
        </thead>
        <tbody>
            {loading &&
                contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{contact.name}</td>
                        <td>{contact.description}</td>
                        {/* <td>{contact.image}</td> */}
                        <td>{contact.videoID}</td>
                        <td>{contact.price} VNĐ</td>
                        {/* <td>
                            <Link to={`${contact._id}/edit`}
                                style={{
                                    padding: '5px 15px',
                                    backgroundColor: 'var(--primary)',
                                    border: 'none',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    color : '#000'
                                }}
                            >
                                Sửa
                            </Link>
                        </td> */}
                        <td>
                            <Link
                                style={{
                                    padding: '5px 15px',
                                    backgroundColor: 'var(--primary)',
                                    border: 'none',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    color : '#000'
                                }}
                                onClick={
                                    (e) => removeData(contact._id, e)
                                }
                            >
                                Xóa
                            </Link>
                        </td>
                    </tr>
                ))}
        </tbody>
    </Table>
  );
}

export default BasicExample;
