import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Skill = ({ title, content, image, order, icon }) => (
  

      <div className={`flex items-center w-full flex-wrap tablet:flex-no-wrap ${order}`}>
        <div className="w-full tablet:w-1/3">
            <Img fluid={image.fluid} className="border-white border-8 w-full" alt={image.alt} key={image.title} />
        </div>
        <div className="w-full tablet:w-2/3 z-10">
          <div className="w-full flex items-center -ml-20">
            <img src={icon} className="bg-white p-3 w-30" />
            <span className="uppercase text-black tracking-widest font-bold text-3xl mb-0 pl-2">{title}</span>
          </div>
            <p className="pl-16">{content}</p>
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