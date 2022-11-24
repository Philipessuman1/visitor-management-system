import React, { useState } from 'react'
import QRCode from 'react-qr-code'




const QrcodeGenerator = () => {

     
        const [url, setUrl] = useState('')

        const downloadQRCode = (e: React.FormEvent) => {
            e.preventDefault()


            setUrl('')
        }

        const qrCode = (
            <QRCode 
                id='23'
                size={500}
                value={'https://google.com'}
                bgColor='white'
                fgColor='black'
                level=''
            />
        )


  return (
    <div>
        <form onSubmit={downloadQRCode}>
            <input 
                type='text'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder='https://example.com'
            />

            <button type='submit'>Download QR Code</button>
        </form>

        <div>{qrCode}</div>
      
    </div>
  )
}

export default QrcodeGenerator
