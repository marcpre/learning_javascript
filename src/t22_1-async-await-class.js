class Foo {

    constructor() {

    }

    async func(s) {
        try {
            await console.log(s)
        } catch (e) {
            console.error(e.message);
        }
    }
}

module.exports = {
    Foo
};
