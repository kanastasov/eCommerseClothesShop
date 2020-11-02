// This file connects to the remore prisma DB and dives us the ability to query it with JS
const { Prisma } = require('prisma-binding');


const db = new Prisma ({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true
})

module.exports = db;