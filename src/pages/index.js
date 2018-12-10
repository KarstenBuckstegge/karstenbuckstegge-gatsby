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
                        content {
                            content {
                                value
                                marks {
                                    type
                                }
                            }
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
                    description
                }
            } = contentBlock;

            return (
                <section>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>
                        {JSON.stringify(description)}
                    </p>
                </section>
            );
        }}
    </StaticQuery>
);


export default Homepage;