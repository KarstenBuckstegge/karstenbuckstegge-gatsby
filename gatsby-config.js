const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
    dotenv.config();
}

const {
    spaceId,
    accessToken
} = process.env;

module.exports = {
    plugins: [
        "gatsby-transformer-remark",
        "gatsby-plugin-transition-link",
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId,
                accessToken
            }
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                typekit: {
                    id: 'qgf7sld'
                }
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/
                }
            }
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./static/favicon.png",
            }
        },
        "gatsby-plugin-tslint",
        "gatsby-plugin-sass"
    ]
}