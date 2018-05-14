
var, const, let의 차이점
======
`var`는 `function-scope`이고 `const`,`let`는 `block-scope`이다.

## 선언
`var`의 경우 같은 이름의 변수를 두번 선언하고 호출해보았다
```js
var foo = 'hello';
var foo = 'hello everyone';
console.log(foo); // 'hello everyone'
```
에러없이 마지막에 선언된 foo의 값이 출력되는 것을 확인할 수 있다.<br>

`let`으로 동일하게 선언해 보자.
```js
let foo = 'hello';
let foo = 'hello everyone';
console.log(foo); // Uncaught SyntaxError: Identifier 'zoo' has already been declared
```
이미 선언되어 있다며 오류를 내뱉는다.<br>
`var`로만 사용하여 중복되는 변수로 인한 오류를 방지하기에 좋다.
## 호출
```js
console.log(foo); // undefined
var foo;
```
변수의 선언보다 호출이 먼저 되어있음에도 호이스팅(Hoisting)으로 인해 정상적으로 호출이 가능하다.
```js
console.log(foo); // Uncaught ReferenceError: foo is not defined
let foo;
```
호출한 시점에 변수가 선언되어 있지 않아 에러가 발생한다.<br>
### 유효 범위
`var`는 `function-scope`이다
```js
function scope() {
    var foo = 'hello';
    console.log(foo); // 'hello'
    if(true) {
        var foo = 'good';
        console.log(foo); // 'good'
    }
    console.log(foo); // 'good'
}
```
위의 scope함수 내에서의 if문 안에서 foo와 if문 밖에서의 foo는 동일한 변수이다.<br>
또한 중복으로 변수를 선언했지만 에러가 발생하지 않고 값또한 마지막으로 선언된 foo의 값으로 변경되었다.

하지만 `let`과 `const`는 `block-scope`이다
```js
function scope() {
    let foo = 'hello';
    console.log(foo); // 'hello'
    if(true) {
        let foo = 'good';
        console.log(foo); // 'good'
    }
    console.log(foo); // 'hello'
}
```
위의 `var`와 달리 if문 안에서의 foo와 밖에서의 foo는 전혀 다른 변수 이다.<br>
따라서 중복 선언으로 인한 에러가 발생하지 않을 뿐 아니라 if문 안에서의 foo는 if문이 끝나는 시점에서 유효범위가 종료된다.

```js
function scope() {
    let foo = 'hello';
    console.log(foo); // 'hello'
    if(true) {
        console.log(foo); // Uncaught ReferenceError: foo is not defined
        let foo = 'good';
    }
    console.log(foo); // 'hello'
}
```
여기서 이상한 점을 확인 할 수 있다.<br>
분명히 foo는 위에서 선언을 해주었고 if문에서 foo를 호출하고 다시 foo를 선언 하였다.<br>
하지만 if문안에서 foo를 선언하기전 호출하면 에러가 발생한다.<br>
이는 **임시적 사각지대(Temporal Dead Zone : TDZ)** 라는 개념이다.<br>
어떠한 변수가 호출되었을 때 블록 안에 같은 이름의 변수가 없으면 상위 블록에서 해당 변수를 찾는다.<br>
하지만 해당 블록안에서 `let`이나`const`로 변수가 선언되어 있다면 그 변수가 선언되기 이전 시점까지는 그 블록안에서는 정의되지 않은 변수로 간주되는 것이다.
## let과 const의 차이
윈시형 타입(string, number, boolean, null, undefined)에서 `const`는 상수로 동작한다.<br>
따라서 `const`로 선언되면 값을 재할당 할 경우 에러가 발생한다.
```js
const foo = 0;
foo = 1;
// Error: Uncaught TypeError: Assignment to constant variable.
```
따라서 원시형의 경우 값의 변동이 있을 경우 `let`으로 상수로 사용될 경우에는 `const`로 사용하면 된다.<br>
하지만 참조 타입의 경우 `const`의 값을 변경 가능하다.
```js
const obj = {
    name : 'jone',
    age : 24
};
obj.name = 'anny';
console.log(obj.name); // 'anny'
```
이 처럼 참조 타입의 `const`의 값을 변경할 때에는 가능 하다<br>
하지만 객체 자체를 변경할 경우에는 에러가 발생한다.
```js
const obj = {
    name : 'jone',
    age : 24
};
obj = {
    hobby : 'fishing',
    country : 'korea'
}
// Uncaught TypeError: Assignment to constant variable.
```
객체 자체를 변경할 경우에는 에러가 발생하기 때문에 좀더 안정적인 코드의 작성이 가능할 것 같다.

