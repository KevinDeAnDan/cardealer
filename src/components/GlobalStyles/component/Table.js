import axios from 'axios';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function BasicExample() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
      setLoading(true);
      
      axios.get(`http://localhost:9000/product/${slug}`)
          .then((res) => {        
              setData(res.data)
              console.log(res.data.video);
              setLoading(false)
          })
          .catch(() => {
              setLoading(false)
          })


  }, [slug]);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên siêu xe</th>
          <th>N.Liệu</th>
          <th>Ảnh</th>
          <th>Video</th>
          <th>Giá bán</th>
          <th>Sửa</th>
          <th>Xóa</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.image}</td>
            <td>{data.videoID}</td>
            <td>{data.price}</td>
            <td>
              <button style={{padding: '5px 15px', backgroundColor: 'var(--primary)', border: 'none', borderRadius: '6px'}}>Sửa</button>
            </td>
            <td>
              <button style={{padding: '5px 15px', backgroundColor: 'var(--primary)', border: 'none', borderRadius: '6px'}}>Xóa</button>
            </td>
          </tr>
        </tbody>
      )}
    </Table>
  );
}

export default BasicExample;