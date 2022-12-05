import React, {useState} from 'react'
import QRCode from 'qrcode'
import { useForm } from 'react-hook-form'


const QrcodeGenerator = () => {
    const [url, setUrl] = useState('')
    const [qrcode, setQrcode] = useState('')
    let username = 'philip'

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, (err, url) => {
            if (err) return console.error(err)
            setQrcode(url)
        })
    }


    const {
      control,
      reset,
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
    const onSubmit = (data:{}) => {
      setUrl(JSON.stringify(data))
      console.log(JSON.stringify(data))
      reset()
    };

  return (
    <div className='d-flex justify-content-between mt-4'>
      <form className='container w-50 form-bgColor ' onSubmit={handleSubmit(onSubmit)}>
            <h3>Schedule Appointment with Visitor Details</h3>
            <div className="mb-3">
              <label className='form-label'>Name</label>
              <input 
                className='form-control'
                placeholder='eg.Daryl Jones'
                type='text'
                {...register('name', {
                  required:true,
                  minLength: 2
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="errorMessage">Name is required.</p>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <p className="errorMessage">
                  Name should be valid
                </p>
              )}
              </div>
              <div className="mb-3">
              <label className='form-label'>Email</label>
              <input
                className='form-control'
                placeholder='eg. daryljones@gmail.com'
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorMessage">Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errorMessage">Email is not valid.</p>
              )}
            </div>
            <div className="mb-3">
              <label className='form-label'>Company Name</label>
              <input
                className='form-control'
                placeholder='eg.Microsoft Ghana' 
                type='text'
                {...register('company', {
                  required:true,
                  minLength: 2
                })}
              />
              {errors.company && errors.company.type === "required" && (
                <p className="errorMessage">Company Name is required.</p>
              )}
              {errors.company && errors.company.type === "minLength" && (
                <p className="errorMessage">
                  Company name should be valid
                </p>
              )}
              </div>
            <div className="mb-3">
              <label className='form-label'>Phone Number</label>
              <input
                className='form-control'
                placeholder='eg.0548012053'
                type="phone"
                {...register("phone", {
                  required: true,
                  minLength: 10
                })}
              />
              {errors.phone && errors.phone.type === "required" && (
                <p className="errorMessage">Phone number is required.</p>
              )}
              {errors.phone && errors.phone.type === "minLength" && (
                <p className="errorMessage">
                  Phone number is incomplete
                </p>
              )}
            </div>
            <input  
             type='host'
             value={username}
             className='d-none'
             {...register("host", {
            
            })}
             />
            <button className='btn btn-success m-auto' type="submit">Submit</button>
            </form>
            <div className='w-50 d-flex flex-column'>
                <h3>Click Generate to generate QrCode for your guest</h3>
                <button onClick={GenerateQRCode} className='btn btn-primary w-50 m-auto'>Generate</button>
                {qrcode && <>
                    <img src={qrcode} className='qrImage'  />
                    <a href={qrcode} download='qrcode.png' className='btn btn-success w-50 m-auto'>Download</a>
                </>}
            </div>
        

    </div>
  )
}

export default QrcodeGenerator
