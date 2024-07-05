import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Merhaba, Ben Faruk</h2>
        <div className='prompt'>
          <p> HAKKIMDA KISMI </p>
          <EmailIcon/>
          <GitHubIcon/>
          <LinkedInIcon/>
        </div>
      </div>
      <div className='skills'>
          <h1>Yetenekler</h1>
           <ol className='list'>
           <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS</span>
            </li>

            <li className='item'>
            <h2>Back-End</h2>
            <span>Java, C#, NodeJS</span>
            </li>

            <li className='item'>
            <h2>Programlama Dilleri</h2>
            <span>JavaScript, Java, C#</span>
            </li>
           </ol>
      </div>
    </div>
  )
}

export default Home
