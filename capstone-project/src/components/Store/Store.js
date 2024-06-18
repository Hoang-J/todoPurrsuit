import React, { useState } from 'react'
import donate from '../../images/donate.png'
import './Store.css'

export default function Store() {
  // setting up the useState to make the modal appear and disappear on a button click
  const [donateClicked, setDonateClicked] = useState(false);
  // makes the donate modal pop up
  function handleClick() {
    setDonateClicked(true);
  }
  // makes the donate modal close (disappear)
  function handleClose() {
    setDonateClicked(false);
  }

  return (
  <>
    {/* Everything is in this div for organization sake, maybe later on can use it for flex properties */}
    <div className='storeBody'>
      {/* The background image of the store being applied from CSS */}
      <div className='store-inner-body'></div>
      {/* Div outlining the donate button */}
      <div className='item-donate-box'></div>
      {/* Donate button, once clicked on the donate modal will appear */}
       <img src={donate} id='donate' alt='donate' onClick={handleClick}/>
        {/* All the store items */}
        <div className='store-items'>
            {/* Youth white t-shirt */}
            <div className='item-box'>
              <stripe-buy-button
              buy-button-id="buy_btn_1PSPtU2NegYeTfbFhLWF04Wo"
              publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
              >
              </stripe-buy-button>
            </div>

            {/* Adult pink hoodie logo */}
            <div className='item-box'>
              <stripe-buy-button
              buy-button-id="buy_btn_1PSPuI2NegYeTfbF2iI8Liv5"
              publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
              >
              </stripe-buy-button>
            </div>

            {/* Adult orchid hoodie paw */}
            <div className='item-box'>
              <stripe-buy-button
              buy-button-id="buy_btn_1PSPuz2NegYeTfbFNO0YwhaO"
              publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
              >
              </stripe-buy-button>
            </div>

            {/* Tote bag logo */}
            <div className='item-box'>
              <stripe-buy-button
              buy-button-id="buy_btn_1PSPwB2NegYeTfbFXqzo79Ij"
              publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
              >
              </stripe-buy-button>
            </div>
         </div>

      {/* conditional rendering for the donate modal */}
      {donateClicked && (
        /* the below div determines the positioning of the modal */
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
          {/* the below div styles the modal itself */}
          <div className= "modal" style={{
              background: "lightskyblue",
              height: "50%",
              width: "30%",
              margin: "auto",
              padding: "2%",
              border: "10px solid lightyellow",
              borderRadius: "10px",
              "box-shadow": "0 0 5px 5px rgb(220, 220, 220)",
            }}> 
            {/* the below styles the contents within the modal */}
            <center>
              {/* The close button */}
              <button style={{
                    background: "pink",
                    width: "6%",
                    height: "10%",
                    border: "2px solid grey",
                    "border-radius": "50%",
                    "font-size": "12pt",
                    "box-shadow": "0 0 3px 3px white",
                    "font-family": "Gloria Hallelujah, cursive",
                    position: "absolute",
                    top: "23vh",
                    right: "60vh"}} 
                    onClick={handleClose}>
                    Close
              </button>
              <h1 style={{ "font-family": "Gloria Hallelujah, cursive" }}>Select your Charity: </h1>
              {/* Add some spacing between the buttons and the title*/}
              <br />

              {/* Alley Cat Allies Button */}
              <stripe-buy-button
              buy-button-id="buy_btn_1PSMjE2NegYeTfbFjhBloghL"
              publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
              >
              </stripe-buy-button>

              {/* Add some spacing between the buttons*/}
              <p></p>

              {/* Alley Cat Rescue Button */}
              <stripe-buy-button
              buy-button-id="buy_btn_1PSNE52NegYeTfbF2DROtjhq"
              publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
              >
              </stripe-buy-button>

              {/* Add some spacing between the buttons*/}
              <p></p>
              
              {/* ASCPA Button */}
              <stripe-buy-button
              buy-button-id="buy_btn_1PSNKt2NegYeTfbFT3StEIiB"
              publishable-key="pk_test_51PLFek2NegYeTfbF80e5GERAmZOxeJjguiGpTeGsdFs2lcY4VjqGGXcdnXpiTtdx4MitNuZjq7JkYNlrHyZcEMpP00QdrBFr9X"
              >
              </stripe-buy-button>
            </center>
          </div>
        </div>
      )}     
    </div>
  </>
  )
}
