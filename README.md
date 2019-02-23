# laftel-test
라프텔 프론트 코딩 테스트

# Read Numbers
```javascript
let testCase = [1, 2, 3, 5, 8, 9];
var dummyArr = [];
var calcArr = [];

function readNumbers(arr){
    for(let i = 0; i <= arr.length; i++){
        if(!dummyArr.length){        
            dummyArr.push(arr[i]);
        }else{
            if(arr[i] - 1 === arr[i-1]){
                dummyArr.push(arr[i]);
            }else{
                calcArr.push(dummyArr);
                dummyArr = [];            
                dummyArr.push(arr[i]);
            }
        }
    }


    if(calcArr.length){
        for(let i = 0; i < calcArr.length; i++){
            if(calcArr[i].length > 1){
                calcArr[i] = `${calcArr[i][0]}~${calcArr[i][calcArr[i].length - 1]}`;
            }else{
                calcArr[i] = calcArr[i][0];
            }
        }        
    }
    console.log('calc',calcArr.toString());
}
readNumbers(testCase);

```
