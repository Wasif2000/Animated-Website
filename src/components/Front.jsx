import React from 'react'

function Front() {
  return (
    <div className='pt-20'>
        <div>
            {["we create","eye-opening","presentations"].map((item,index)=>{
                <h1 className='' key={index}>{item}</h1>
            })}
        </div>

    </div>
  )
}

export default Front