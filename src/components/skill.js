import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Skill = ({ title, content, image, order }) => (

      <div className={`flex items-center w-full flex-wrap tablet:flex-no-wrap ${order}`}>
        <div className="w-full tablet:w-1/3">
            <Img fluid={image} className="border-white border-8 w-full" />
        </div>
        <div className="w-full tablet:w-2/3">
            <p className="uppercase text-black tracking-widest font-bold text-3xl">{title}</p>
            <p>{content}</p>
        </div>
      </div>
  )
  
  Skill.propTypes = {
    skillOneImage: PropTypes.string,
  }
  
  Skill.defaultProps = {
    skillOneImage: ``,
  }
  
  export default Skill