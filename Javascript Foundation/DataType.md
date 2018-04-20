Javascript Data Type
======
자바스크립트의 데이터 타입은 기본 타입과 참조 타입으로 나뉘어져 있습니다.

## 기본 데이터 타입
기본 데이터 타입을 제외한 모든 것은 객체 입니다.

### 숫자 타입
자바스크립트의 변수에는 음수,양수,정수,실수 모두 저장할 수 있으며 이 데이터 타입은 모두 "number"로 반환된다.

```js
// 숫자 타입
var num = 1;
var floatNum = 0.1;
console.log(typeof num, typeof floatNum); // "number", "number"
```
### 문자열 타입
문자열은 작은 따옴표(`)나 큰 따옴표(")로 생성한다.
문자열은 배열처럼 인덱스를 이용해 접근할 수 있다.
하지만 인덱스를 통한 접근은 가능하나 수정은 불가능하다.
```js
// 문자열 타입
var singleQuoteStr = '작은따옴표 문자열';
var doubleQuoteStr = "큰 따옴표 문자열";
console.log(typeof singleQuoteStr, typeof doubleQuoteStr); // "string", "string"
console.log(singleQuoteStr[0]) // "작"
console.log(singleQuoteStr[1]) // "은"
singleQuoteStr[0] = "안"; // 문자열 인덱스에 접근하여 수정 시도
console.log(singleQuoteStr); // 결과값은 변경되지 않은 "작은따옴표 문자열"
```
### 불린 타입
// 불린 타입
var trueVar = true;
var falseVar = false;
console.log(typeof trueVar, typeof falseVar); // "boolean", "boolean"
### undefined 타입
값이 비어있음을 나타내는 타입이다.
자바스크립트에서 기본적으로 값이 할당되지 않은 변수는 undefined타입이며, 이 변수가 가지고 있는 값 또한 undefined이다.
**undefined타입은 값을 가지고 있지 않음을 의미**하지만 가지고 있는 값은 없는 것이아니라 **undefined를 가지고있다**.
```js
// undefined 타입
var emptyVar;
var undefinedVar = undefined;
console.log(typeof emptyVar, typeof undefinedVar); // "undefined", "undefined"
```
### null 타입
자바스크립트에서의 null을 값으로 가지는 변수는 **완전히 비어있음**을 나타낸다.
여기서 오류(?)가 있는데 아래 선언한 nullVar의 typeof결과는 object가 반환된다.
따라서 null타입 변수를 확인할 경우에는 일치 연산자(===)를 사용하여 변수의 값을 직접 확인해야 한다.
```js
// null 타입
var nullVar = null;
console.log(typeof nullVar); // "object"
console.log(nullVar === null); // true
```