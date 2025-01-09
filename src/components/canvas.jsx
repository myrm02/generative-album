import React, { useRef, useEffect } from 'react'
// import useCanvas from './useCanvas'

const Canvas = props => {

    const { draw } = props
    const canvasRef = useRef(null)
    
    useEffect(() => {
      
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      
      draw(context)
    }, [draw])
    
    return <canvas ref={canvasRef} {...props}/>

}
  
  export default Canvas

