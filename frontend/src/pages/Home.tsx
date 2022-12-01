import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdLogin, MdAdminPanelSettings,MdLogout } from 'react-icons/md'
import qrCodeImage from '../assets/qrCodeImage.webp'



export default function Home(){
  return (
    <div className="home_background position-relative">

      <div className="position-absolute container-fluid
       p-2 d-flex justify-content-between nav-background">
          <NavLink 
           to='host'
            style={{color:'white', textDecoration: 'none'}}
          >
            <BsFillPeopleFill />
            Host
          </NavLink>
          <NavLink 
           to='admin'
           style={{color:'white', textDecoration: 'none'}}
           >
           <MdAdminPanelSettings />
            Admin
          </NavLink>
      </div>

      <div className="position-absolute top-50 start-50 translate-middle m-2 p-2" >
        <div className="d-flex m-4">
        <h3 className="text-center fs-1 text">
          WELCOME TO <span>AMALITECH SERVICES</span> 
        </h3>
        </div>
        <div className="d-flex justify-content-around align-content-center  ">
          <button className="btn btn-outline logIn">
            <NavLink style={{color:'#E45218', textDecoration: 'none', fontWeight: 'bolder'}} to='login'> 
                Log In
                <MdLogin />
            </NavLink>
          </button>
          <button className="btn btn-outline logIn">
            <NavLink style={{color:'#E45218', textDecoration: 'none', fontWeight: 'bolder'}} to='logout'> 
                Log Out
                <MdLogout />
            </NavLink>
          </button>
        </div>
      </div>

      <div className="position-absolute bottom-0">
        <NavLink to='scanner'><img className="scanner-img" src={qrCodeImage} /></NavLink>
      </div>
      
    </div>
  )
}

