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
        "gatsby-plugin-tslint",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId,
                accessToken
            }
        }
    ]
}