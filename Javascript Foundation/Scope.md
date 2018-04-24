Scope
======
Scope란 유효 범위를 의미하며, 자바스크립트에서의 Scope는 함수 단위로 이루어져 있다.<br>

```js
function outter() {
    var outterVar = 'name';

    console.log(outterVar); // "name"
    console.log(innerVar); // error : innerVar is not defined

    function inner() {
        var innerVar = 'age';
        console.log(outterVar); // "name"
        console.log(innerVar); // "age"
    }
}
```

위 처럼 내장 함수에서 외장 함수의 지역 변수에는 접근이 가능하지만 외장 함수에서의 내장 함수 지역 변수에는 접근이 불가능하다.<br>
따라서 내장 함수에서 외장 함수의 지역 변수의 값에 접근하거나, 값을 변경할 수 있다.<br>
아래 예제를 통해 내장 함수에서 외장 함수의 지역 변수에 접근/값을 변경하는 것을 확인할 수 있다.
```js
function outter() {
    var outterVar = 'name';

    function inner() {
        outterVar = 'age';
    }
    inner();
    console.log(outterVar); // "age"
}
```
위 처럼 내장 함수에서 외장 함수의 지역 변수에 접근하여 값을 변경하거나 사용하는 것을 **ScopeChaning**이라고 하며 이를 통해 클로져를 사용할 수 있다.


