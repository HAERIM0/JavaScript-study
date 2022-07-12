/*var name = "홍길동";
var age = 20;
console.log("이름: " + name + ", 나이:" + age);

//template literals: 벡틱 (')을 사용한 문자열
//문자열 안에 표현식을 사용할수 있음
console.log(`이름:${name},나이:${age}`);

function fn() {
   //HTNL 태그에 ID를 성정하면 그 객체는 전역으로 설정됨 즉 어디에서든 접근 ㄱㄴ
   console.log(name.value);
}


//window.prompt 의 사용 : 대화 상자의 사용
var name = window.prompt("이름을 입력하세요");
console.log(name);

//제어문 1.조건에 따른 분기

var num = Number(window.prompt("숫자 입력"));

if (num == 0) {
    console.log("zero");
}

else {
    console.log("not zero");
}
// if (num != 0) {
//     console.log("not zero");
// }
*/
// 위 코드는 경우에 따라 불필요한 연산이 발생살 수 있음 이를 해결하기위해 if ~ else 를 제공

//0인지 양수인지 판별하는 코드
// if (num == 0) {
//     console.log("zero");
// }

// else {
//     if (num > 0)
//         console.log("p");

//     if (num < 0)
//         console.log("n");
// }

//이전의 코드는 중첩으로 인해 가독성이 떨어진다는 단점이 있음 이를 해결하기위해 js는 else if를 제공

// num = 0;
// if (num > 0) {
//     console.log("p");
// }

// else if(num<0){
//         console.log("p");
// }
//  else {
//     console.log("zero");
//  } 

/*
var num = Number(window.prompt("숫자 입력"));

if (num >= 90) {
    console.log("A");
}
else if (num >= 80) {
    console.log("B");
}
else if (num >= 70) {
    console.log("C");
}
else if (num >= 60) {
    console.log("D");
}
else {
    console.log("F");
}
//js 논리 연산자 1.AND 2. OR 3.NOT

1.단축 평가가 수행됨
2.&&연산자에서 앞의 피연산자가 거짓이면 뒤의 표현식은 평가X
3.||연산자에서 앞의 피연산자가 참이면 뒤의 표현식은 평가X

//값에 의한 분기 (switch)

var color = "red";
switch (color) {
    case "red": console.log("빨간색"); break;
    case "green": console.log("녹색"); break;
    case "green": console.log("녹색"); break;
    default: console.log("잘못 입력");
}

//fall-through : switch 의 각 case 에서 break 를 사용하지 않을 때 다음 case 가 수앻되는 기능
//-> switch에서도 if를 흉내내기 위해 제공됨 ->가급적 사용하지 않는 것이 좋음

//반복문1 for = 특정 코드 반복하는 문법
for (var i = 0; i < 5; i++) {
    console.log("hello,world");
}
*/
// var dan = 2;

// for (var n = 1; n < 10; n++) {
//     console.log(`${dan} * ${n} = ${dan * n}`);
// }

// dan = 1;

// dan +=1;

// console.log(`<${dan}단 >`);
// for (var n = 1; n < 10; n++) {
//     console.log(`${dan} * ${n} = ${dan * n}`);
// }

for (var i = 0; i < 3; i++) {
    console.log(i);
    for (var j = 0; j < 4; j++)
        console.log("\t" + j);
}