import React from "react"
import { Shelf } from '../elements/Shelf'
import { Lights } from '../elements/Lights'
import Bubble from "../elements/bubble"

const Welcome = () => {
  return (
      <div className="Welcome">
          <Shelf />
          <Bubble />      
          <div className="ground"></div>
          <div className="background"></div>
      </div>
  )
}

export default Welcome