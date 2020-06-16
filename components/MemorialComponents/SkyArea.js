import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

import { getScreens } from '../../utils/getScreens'

const SkyAreaWrapper = styled.div`
  
  
  @media (max-width: ${getScreens('desktop')}){
    padding-bottom: 15%;
  }

  @media (max-width: ${getScreens('tablet')}){
    padding-bottom: 20%;
  }

  @media (max-width: ${getScreens('mobile')}){
    padding-bottom: 35%;
  }
`

function getRandomNumber(min, max){
  return Math.random() * (max - min) + min;
}


function drawBoxes(ctx, locations, dimensions){
  const {height, width} = dimensions;
  ctx.clearRect(0,0,width,height)
  ctx.fillStyle = '#F6EA31';
  ctx.shadowBlur = 10;
  ctx.shadowColor = "white";
  locations.forEach(location => {
    ctx.beginPath();
    ctx.moveTo(location.x, location.y);
    ctx.lineTo(location.x, location.y + 5);
    ctx.lineTo(location.x + 2, location.y + 2);
    ctx.lineTo(location.x + 5, location.y);
    ctx.lineTo(location.x + 2, location.y - 2);
    ctx.lineTo(location.x, location.y - 5);
    ctx.lineTo(location.x - 2 , location.y - 2);
    ctx.lineTo(location.x - 5, location.y);
    ctx.lineTo(location.x - 2, location.y + 2);
    ctx.lineTo(location.x, location.y + 5);
    ctx.closePath();
    ctx.fill();
 })
}


export default function SkyArea({targetCard}) {

  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  const [dimensions, setDimensions] = useState(undefined);
  const [locations, setLocations] = useState([]);
  

  useEffect(() =>{
    setDimensions({width: wrapperRef.current.clientWidth, height: wrapperRef.current.clientHeight})
  }, [wrapperRef])

  useEffect(() =>{
    if(dimensions){
      const {height, width} = dimensions;
      setLocations([...locations, {x : getRandomNumber(0, width - 5), y: getRandomNumber(0, height - 5)}])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[targetCard])

  useEffect(() =>{
    if(canvasRef.current){
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      drawBoxes(ctx, locations, dimensions);
    }
  })

  if(dimensions === undefined){
    return(
      <SkyAreaWrapper ref={wrapperRef}>
        <p>Loading...</p>
      </SkyAreaWrapper>
    )
  }
  return (
    <SkyAreaWrapper ref={wrapperRef}>
      <canvas 
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
      />
    </SkyAreaWrapper>
  )
}
