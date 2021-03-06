import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Bio = ({ title, content, image }) => (
  

    <div className="w.full bg-black clear tablet:-mt-16 text-white">
        
        <div className="container py-8 tablet:py-24 tablet:flex">

          <div className="w-full tablet:w-1/6">
            <span className="timeline-bar h-full block w-12 bg-red-800 rounded-3xl"></span>
          </div> 

          <div className="w-full tablet:w-5/6 tablet:pl-8 bio-content before:empty-content">

            <h1 className="uppercase">{title}</h1>
            <div className="text-white" dangerouslySetInnerHTML={{ __html: content }} />
            
          </div>

        </div> 
        
    </div>
    
  )
  
  Bio.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  }
  
  export default Bio