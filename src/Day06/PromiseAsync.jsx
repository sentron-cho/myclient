const AsyncAwait = {
    // promise 기본 문법
    promise: () => {
        const myPromise = (count) => new Promise((resolve) => {
            setTimeout(() => {
                resolve(count + 1);
            }, 1000);
        })

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
    prominseAsync: async () => {
        const myPromise = (count) => new Promise((resolve) => {
            setTimeout(() => {
                resolve(count + 1);
            }, 1000);
        })

        let res1 = await myPromise(0);
        console.log("1초후에 시작하는 함수!!! ===> count = " + res1)
        let res2 = await myPromise(res1);
        console.log("1초후에 시작하는 함수!!! ===> count = " + res2)
        let res3 = await myPromise(res2);
        console.log("1초후에 시작하는 함수!!! ===> count = " + res3)
    }
}

module.exports = AsyncAwait;