console.log("숫자 알아맞히기 게임을 시자갑니다");
console.log("1부터 100까지의 값을 입력해 주세요");

var answer = Math.floor(Math.random() * 100 + 1);

var cnt = 0;
while (true) {
    var num = Number(window.prompt("1~100 사이의 값 입력:"));
    ++cnt;

    if (num > answer) {
        console.log(`$(num)보다는 작습니다`);
    }
    else if (num < answer) {
        console.log(`$(num)보다는 큽니다`);
    }
    else {
        console.log(`정답입니다$(cnt)안에 맞추셨습니다`);
    }
}

//함수

function print_hello3() {
    for (var i = 0; i < 3; i++) {
        console.log("hello");
    }
}

//var 키워드를 사용하여 변수를 중복 선언 가능
var age = 20;
var age = 30;

console.log(age)// = 30이 출력 됨
//js 에서는 변수를 선언하기 전에 이를 사용할수 있음 
//이는 js가 선언된 변수 등을 파일의 최상단으로 끌어 올리기 때문이다 = 호이스팅

//js에서는 기존 변수의 문제를 해결하기 위해 let 키워드를 도입함

let g = 0;
let g = 0; //ㅣlet은 중복 선언이 안됨

console.log(g);
let g = 0;// == 변수 선언 전에 사용 불가

if (true) {
    var q = "q";
    let r = "r";
}
console.log(q);
console.log(r); // 에러 = 블록 레벨 스코프로 동작

//결론 : js 에서 변수를 선언하고 싶다면 var 보다 let 키워드를 사용 하는 것이 좋다

