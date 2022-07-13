//자료구조는 데이터와 데이터에 적용할 수 있는 함수나 명령어의 모음

//1. array 배열

const a1 = []; //비어 있는 배열 생성
console.log(al);

const a2 = [1, 2, 3, 4]; //값 과 값을 구분하기 위해 쉼표를 함 원소또는 요소:자료구조 안의 값 의미
console.log(a2);

const a3 = [1, 1, 1, 1];
console.log(a3); //중복을 허용

//배열은 js가 제공하는 모든 타입의 값 저장 ㄱㄴ
const a4 = [10, 3.14, "hello", [1, 2, 3]];
console.log(a4);

//인덱싱 = 인덱스를 사용하여 원소를 참조하는 문법


-8 - 7 - 6 - 5 - 4 - 3 - 3 - 1
0   1   2   3   4   5   6   7
const arr = [11, 22, 33, 44, 55, 66, 77, 88];
//console.log(arr);

//usage:배열명[인덱스]
console.log(arr[5]);
console.log(arr[3]);

//배열의 원소를 얻어오는 법
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));

//주의 존재하지 않는 원소에 대하여 인덱싱을 수행하면 undefined가 반환된다

//슬라이싱(slicing):일부 연속된 구간을 선택하는 문법
const a = [11, 22, 33, 44, 55, 66, 77, 88]

//usage:배열명.slice(시작인덱스,끝값); ->시작값은 포함되나 끝 값은 포함되지 않는 반개구간
console.log(a.slice(1, 5));

//마지막 원소를 포함할 경우,마지막 원소의 인덱스보다 큰 값을 넣어주면됨
console.log(a.slice(1, 10));
console.log(a.slice(0, 8));
//만약 마지막원소가 포함된 경우라면,마지막 인덱스를 생략 가능
console.log(a.slice(0));
//또한 시작 인덱스의 값이 0이면 이를 생략가능
console.log(a.slice());

//슬라이싱을 하면 새로운 배열이 반환된다
const b = a.slice();
b[0] = 0;
console.log(a);

//배열의 순회
const fruits = ["apple", "banana", "cherry", "durian"];

//1.조건 기반의 for
for (let idx = 0; idx < fruits.length; idx++) {
    console.log(fruits[idx]);
}

//2.원소 기반의 for
for (const fname of fruits) {
    0 0
    console.log(fname);
}

//3. forEach
function myfunc(item, idx, array) {//item=원소가 전달됨,idx = 원소의 인덱스 전달,array = 배열이 전달됨
    console.log(item);
}

fruits.forEach(myfunc);

//정렬
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
console.log(numbers);

numbers.sort(function (a, b) { return a - b }); //오름차순
numbers.sort(function (a, b) { return b - a });//내립차순

console.log(numbers)


const scores = [10, 20, 30];
console.log(scores[0]);

//키와 밸류를 최소 단위로 하는 자료구조 : 객체(object)
//파이썬의 딕셔너리 개념

//생성방법 : 객체명 = {키1:값1,키2:값2} 속성(property)

//키는 문자열을 사용해야 하는데 생략할 수도 있음
const p1 = {
    name: "daniel",
    age: 20
};
console.log(p1);

//키 또는 속성의 작명 규칙
//1.숫자로 시작 못함 2.예약된 키워드 사용 불가 3.기호는$와 _만 가능

//속성에 접근하는 방법
//1.객체명.속성명
//2.객체명["속성명"]

const p2 = {
    name: "daniel",
    age: 20
};
console.log(p2.name);
console.log(p2["age"]);

//속성의 순회

const p3 = {
    name: "haerim",
    age: 17,
    email: "dgsw@hs.kr"
};

//for (const of): 배열에서 사용
for (const key in p3) { //in은 객체에서 사용
    console.log(key)
    console.log(p3[key])

}

//키만 확인하고 싶은 경우
console.log(Object.keys(p3));
console.log(Object.values(p3));

//키와 벨류 동시에 확인하고 싶을 경우
console.log(Object.entries(p3));

//속성의 추가 
const p4 = {}; //비어있는 객체 생성
console.log(p4);

//usage:객체명,새로운속성명 = 값
p4.name = "ha";
p4.age = 10;
console.log(p4);

//속성의 갱신
const p5 = {
    name: "ha",
    age: 15
};

//usage:객체명.속성명 = 값;
p5.name = "haerim";
console.log(p5);

//속성의 삭제 : delete 키워드르 사용
const p6 = {
    name: "haertim",
    age: 50
};
console.log(p6);
delete p6.name;
console.log(p6);


//js에서는 함수를 2가지형태로 생성 할 수 있다
//1.함수 정의
function foo() {
    console.log("foo()");
}
foo();

//2.익명 함수 사용
const bar = function () {
    console.log("bar()");
}
bar();

//함수 생성 시,정의보다는 익명 함수를 사용하는 것이 좋다
//함수를 정의하여 생성하게 되면 호이스팅이 발생.

goo();
function goo() {
    console.log("goo()");
}

//화살표 함수
//usage:const 함수명 = () => {};
const hoo = function () {
    console.log("hoo()");
}
hoo();

const zoo = () => {
    console.log("zoo()");
}
zoo();

const a = () => {
    console.log("a");
}
a();

//1.함수 코드가 한 줄인 경우,한 줄 블럭 사용 가능
const b = () => { console.log("b"); };
b();

//2.함수 코드가 한 줄인 경우,블럭 생략 가능
const c = () => console.log("C");
c();

//3.함수가 값만 반환한다면 블럭과 return 키워드 생략 ㄱㄴ
const pi = () => 3.141592;
console.log(pi());

//4.필요하면 여러 줄 사용 ㄱㄴ,이 경우 중괄호를 생략 ㄱㄴ
const d = () => {
    console.log("hello");
};

//5.여러 줄인 경우,return 키워드 생략 붉능
const area = (r) => {
    const result = r ** 2 * pi();
    return result;
}
console.log(area(2));

//6.매개변수 없는 경우,소괄호 생략 불가능
const hello = () => console.log("hello");

//7.매개변수가 1개인 경우,소괄호 생략 ㄱㄴ
const square = (x) => x ** 2;
console.log(square(2));

//8.매개변수가 2개 이상인 경우,소괄호 생략 불가능
const add = (x, y) => x + y;
console.log(add(1, 1));

//결론 : 소괄호는 생략할 수 없으나 예외적으로 매개변수가 1개인 경우에는 생략 ㄱㄴ