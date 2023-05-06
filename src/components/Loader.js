import React from 'react'
import '../stylesheets/loader.css'
import { GridLoader } from 'react-spinners';
const Loader = () => {
  return (
    <div className='Loading'>
           <GridLoader
        color={'burlywood'}
        loading={true}
        size={90}
        aria-label="Loading Spinner"
      />
    </div>
  )
}

export default Loader
