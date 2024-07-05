import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/farukozdemirr1/'><InstagramIcon/></a>
            <a href='https://github.com/Farukozdeemirrr'><GitHubIcon/></a>
            <a href='https://www.linkedin.com/in/mehmet-faruk-%C3%B6zdemir-b67bba226/'><LinkedInIcon/></a>
        </div>
        <p> &copy;opyright </p>
    </div>
  )
}

export default Footer