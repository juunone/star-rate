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

# Reverse with Tag
```javascript
let testCase = "hello <div>it's me</div> world! <p>nice to meet u</p>"

function reverse(str){
  let reversed = "";    
  let txt = "";
  let txtMerge = "";
  let cnt = 0;
  let idx = null;
  let obj = {};

  for (var i = str.length - 1; i >= 0; i--){                
    if(txt.length){
      if(cnt === 1 || cnt === 3){
        txt += str[i];
      }      
    }

    if(str[i] === ">"){
      cnt++;
      txt += str[i];

      if(cnt === 1){
        idx = i;
        reversed += i;
      }      
    }else{      
      if(!txt.length && cnt === 0){        
        reversed += str[i];
      }else{
        if(cnt === 2){
          txt += str[i];
        }
      }
    }

    if(str[i] === "<"){
      cnt++;        
      txtMerge += txt;    
      obj[idx] = txtMerge.split('').reverse().join('');

      if(cnt > 3){
        cnt = 0;
        txtMerge = "";        
      }            

      txt = "";
    }
  }    

  let matchStr = "";
  for(let i in obj){
    if(matchStr !== ""){
      matchStr = matchStr.replace(i, obj[i]);
    }else{
      matchStr = reversed.replace(i, obj[i]);
    }
  }
  console.log('matchStr',matchStr);
  return matchStr;
}
reverse(testCase)
```

# 별점 평가 컴포넌트
```
git clone https://github.com/juunone/laftel-test.git

cd laftel-test

yarn install

yarn start
```

# 결제 페이지 UI
[Codesandbox : https://0yx8m9vwn0.codesandbox.io/](https://0yx8m9vwn0.codesandbox.io/)
