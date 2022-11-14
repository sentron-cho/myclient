const AsyncAwait = {
    // promise 기본 문법
    promiseThen: () => {
        const myPromise = (count) => new Promise((resolve) => {
            setTimeout(() => {
                resolve(count + 1);
            }, 1000);
        })

        // const myPromise = (count) => {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             resolve(count + 1);
        //         }, 1000);
        //     })
        // }

        console.log("promise start!!!")
        myPromise(0).then(count => {
            console.log("1초후에 시작하는 함수!!! ===> count = " + count)
            return myPromise(count)
        }).then(count => {
            console.log("1초후에 시작하는 함수!!! ===> count = " + count)
            return myPromise(count)
        }).then(count => {
            console.log("1초후에 시작하는 함수!!! ===> count = " + count)
            return myPromise(count)
        })
    },
}

module.exports = AsyncAwait;