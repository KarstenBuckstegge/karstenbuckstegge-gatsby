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
        "gatsby-plugin-tslint",
        "gatsby-plugin-sass"
    ]
}