import axios from 'axios'; 
import React, { useEffect, useState } from 'react'; 

const Day02A1 = (props) => { 
    const [data, setData] = useState('서버와 통신을 하자...'); 
    // 기본은 data가 전송 실패라고 가정 
    // useEffect(() => { 
    //     setTimeout(() => {
    //         // proxy에서 설정한 8080 포트에 서버 실행로 연결된다.
    //         axios.get('/api/hello').then((res) => {
    //             console.log(res);
    //             setData(res.data);
    //         })
    //     }, 1000);
        
    // }, [])

    const onClickGet = () => {
        axios.get('/api/hello').then((res) => {
            console.log(res);
            setData(res.data);
        })
    }

    const onClickPost = () => {
        axios.post('/api/hello').then((res) => {
            console.log(res);
            setData(res.data);
        })
    }

    const onClickPut = () => {
        axios.put('/api/hello').then((res) => {
            console.log(res);
            setData(res.data);
        })
    }

    const onClickDelete = () => {
        axios.delete('/api/hello').then((res) => {
            console.log(res);
            setData(res.data);
        })
    }

    return (<>
        <h1>{data}</h1>

        <button onClick={onClickGet}>GET 통신</button>
        <button onClick={onClickPost}>POST 통신</button>
        <button onClick={onClickPut}>PUT 통신</button>
        <button onClick={onClickDelete}>DELETE 통신</button>
    </>)
}

export default Day02A1;