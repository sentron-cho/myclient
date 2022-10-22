import axios from 'axios'; 
import React, { useEffect, useState } from 'react'; 

const Request = (props) => { 
    const [data, setData] = useState('서버와 통신을 하자...'); 
    // 기본은 data가 전송 실패라고 가정 
    useEffect(() => { 
        setTimeout(() => {
            // proxy에서 설정한 8080 포트에 서버 실행로 연결된다.
            axios.get('/api/hello').then((res) => {
                console.log(res);
                setData(res.data);
            })    
        }, 1000);
        
    }, [])

    return (<h1>{data}</h1>); // 값에 따라 전송 실패 or 전송 성공 출력 
}

export default Request;