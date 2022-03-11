import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { LazyMotion, domAnimation, motion } from 'framer-motion'

import Triangle from "../shapes/triangle.inline.svg";
import TriangleStripe from "../shapes/trianglestripe.inline.svg";

import Diamond from "../shapes/diamond.inline.svg";
import DiamondStripe from "../shapes/diamondstripe.inline.svg";

const shapeMotionLeft = {
  rest: {
    x: 0,
    transition: {
      duration: 0.5, type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    x: 10,
    transition: {
      duration: 0.5, type: "tween",
      ease: "easeOut"
    }
  }
};

const shapeMotionRight = {
  rest: {
    x: 0,
    transition: {
      duration: 0.5, type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    x: -10,
    transition: {
      duration: 0.5, type: "tween",
      ease: "easeOut"
    }
  }
};

const Skill = ({ title, content, image, icon, shape, itemNumber }) => (

      <motion.section 
        className="skill"
        initial="rest" whileHover="hover" animate="rest"
      >
  
        {itemNumber === "one" && (
          <div className="relative h-20 shape-container">
            <motion.div className="absolute left-0" variants={shapeMotionLeft}>
              <TriangleStripe />
            </motion.div>
            <motion.div className="absolute left-0" variants={shapeMotionRight}>
              <Triangle />
            </motion.div>
            
          </div>
        )}

        {itemNumber === "two" && (
          <div className="relative h-20 shape-container">
            <motion.div className="absolute left-0" variants={shapeMotionLeft}>
              <DiamondStripe />
            </motion.div>
            <motion.div className="absolute left-0" variants={shapeMotionRight}>
              <Diamond />
            </motion.div>
            
          </div>
        )}
        
        <p className="w-full pt-2 text-3xl font-bold tracking-widest text-black">{title}</p>
      
        <p className="text-grey tablet:text-left">{content}</p>
       
      </motion.section>
  )
  
  Skill.propTypes = {
    image: PropTypes.object,
  }
  
  Skill.defaultProps = {
    image: {},
  }
  
  export default Skill