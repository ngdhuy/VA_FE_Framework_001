// Demo call-back hell

const func = () => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log("OK #4")
                }, 1000)
                console.log("OK #3")
            }, 1000)
            console.log("OK #2")
        }, 1000)
        console.log("OK #1")
    }, 1000)
}

func()