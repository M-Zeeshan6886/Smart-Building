import React, {useState} from 'react'
import './profilr.scss';
import topbarImage from '../../assets/SignUpImages/rssAT.svg';
import arrwdwn from '../../assets/SignUpImages/arrowdown.svg';
import PImage from '../../assets/SignUpImages/profileimage.svg';
import Dasboard from '../../assets/leftbar/dashboard.svg';
import Pimage from '../../assets/leftbar/pfile.svg';
import setting from '../../assets/leftbar/setting.svg';
import Cross from  '../../assets/popup/cross.svg';
import Profileimg from  '../../assets/popup/profilew.png';
import Editerw from  '../../assets/popup/whiteEditer.svg';
import EditerB from  '../../assets/popup/blueEditer.svg';


const profile = () => {
    const [popup, setPop]=useState(false);
const handleClickOpen=()=>{
    setPop(!popup);
}
const closePopup=()=>{
    setPop(false);
}
    return (
    <>
    <div className='sticky'>
    <div className='profile-container1'>
        <div className='profile-container1-content'>
        <div className='profile-container1-content-topbar'>
            <div className='profile-container1-content-topbar-content'>
                <img src={topbarImage} alt="logo" />
                <div className="profile-container1-content-topbar-content-right">
                    <div className='profile-image'>
                        <img src={PImage} alt="topbarimage" />
                    </div>
                    <img src={arrwdwn} alt="arrowdown" onClick={handleClickOpen} />
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        <br />
        <br />
        <br />
    
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
                <div className='profile-container2-content-right' >
                    <ProgressBar Tittle="FM Tickets"/>
                    <ProgressBar Tittle="Faults"/>
                    <ProgressBar Tittle="Faults"/>
                    <br/>
                    <ProgressBar Tittle="Assets Online"/>
                    <ProgressBar Tittle="Assets Online"/>
                    <ProgressBar Tittle="Assets Online"/>

                {popup?    <div className='profile-container2-content-right-popup'>
                        <div className='profile-container2-content-right-popup-content'>
                         <div className='profile-container2-content-right-popup-content-topEdit'>
                            <img src={Cross} alt="cross" onClick={closePopup} />
                            <div className='profile-container2-content-right-popup-content-topEdit-profileimg'>
                                <img src={Profileimg} alt="iges" />
                                <img src={Editerw} alt="editers" />
                            </div>
                            <div className='profile-container2-content-right-popup-content-topEdit-editBox'>
                                <img src={EditerB} alt="editers" />
                                <p>Edit profile</p>
                            </div>
                         </div>

                         <div className='profile-container2-content-right-popup-content-bottomEdit'>
                        
                        
                        
                         <PopupData 
                         Tittle="Display Name" 
                         Data="John Smith"
                         />
<PopupData 
                         Tittle="Office" 
                         Data="Example Company"
                         />

                         <PopupData 
                         Tittle="Position" 
                         Data="Executive Officer"
                         />

                         <PopupData 
                         Tittle="Email" 
                         Data="Example@email.com"
                         />

                         <PopupData 
                         Tittle="password" 
                         Data="************"
                         />

                         <PopupData 
                         Tittle="Phone Number" 
                         Data="+92123-456-786"
                         />
                         <PopupData 
                         Tittle="Address" 
                         Data="Hira Mandi Washington,4408"
                         />

                         </div>
                        </div>
                    </div>:""}
                </div>
            </div>
        </div>
    
    </>
  )
}

export default profile;


const Leftbarcmpnt=({DasboardImg,text})=>{
    return(
        <div className='leftcomponents'>
            <img src={DasboardImg} alt="dashboard-img"  />
            <p >{text}</p>
        </div>
    )
}


const PopupData=({Tittle,Data})=>{
    return(
        <div className='popup-data'>
            <div className='popup-data-content'>
                <p>{Tittle} </p>
                <h2>{Data} </h2>
                 </div>
        </div>
    )
}

const ProgressBar=({Tittle})=>{
    return(
        <div className='pbar-container'>
            <div className='pbar-container-content'>
                <div className='pbar-container-content-one'>{Tittle}</div>
                <div className='pbar-container-content-two'>
                    <div className='pbar-container-content-two-content'>
                    <div className='pbar-container-content-two-content-bar1'>
                        <div className='pbar-container-content-two-content-bar2'>
                            <div className='pbar-container-content-two-content-bar3'>
                                100%
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}