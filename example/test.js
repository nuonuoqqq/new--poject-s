function readonly(target, name, descriptor) {
    console.log(target, name, descriptor)
    return descriptor;
}

@readonly function handle() {
    console.log('hello world')
}