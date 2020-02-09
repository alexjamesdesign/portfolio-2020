import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Skill from "../components/skill"
import { motion } from 'framer-motion'


const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = ({data: { page }}) => {
  return (
    <>
      
      <SEO title="Home" />

      <motion.section variants={container} initial="hidden"  animate="visible" className="hero-container" >
        <motion.div className="content" variants={item} transition="easeInOut" >
          <Hero heading={page.heroTitle} subHeading={page.subHeroTitle} />
        </motion.div>
      </motion.section>

      <motion.section variants={container} animate="visible" className="container skill-container">
        <motion.div className="content" variants={item} transition="easeInOut" >
          <Skill image={page.skillOneImage} icon={page.skillOneIcon} title={page.skillOneTitle} content={page.skillOneContent} order="flex-row" contentPadding="tablet:pl-16" />
        </motion.div>
      </motion.section>

      <motion.section variants={container} animate="visible" className="container skill-container">
        <motion.div className="content" variants={item} transition="easeInOut" >
          <Skill image={page.skillTwoImage} icon={page.skillTwoIcon} title={page.skillTwoTitle} content={page.skillTwoContent} order="flex-row-reverse" contentPadding="tablet:pr-16" />
        </motion.div>
      </motion.section>

    </>
  )
}

export default IndexPage
 
export const query = graphql`
  query IndexPageQuery {
    page: datoCmsHome {
      title
      slug
      heroTitle
      subHeroTitle
      skillOneImage {
        alt
        url
        title
        width
        height
        fluid(imgixParams: {h: "300", w: "210", fit: "crop", crop: "center" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      skillOneTitle
      skillOneIcon {
        url
        alt
        title
      }
      skillOneContent
      skillTwoImage {
        alt
        url
        title
        width
        height
        fluid(imgixParams: {h: "300", w: "210", fit: "crop", crop: "bottom" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }

      }
      skillTwoTitle
      skillTwoIcon {
        url
      }
      skillTwoContent
    }
  }
`