import React from 'react'
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet'
import { Popup } from 'react-leaflet'
import ContentEditable from 'react-contenteditable'
import Parser from 'html-react-parser';
import './Popup.css'


const prefix = 'leaflet-popup-button'

const EditablePopup =()=>{
return(
    <>
    <Popup > <div style={{width:"900px",height:'300px'}} >d</div></Popup>
    </>
)
   
}



export default EditablePopup
