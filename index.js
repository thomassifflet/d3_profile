const { BlizzAPI } = require('blizzapi')
const { dotenv } = require ('dotenv').config();

async function main(){ 
    const api = new BlizzAPI({
        region: "eu",
        clientId: process.env.BLIZZ_CLIENT_ID,
        clientSecret: process.env.BLIZZ_CLIENT_SECRET

    })   
    const data = await api.query("/d3/profile/Hikiyo-2911/hero/")
    console.log(data)
/*
    if (process.argv.length < 3){
        console.log("no user profile was passed in")
        process.exit(1)
    }
    if (process.argv.length > 3) {
        console.log("too many arguments")
    }
*/
}


main()