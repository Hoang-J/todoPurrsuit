import React, { useState, useEffect } from 'react'

// function that "writes" out the text one letter at a time to mimic that video game dialog
function TypeWriter({text}) {
    // set up states for what letter is current being seen and at what index
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // using this hook lets the message run until the message is all typed out
    useEffect(() => {
        // will check if the current index is less than the message length to see to run function or not
        if(currentIndex < text.length) {
          // a function that slows down the time of what letter gets typed one after the other
           setTimeout(() => {
               setCurrentText(previousTextChar => previousTextChar + text[currentIndex])
              //  basically incrementing
               setCurrentIndex(previousCharIndex => previousCharIndex + 1)
              //  the speed in ms of when the next letter should appear one after the other
            }, 100) 
        }
        // useEffect will keep running as long as the currentIndex and text state is updating
    }, [currentIndex, text])

  return ( 
    <>
        <span>{currentText}</span>   
    </>
  )
}

export default TypeWriter