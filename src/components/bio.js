import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Bio = ({ title, content, image }) => (
  

    <div className="w.full bg-black clear mt-32 text-white">
        
        <div className="container tablet:flex">

          <div className="w-full tablet:w-1/3">
            <Img fluid={image.fluid} className="border-white border-8 w-full" alt={image.alt} key={image.title} />
          </div> 

          <div className="w-full tablet:w-2/3">

            <h1 className="uppercase">{title}</h1>
            <div className="text-white" dangerouslySetInnerHtml={{ __html: content }} />
            
          </div>

        </div> 
        
    </div>
    
  )
  
  Bio.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  }
  
  export default Bio