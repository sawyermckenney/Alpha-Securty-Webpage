import React from 'react';
import './supportBody.css';
import teamViewer from './images/team-viewer-logo.png';

function SupportBody() {
  return (
    <div className='body'>
      <a href='https://get.teamviewer.com/alphasec' target='_blank' rel='noopener noreferrer' className='download-link'>
        <img className='TeamViewer-Logo' src={teamViewer} alt='TeamViewer logo'/>
        <span>For support, contact your Alpha Security Tech and click here to download TeamViewer</span>
      </a>
    </div>
  );
}

export default SupportBody;
