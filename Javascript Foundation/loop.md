반복문
======
반복되는 작업을 효율적으로 할 수있게 해주는 자바스크립트 문법이다.<br>
반복문에는 두가지 방법이 있다.
* for문
* while문

먼저 반복문을 사용해야하는 이유를 알아보자.
```js
function gugudan(number) {
    document.write(number + ' * ' + '1' + '=' + number*1 + '<br>');
    document.write(number + ' * ' + '2' + '=' + number*2 + '<br>');
    document.write(number + ' * ' + '3' + '=' + number*3 + '<br>');
    document.write(number + ' * ' + '4' + '=' + number*4 + '<br>');
    document.write(number + ' * ' + '5' + '=' + number*5 + '<br>');
    document.write(number + ' * ' + '6' + '=' + number*6 + '<br>');
    document.write(number + ' * ' + '7' + '=' + number*7 + '<br>');
    document.write(number + ' * ' + '8' + '=' + number*8 + '<br>');
    document.write(number + ' * ' + '9' + '=' + number*9 + '<br>');
}
```
함수의 인자로 받은 number값과 count값을 사용해 원하는 숫자만큼 구구단으로 출력하는 함수이다.<br>
여기서 반복문을 사용하게되면 매우 간결하게 작성할 수 있다.
```js
function gugudan(number, count) {
    for (var i = 1; i <= count; i++) {
        var result = number*i;
        document.write(number + ' * ' + i + ' = ' + result + '<br>');
    }
}
```
### for문
```js
var i = 0; // 변수의 초기화 
for(true) {
//code..
i++; // 증감식
}
```
먼저 반복할 횟수를 정할 변수를 초기화시킨다<br>
for 우측()에 들어가는 식이 true일경우 for문 내의 코드를 실행한다.<br>
이 boolean값이 false가 되었을 때 반복문을 종료한다.<br>
마지막으로 변수의 값을 늘리거나 줄인다.<br>
관례적으로 아래와 같은 코드로 사용된다.<br>
아래의 코드는 위의 예제와 정확히 같다.
```js
for (var i = 0;i < 10;i++) {
    //code
}
```
작동되는 순서는 먼저<br>
1. var i = 0; 으로 변수를 초기화
2. i < 10; 으로 조건을 확인
3. 조건이 맞을 경우 for문 내의 코드를 실행, 맞지 않을 경우 종료
4. 코드를 실행 후 i++; 로 변수의 값을 갱신

주의할 점은 for()안에 나열된 코드들이 순서대로 실행되는게 아니라는 것이다.

### while 문
for문과 사용법은 동일하다.
```js
var i = 0;
while(true) {
    //code
    i++;
}
```

### break
반복문을 중간에 중단시키고 싶을때 사용하는 방법이다.
```js
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    document.write('Hello' + i + '<br>');
}
```
출력결과
```
Hello1
Hello2
Hello3
Hello4
```
반복문 안에서 break 가 실행되면 그 즉시 반복문을 종료시킨다.

### continue
반복문의 실행은 즉시 중단시키지만 반복은 지속되게 할 경우 사용한다.

```js
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    document.write('Hello' + i + '<br>');
}
```
출력결과
```
Hello1
Hello2
Hello3
Hello4
Hello6
Hello7
Hello8
Hello9
```
Hello5는 출력되지 않았다.<br>
위 처럼 continue 문을 만나게 되면 continue 이후의 구문은 실행되지 않았기 때문이다.<br>
하지만 반복문은 중단되지 않고 계속 작동하였기 때문에 이후 결과들이 출력되었다.









