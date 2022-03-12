import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Skill from "../components/skill"
import Bio from "../components/bio"
import { motion } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import BackgroundImage from 'gatsby-background-image'




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

const IndexPage = ({data: { page, svgs }}) => {
  return (
    <>
      
      <SEO title="Home" />

      <motion.section variants={container} initial="hidden"  animate="visible" className="hero-container" >
        <motion.div className="content" variants={item} transition="easeInOut" >
          <Hero heading={page.heroTitle} subHeading={page.subHeroTitle} /> 
        </motion.div>
      </motion.section>

      <motion.section variants={container} animate="visible" className="container pt-10 skill-container">
        <motion.div className="content" variants={item} transition="easeInOut" >
          <Skill itemNumber='one' image={page.skillOneImage} icon={page.skillOneIcon} title={page.skillOneTitle} content={page.skillOneContent} order="flex-row" />
        </motion.div>
      </motion.section>

      <motion.section variants={container} animate="visible" className="container pb-10 skill-container">
        <motion.div className="content" variants={item} transition="easeInOut" >
          <Skill itemNumber='two' image={page.skillTwoImage} icon={page.skillTwoIcon} title={page.skillTwoTitle} content={page.skillTwoContent} order="flex-row-reverse" />
        </motion.div>
      </motion.section>
    
      <motion.section variants={container} animate="visible" className="relative w-full py-16 bg-bleu bio-container">
        
        <span className="absolute left-0 z-10 w-full h-2 bg-yello top-4"></span>

        <motion.div className="pl-32 scrolling-wrapper-flexbox" variants={item} transition="easeInOut" >

          {page.bio.map(block => (
            <div key={block.id}>
              {block.model.apiKey === 'bio_item' && <Bio year={block.year} location={block.location} content={block.content} />}
            </div>
          ))}
 
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
      backgroundImagePattern {
        alt
        url
        title
        width
        height
        fluid(imgixParams: {h: "1000", w: "1000", fit: "crop", crop: "bottom" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      displayPicture {
        alt
        url
        title
        width
        height
        fluid(imgixParams: {h: "400", w: "300", fit: "crop", crop: "center" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      skillTwoTitle
      skillTwoIcon {
        url
      }
      skillTwoContent
      bio {
        ... on DatoCmsBioItem {
          model {
            apiKey
          }
          year
          location
          content
        }
      }
    }
  }
`