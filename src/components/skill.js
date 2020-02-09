import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Skill = ({ title, content, image, order, icon, contentPadding }) => (
  

      <div className={`flex items-center w-full flex-wrap tablet:flex-no-wrap ${order}`}>
        <div className="w-full tablet:w-1/3">
            <Img fluid={image.fluid} className="border-white border-8 w-full" alt={image.alt} key={image.title} />
        </div>
        <div className="w-full tablet:w-2/3 z-20">
          <div className="w-full flex items-center justify-center tablet:justify-left flex flex-wrap tablet:flex-no-wrap tablet:flex-no-wrap tablet:-ml-20 skill-order-odd">
            <img src={icon.url} className="bg-white p-3 w-32 h-32 w-full tablet:w-auto" alt={icon.alt} key={icon.title}/>
            <span className="uppercase text-black tracking-widest font-bold text-3xl mb-0 pl-2">{title}</span>
          </div>
            <p className={`${contentPadding} text-center tablet:text-left`}>{content}</p>
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