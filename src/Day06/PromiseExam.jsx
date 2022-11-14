const PromiseExam = {
    callback: () => {
        console.log("callback start!!!")

        var count = 0
        // callback 함수 시작후 1초 뒤에 시작
        setTimeout(() => {
            count++
            console.log("1초후에 시작하는 함수!!! ===> count = " + count)

            // 첫번째 setTimeout() 한수 실행 후 1초뒤 시작
            setTimeout(() => {
                count++
                console.log("1초후에 시작하는 함수!!! ===> count = " + count)

                // 두번째 setTimeout() 한수 실행 후 1초뒤 시작
                setTimeout(() => {
                    count++
                    console.log("1초후에 시작하는 함수!!! ===> count = " + count)

                    // 최종적으로 결과를 받겠다면...?
                    console.log("callback final!!!")
                }, 1000);

            }, 1000);

        }, 1000);

        console.log("callback end!!!")
    },

    callbackFunc: () => {
        console.log("callback start!!!")

        var count = 0

        const myCounter = (callback) => {
            setTimeout(() => {
                count++
                console.log("1초후에 시작하는 함수!!! ===> count = " + count)
                callback()
            }, 1000);
        }

        myCounter(() => {
            myCounter(() => {
                myCounter(() => {
                    console.log("callback final!!!")
                })
            })
        })

        console.log("callback end!!!")
    },

    // promise 기본 문법
    promise: () => {
        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
                let sum = 10;
                resolve(sum);
            }, 1000);
        })

        console.log("promise start!!!")
        myPromise.then(result => {
            console.log("===> 1초후에 시작하는 함수!!!")
            console.log(result)
        })
    },

    // promise catch 문법
    promiseCatch: () => {
        // 함수형으로 변경하여 parameter를 넘겨 처리해보자
        const myPromise = (a, b) => new Promise((resolve, reject) => {
            setTimeout(() => {
                if(b === 0) {
                    reject("0으로 나눌수 없습니다!!!!")
                } else {
                    resolve(a / b);
                }
            }, 1000);
        })
        
        console.log("promise start!!!")
        myPromise(10, 2).then(result => {
            console.log(result)
            console.log("promise end!!!")
        }).catch(error => {
            console.warn(error)
            console.log("promise catch!!!")
        })
    },

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

module.exports = PromiseExam;