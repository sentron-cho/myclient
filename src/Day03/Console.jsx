const Console = {
    time: () => {
        console.log("\n\n\n=================================== time")

        console.log('측정시작');

        console.time('timecheck');
        for(let i = 0; i < 100; i++) {
            console.log('timecheck --- ' + i);
        }
        console.timeEnd('timecheck');

        console.log('측정종료');
    },

    table: () => {
        console.log("\n\n\n=================================== table")

        console.table([
            { name: '홍길동', birth: 1994, gender: "남"},
            { name: '김유신', birth: 1998, gender: "남"},
            { name: '유관순', birth: 1734, gender: "여"},
            { name: '김철수', birth: 2020, gender: "남"},
            { name: '김영희', birth: 2010, gender: "여"},
        ]);
    },

    log: () => {
        console.log("\n\n\n=================================== log")

        console.log("consol.log를 사용한 array 객체 출력.")
        console.log(["apple", "banana", "orange"])
        console.log("\n")
        
        console.log("consol.log를 사용해 json 객체 출력.")
        console.log({name: 'name', title: 'test-file', age: 100})
        console.log("\n")

        console.log("consol.log 사용해 여러개의 인자를 출력.")
        console.log("test", [1, 2, 3], {title: "test"})
        console.log("\n")
    },

    dir: () => {
        console.log("\n\n\n=================================== dir")

        console.dir("consol.dir를 사용해 json 객체 출력.")
        console.dir({name: 'name', title: 'test-file', age: 100})
        console.log("\n")

        console.dir("consol.dir를 사용한 array 객체 출력.")
        console.dir(["apple", "banana", "orange"])
        console.log("\n")

        console.dir("consol.dir 사용해 여러개의 인자를 출력.")
        console.dir("test", [1, 2, 3], {title: "test"})
        console.log("\n")

        const obj = {
            outside: {
                inside: {
                    key: 'value',
                },
            },
        };

        console.dir("depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정, 기본값 : 2")
        console.dir(obj, {colors: false, depth: 2}); 
        console.log("\n")
        
        console.dir("depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정, 기본값 : 2")
        console.dir(obj, {colors: true, depth: 1});
    },

    rest: () => {
        console.log("\n\n\n=================================== error")

        console.log('기본');
        console.info('정보');
        console.debug('디버그');
        console.warn('경고');
        console.error('에러');
    },

    trace: () => {
        console.trace('에러 위치 추적');
    }
}

module.exports = Console;