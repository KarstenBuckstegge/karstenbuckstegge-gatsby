import React from "react"
import { StaticQuery, graphql } from "gatsby";

const Homepage = () => (
    <StaticQuery
        query={graphql`
            query ContentBlock {
                contentfulContentBlock {
                    title
                    subtitle
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        `}
    >
        {(contentBlock) => {
            const {
                contentfulContentBlock: {
                    title,
                    subtitle,
                    description: {
                        childMarkdownRemark: { html }
                    }
                }
            } = contentBlock;

            return (
                <section>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p dangerouslySetInnerHTML={{ __html: html }} />
                </section>
            );
        }}
    </StaticQuery>
);


export default Homepage;