import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Bio = ({ title, content }) => (
  

    <div className="w.full bg-black clear mt-32">
        
        <div className="container">
            <span className="uppercase text-white text-black tracking-widest font-bold text-3xl mb-0 pl-2 py-5 block w-full tablet:w-auto text-center tablet:text-left">{title}</span>
        
            <span className="text-white">{ content }</span>

        </div> 
        
    </div>
    
  )
  
  Bio.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  }
  
  export default Bio