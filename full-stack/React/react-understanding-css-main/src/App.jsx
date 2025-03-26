import { useState } from 'react'
import './App.css'

export default function App() {


  return (
    <>


    <div className="container">
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
        <div className="box">Box 4</div>
        <div className="box">Box 5</div>
    </div>
    <div className="clear-box">
    <div className="float-box">Floating Box</div>
    <div className="text">This is some text that should not overlap the floating box.</div>
</div>

<div className="new_container">
  <div className="new_box"></div>
  <div className="new_box"></div>
  <div className="new_box"></div>
  <div className="new_box"></div>
  <div className="new_box"></div>
</div>

<div className="absol">
  <div className ="zindex"></div>
  <div className="blat"></div>
  <div className="relat"></div>
  <div className="relat"></div>
  <div className="relat"></div>
  <div className="relat"></div>
  <div className="relat"></div>
  <div className="relat"></div>
  <div className="relat"></div>
  <div className="relat"></div>
</div>

    </>
  )
}


