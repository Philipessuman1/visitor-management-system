import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdLogin } from 'react-icons/md'
import qrCodeImage from '../assets/qrCodeImage.webp'

export default function Home(){
  return (
    <div className="home_background position-relative">

      <div className="position-absolute top-0 end-0 m-2">
        <Link to='/host'>
          <button type="button" className="btn btn-lg all-btn">
            <BsFillPeopleFill />
            Host
          </button>
        </Link>
      </div>

      <div className="position-absolute top-50 end
      start-50 translate-middle d-flex flex-column justify-content-center align-items-center" >
        <h3 className="text-center fs-1 text">
          WELCOME PLEASE SIGN IN HERE 
        </h3>
        <Link to='/login'>
          <button className="all-btn btn btn-lg "> 
            Visitor <br>
            </br> Sign In
            <MdLogin />
          </button>
        </Link>
      </div>
      
      <button type="button" className="btn btn-lg all-btn"><Link to='/admin'>Admin</Link></button>
      

      <div className="position-absolute end-0 top-50 ">
        <h3>Click to scan qrCode for Quick log in</h3>
        <Link to='/scanner'><img src={qrCodeImage} /></Link>
      </div>
      
      
    </div>
  )
}

