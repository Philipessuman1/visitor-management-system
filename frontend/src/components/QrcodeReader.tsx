import React,{ useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router';


const QrcodeReader = () => {
  const [result, setResult] = useState("No result");
  const [data, setData] = useState('No result');
  const navigate = useNavigate()
 

  let scanResult = (data:any) => {
    try {
      if (data) {
        setResult(data?.text);
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
    
    
  
    console.log(data?.text)
      
  };

 

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h3>Scan your Qr Code to Login</h3>
      <QrReader
        scanDelay={500}
        // onError={handleError}
        // style={{ width: "100%" }}
        constraints={{facingMode: 'environment'}}
        onResult={scanResult}
        className='container-sm w-50 mt-0'
      />
      <p>{result}</p>
      <p>{data}</p>
    </div>
  )
}

export default QrcodeReader
