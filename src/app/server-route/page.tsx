import React from 'react'
import {serverSideFunction} from '../utils/server-utils'
import ImageSlider from '../components/ImageSlider';

function ServerRouteComponent() {
    const result = serverSideFunction();
  return (
    <div>
      Server Route Component {result}
       <ImageSlider/>
    </div>
  )
}

export default ServerRouteComponent
