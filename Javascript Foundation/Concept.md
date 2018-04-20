기본 개념
======
자바스크립트의 거의 모든 것은 객체로 구성되어 있습니다.

## 객체(Object)
기본 데이터 타입을 제외한 모든 것은 객체 입니다.
## 함수(Function)
자바스크립트에서의 함수는 일급 객체 입니다.

일반적인 객체 보다 조금 더 많은 기능을 가지고 있습니다.

## 변수(Variable)
변수는 자바스크립트의 다양한 값들을 담을 수 있는 컨테이너 역할을 합니다.
<br>변수의 값으로는 기본 데이터 타입을 포함하여 함수 등 객체들을 할당할 수 있습니다.
<br>자바스크립트에서의 변수는 전역 변수와 지역 변수로 나뉘어 지게 됩니다.
<br>변수를 선언할때에는 `var`키워드를 사용합니다
<br>변수를 선언하는 방법은 아래와 같습니다.
```js
var 변수명 = '값';

// 변수의 값으로 숫자를 담거나
var age = 27;
// 문자열을 담거나
var fruit = '사과';
// 함수를 담을 수도 있습니다
var calculator = function(a,b) {
    return a+b;
};
```

## 데이터 타입 
자바스크립트의 값들은 크게 **기본 데이터 타입**과 **참조 데이터 타입**으로 나뉘어집니다.
### 기본 데이터 타입
* 숫자타입
* 문자타입
* 불린 타입
* undefined 타입
* null 타입








