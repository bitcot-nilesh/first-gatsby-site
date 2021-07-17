import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const AboutPage = () => {
    return (
        <Layout pageTitle="About Page">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <StaticImage 
                src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                alt="Test image first"
            />
        </Layout>
    )
}

export default AboutPage