import React, { useState } from 'react';
import './App.css';
import Data from './Data.js';

function EditElement(props) {
    const [rangevalue,setrangevalue]=useState('0');
    const [editelement,seteditelement]=useState(Data[0].cssval);
    const [index,setindex]=useState(0);
    var max;
    var min;
   
    const changerange=(event)=>{
        max=Data[index].max;
        min=Data[index].min;
        seteditelement(Data[index].cssval);
        var unit=Data[index].unit;
        setrangevalue(event.target.value);
        document.getElementById(props.id).style.filter = `${editelement}(${event.target.value}${unit})`;
        console.log(`${editelement}(${event.target.value})${unit}`);
        console.log(max,min);
        console.log(index);
        console.log(editelement);
    }
   
  return (
    <>
    <input type="range" name="" id="" min={min} max={max} value={rangevalue} onChange={changerange} />
        <div className="editelement">
            <button onClick={()=>{
                setindex(0);
            }}>Brightness</button>
            <button onClick={()=>{
                setindex(1);
            }}
            >Saturation</button>
            <button onClick={()=>{
                setindex(2);
            }}
            >Blur</button>
            <button onClick={()=>{
                setindex(3);
            }}
            >Hue</button>
            <button onClick={()=>{
                setindex(4);
            }}
            >Contrast</button>
            <button onClick={()=>{
                setindex(5);
            }}
            >Opacity</button>
            <button onClick={()=>{
                setindex(6);
            }}
            >GrayScale</button>
            <button onClick={()=>{
                setindex(7);
            }}
            >Sepia</button>
        </div>
    </>
  );
}

export default EditElement;