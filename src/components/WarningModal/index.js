import React from 'react'
import './style.css'

const WarningModal = ({ warningtext, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="warningText">{warningtext}</p>
        <div onClick={onClose} className="button-x">
          Close
        </div>
      </div>
    </div>
  )
}

export default WarningModal
