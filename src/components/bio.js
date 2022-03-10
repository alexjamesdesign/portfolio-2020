import React from "react"
import PropTypes from "prop-types"


const Bio = ({ year, location, content }) => (

      <div className="relative pt-16">

          <span className="absolute top-0 left-auto block w-6 h-12 bg-red-800 timeline-bar rounded-3xl"></span>
          
          <div className="w-full tablet:w-5/6 bio-content before:empty-content">

            <p className="p-0 mb-1 uppercase h1">{year}</p>
            <p className="mb-3 h2">{location}</p>
            <div className="text-white" dangerouslySetInnerHTML={{ __html: content }} />
            
          </div>
          
      </div>

  )
  
  Bio.propTypes = {
    year: PropTypes.string,
    location: PropTypes.string,
    content: PropTypes.string,
  }
  
  export default Bio