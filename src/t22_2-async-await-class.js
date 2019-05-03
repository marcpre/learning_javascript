async function main(){
    const {
        Foo
    } = require('./t22_1-async-await-class')
    let foo = new Foo()

    await foo.func("1. Before Promise")
    console.log("2. Promise")
    console.log("3. Later...");
}

main()
