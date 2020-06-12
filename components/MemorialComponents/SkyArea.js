import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

const SkyAreaWrapper = styled.div`
  padding-bottom: 24.5%;
`

function getRandomNumber(min, max){
  return Math.random() * (max - min) + min;
}

function drawBoxes(ctx, locations, dimensions){
  const {height, width} = dimensions;
  ctx.clearRect(0,0,width,height)
  ctx.fillStyle = '#F6EA31';
  locations.forEach(location => {
    ctx.fillRect(location.x,location.y,10,10)
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
      setLocations([...locations, {x : getRandomNumber(0, width - 20), y: getRandomNumber(0, height - 20)}])
    }
  },[targetCard])

  useEffect(() =>{
    if(canvasRef.current){
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      drawBoxes(ctx, locations, dimensions);
    }else{
      console.log('Loading...')
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
