function checkArguments(...args) {
    if (args.length === 0) {
        console.log("No Argument");
    } else if (args.length === 1){
        console.log(args[0])
    } else {
        console.log(args[0])
    }
}

checkArguments(...process.argv.slice(2));