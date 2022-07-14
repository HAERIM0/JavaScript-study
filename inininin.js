//객체 지향 프로그래밍

let name = "haerim";
let kor = 10;
let eng = 20;
let math = 30;
let tot = kor + eng + math;
let avg = tot / 3;
console.log(name, tot, avg);

name = "haerim";
kor = 20;
eng = 30;
math = 40;
tot = kor + eng + math;
avg = tot / 3;
console.log(name, tot, avg);

//이전 코드는 기존 학생의 변수를 재사용 하므로 기존 학생의 정보가 사라진다는 문제가 있음
//이를 해결하기 위해 학생마다 개별적으로 변수를 도입하도록 함.

var name1 = "haerim";
var kor1 = 20;
var eng1 = 30;
var math1 = 40;
var tot1 = kor1 + eng1 + math1;
var avg1 = tot1 / 3;
console.log(name1, tot1, avg1);

var name2 = "haerim";
var kor2 = 10;
var eng2 = 20;
var math2 = 30;
var tot2 = kor2 + eng2 + math2;
var avg2 = tot2 / 3;
console.log(name2, tot2, avg2);

//이전 코드는 과목의 총점과 평균을 계산하는 코드가 중복되고 수식이 존재하여 가독성이 떨어진다는 단점이 있다 
//이를 해결하기 위해 함수를 도입

function total(a, b, c) {
    return a + b + c;
}

function average(tot, cnt) {
    return tot / cnt;
}

var name1 = "haerim";
var kor1 = 20;
var eng1 = 30;
var math1 = 40;
var tot1 = total(kor1, eng1, math1);
var avg1 = average(tot1, 3);
console.log(name1, tot1, avg1);

var name2 = "haerim";
var kor2 = 10;
var eng2 = 20;
var math2 = 30;
var tot2 = total(kor2, eng2, math2);
var avg2 = average(tot1, 3);
console.log(name2, tot2, avg2);

//이전 코드는 학생의 점수들이 개별적으로 취급되어 잘못된 연산이 수행될 수 있다는 문제가 있음
//따라서 밀접하게 관련이 있는 데이터를 하나로 묶어서 처리하기위해 객체를 도입
function total(st) { return st.kor + st.eng + st.math; }
function average(st) { return (st.kor + st.eng + st.math) / st.cnt }

const haerim = {
    name: "haerim",
    kor: 10,
    eng: 20,
    math: 30,
    cnt: 3
};
var tot1 = total(haerim);
var avg = average(haerim);
console.log(haerim.name, tot1, avg1);

const susu = {
    name: "susu",
    kor: 20,
    eng: 30,
    math: 40,
    cnt: 3
};
var tot2 = total(haerim);
var avg2 = average(susu);
console.log(susu.name, tot2, avg2)

//this 키워드의 의미는 현재 객체 자신을 의미하는 변수
//이와같이 this라는 개념을 사용할 수 있는 하무를 다른 함수와 구분하기 위해 메서드 라고 함

//객체 안의 함수 호출방법:객체명.함수명();
//객체 : 사물 또는 물건
var da = {
    name: "da",
    kor: 10,
    eng: 20,
    math: 30,
    cnt: 3,

    total: function (st) {
        return this.kor + this.eng + this.math;
    },
    average: function () {
        return (this.kor + this.eng + this.math) / this.cnt;
    }

};


function createStudent(name, kor, eng, math) {
    const obj = {}; //빈 객체 생성

    obj.name = name;
    obj.kor = kor;
    obj.eng = eng;
    obj.math = math;
    obj.total = function () {
        return this.kor + this.eng + this.math;
    },
        obj.average = function () {
            return (this.kor + this.eng + this.math) / 3;
        }
    return obj;
}
//생성자 함수에서 객체의 생성과 반환은 항상 포함하게 된다.이러한 번거로움을 해결하기 윟 js는 객체를 생성하고 반환하는 특별한 함수를 제공하는데
//이를 생성자 라고 한다.생성자는 다른 함수와 다르게 객체를 생성하는 함수이므로 다른 함수와 구분을 하기 위해 첫 문자는 대문자를
//사용하는것이 관례이고 함수의 이름은 명사를 사용하는 것이 관례