const sdk=require('matrix-js-sdk')

const client=sdk.createClient({
    baseUrl:"https://matrix.org",
    accessToken: "syt_dmFyYWQ0NTQ2_vtPeXzqmWUrHHsJZMDSa_2yRWUF",
    userId: "@varad4546:matrix.org"

})

module.exports=client