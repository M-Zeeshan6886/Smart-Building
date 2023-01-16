import React from 'react'
import './profilr.scss';
import topbarImage from '../../assets/SignUpImages/rssAT.svg';
import arrwdwn from '../../assets/SignUpImages/arrowdown.svg';
import PImage from '../../assets/SignUpImages/profileimage.svg';
import Dasboard from '../../assets/leftbar/dashboard.svg';
import Pimage from '../../assets/leftbar/pfile.svg';
import setting from '../../assets/leftbar/setting.svg';
const profile = () => {
  return (
    <>
    <div className='profile-container1'>
        <div className='profile-container1-content'>
        <div className='profile-container1-content-topbar'>
            <div className='profile-container1-content-topbar-content'>
                <img src={topbarImage} alt="logo" />
                <div className="profile-container1-content-topbar-content-right">
                    <div className='profile-image'>
                        <img src={PImage} alt="topbarimage" />
                    </div>
                    <img src={arrwdwn} alt="arrowdown" />
                </div>
            </div>
        </div>
        </div>
        </div>    
        <div className='profile-container2'>
            <div className='profile-container2-content'>
                <div className='profile-container2-content-left'>
                    <div className='profile-container2-content-left-content'>
                    <Leftbarcmpnt
                    text="Dashboard"
                    DasboardImg={Dasboard} 
                    />
                    <Leftbarcmpnt
                    text="Profile"
                    DasboardImg={Pimage} 
                    />
                    <Leftbarcmpnt
                    text="Setting"
                    DasboardImg={setting} 
                    />
                    </div>
                </div>
                <div className='profile-container2-content-right'></div>
            </div>
        </div>
    
    </>
  )
}

export default profile;


const Leftbarcmpnt=({DasboardImg,text})=>{
    return(
        <div className='leftcomponents'>
            <img src={DasboardImg} alt="dashboard-img" />
            <p>{text}</p>
        </div>
    )
}