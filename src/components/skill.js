import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Triangle from "../shapes/triangle.inline.svg";
import Diamond from "../shapes/diamond.inline.svg";


const Skill = ({ title, content, image, icon, shape, itemNumber }) => (
  

      <div className="hello">
  
        {itemNumber === "one" && (
          <Triangle />
        )}

        {itemNumber === "two" && (
          <Diamond />
        )}
        
        <p className="w-full pt-2 text-3xl font-bold tracking-widest text-black">{title}</p>
      
        <p className="text-grey tablet:text-left">{content}</p>
       
      </div>
  )
  
  Skill.propTypes = {
    image: PropTypes.object,
  }
  
  Skill.defaultProps = {
    image: {},
  }
  
  export default Skill