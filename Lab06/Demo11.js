// Promise

const func = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("OK done")
            reject("Have BIG error")
        }, 500)
    })

    return promise
} 

func().then(
    resolveData => {
        console.log("Resolve problem " + resolveData)
    },
    errorData => {
        console.log("Error: " + errorData)
    }
)