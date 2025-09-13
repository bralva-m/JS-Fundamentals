function checkArguments(...args) {
    if (args.length === 0) {
        console.log("No Argument");
    } else if (args.length === 1){
        console.log("Argument found")
    } else {
        console.log("Arguments found")
    }
}

checkArguments(...process.argv.slice(2));
