import axios from 'axios';
import React,{ useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify'



const QrcodeReader:React.FC = () => {

  const notify = () => toast('login successful')

  const [result, setResult] = useState<string>("No result");
  const navigate = useNavigate()
  
  let scanResult = (data:any ) => {
    try {
      if (data) {
        setResult(data?.text);
        axios.post('/addvisitor',data).then((response)=> console.log(response))
        .catch((err)=> console.log(err))
        notify()
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
    console.log(data?.text) 
  };

  return (
    <div className='d-flex justify-content-center align-items-center flex-column background'>
      <h3 className='mt-3 mb-0'>Scan Your Qr Code to Login</h3>
      <QrReader
        scanDelay={500}
        constraints={{facingMode: 'environment'}}
        onResult={scanResult}
        className='container-sm w-50 mt-0 '
      />
      <button className='btn btn-danger' onClick={() => navigate('/')}>Back</button>
      <p>{result}</p>
    </div>
  )
}

export default QrcodeReader
