async function main(){    
    if (process.argv.length < 3){
        console.log("no user profile was passed in")
        process.exit(1)
    }
    if (process.argv.length > 3) {
        console.log("too many arguments")
    }
}


main()