import React from 'react'
import './Store.css'
import donate from '../../images/donate.png'

export default function Store() {
  return (
    <>
    <div className='storeBody'>
    <a href='https://buy.stripe.com/test_6oE5kM6n78VcbBK4gh' target='_blank'><img src={donate} id='donate' alt='donate'></img></a>
    </div>
    </>
  )
}
