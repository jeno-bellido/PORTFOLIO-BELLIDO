import React, { useState, useEffect } from 'react';
import './ResumeDialog.css';
import { saveAs } from 'file-saver';
import File from './resume.pdf';

const ResumeDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('resumeDialogLastShown');
    const now = new Date().getTime();
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

    if (!lastShown || (now - parseInt(lastShown)) > oneHour) {
      setShowDialog(true);
      localStorage.setItem('resumeDialogLastShown', now.toString());
    }
  }, []);

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleDownload = () => {
    saveAs(File, 'resume.pdf');
    setShowDialog(false);
  };

  if (!showDialog) return null;

  return (
    <div className="resume-dialog-overlay">
      <div className="resume-dialog">
        <h4>Download My Resume</h4>
        <p>Would you like to download my resume?</p>
        <div className="resume-dialog-buttons">
          <button onClick={handleDownload} className="download-button">
            Download Resume
          </button>
          <button onClick={handleClose} className="close-button">
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeDialog; 