import React from 'react'

function Modal() {
    function nextLevel() {

    }
  return (
    <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "z-index": "2"
    }}>
        <div style={{
            background: "white",
            height: 150,
            width: 240,
            margin: "auto",
            padding: "2%",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: "2px solid black",
        }}> 
            Level Complete!
            <button onClick={nextLevel}>Next Level</button>
        </div>
    </div>
  )
}

export default Modal