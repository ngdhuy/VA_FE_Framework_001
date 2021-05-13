const main = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Function A: Wait 3 second")
            resolve()
        }, 3000)
    }).then(() => {
        setTimeout(() => {
            console.log("Function B: Wait 1 second")
        }, 1000)
    }).then(() => {
        setTimeout(() => {
            console.log("Function C: Wait 2 second")
        }, 2000)
    })
}

main()