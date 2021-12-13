//宣告

{
    //用let宣告只能存在於此區域
    let x = 0;
}

{
    //用var宣告則沒有區域範圍
    var x = 0;
}

//印東西
console.log(x)

//型態
typeof(x)

//三元運算
//variablename = (condition) ? value1:value2 

//while if for switch_case都跟c++一樣

//function 三種都一樣，參數傳太多會省略多餘的部分。參數傳太少沒被賦值的參數會變成undefined
{
    function a(){
        return "hello a";
    }
    
    const b = function(){
        return "hello b";
    }
    
    const c = () => {
        return "hello c";
    }
    
    array_b = [1,2,3,4]
}

//for迴圈
{
    //三個相同
    for(let i = 0; i < array_b.length; i++){
        console.log(array_b[i]);
    }
    //key為索引值
    for(let key in array_b){
        console.log(array_b[key]);
    }
    //value為值 等同於python的for value in array_b
    for(let value of array_b){
        console.log(value);
    }
}



//string method
{
    let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    txt.length
    //從txt[7]~txt[12]
    txt.slice(7, 13);
    txt.substring(7, 13);
    //從txt[7]開始往後數6個
    txt.substr(7, 6);
    txt.replace("abc", "def");
    txt.toLowerCase()
    txt.toUpperCase()
    //text1.concat(" ", text2); 可以連接2個字串
    //消除頭尾的空格
    txt.trim()
    //補4個0在開頭
    txt.padStart(4,"0");
    //補4個0在結尾
    txt.padEnd(4,0);
    //回傳txt[0]的unicode編號
    txt.charCodeAt(0);
    txt.split("")
}
//string method，後面都可以加一個參數，代表開始位置
{
    let str = "Please locate where 'locate' occurs!";
    //從一個從前面開始搜尋 另一個從後面開始搜尋
    str.indexOf("locate");
    str.lastIndexOf("locate");
    //可以用正規表達式
    str.search("locate")
    
    //如果從world開始就回傳true
    str.startsWith("world")
    //如果由Doe開始就回傳true
    str.endsWith("Doe");
}
//string template
{
    let firstName = "John";
    let lastName = "Doe";

    let text = `Welcome ${firstName}, ${lastName}!`;
}


//Number Methods
{
    let x = 9.656;
    x.toString(); 
    
    //到小數點第二位 9.66(四捨五入)
    x.toFixed(2);  
    //使這個數字為特定長度 9.7(四捨五入)(2個數字)
    x.toPrecision(2);
    let y = "123";
    Number(y)
    //可用在日期 1天為86400.000秒 從1970-01-01開始算
    Number(new Date("1970-01-02"))
    //回傳最大值
    Number.MAX_VALUE;
    Number.MIN_VALUE;
    // 1/0會出現的值 ,溢位
    Number.POSITIVE_INFINITY;
    Number.NEGATIVE_INFINITY;
}
//array
{
    //創造有40個空間的array
    //const points = new Array(40);  
    //創造[40,20]的陣列
    const points = new Array(40, 20);
    const point = [40,20];
    Array.isArray(point);
    //陣列的值用*串接變成字串
    points.join(" * ");
    points.toString()
    points.pop()
    points.push(4)
    //shift為pop最前面的元素,unshift為push到最前面的元素
    points.shift();
    points.unshift(0)
    //第一個2為 從哪裡開始插入["Lemon", "Kiwi"]
    //第二個2為 刪除幾個元素，因此splice可以用來刪除元素
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 2, "Lemon", "Kiwi");
    //此時fruits = ["Banana", "Orange", "Lemon", "Kiwi"]

    //將兩個陣列合併，可加入任意數量的陣列
    points.concat(point);

    //將回傳fruit[1:]
    const citrus = fruits.slice(1);
    //將回傳fruit[1:3]
    const citruss = fruits.slice(1,3);
    //按照字母排序
    fruits.sort();
    //按照數字大小排序
    fruits.sort(function(a, b){return a - b});
    fruits.reverse();   
}

//Iteration
{
    const numbers = [45, 4, 9, 16, 25];
    let txt = "";
    //foreach呼叫myFunction(陣列目前的值))，不能接收回傳值
    numbers.forEach(myFunction);
    function myFunction(value, index, array) {
        txt += value + "<br>";
    }

    //回傳numbers內為4的索引值，沒有的話回傳-1
    numbers.indexOf(4);

    //如果world有被包含回傳true
    numbers.includes("world");

    // Returns [A,B,C,D,E,F,G]
    Array.from("ABCDEFG") 
}
    
//date
{
    //現在時間
    const d = new Date();
    d.toString();
    d.toDateString()
    //目前西元年
    d.getFullYear()
    //目前月份
    d.getMonth()
    //目前日期
    d.getDate()
    //目前小時
    d.getHours()
    //目前分
    d.getMinutes()
    //目前秒
    d.getSeconds()
    //目前毫秒0~999
    d.getMilliseconds()
    //回傳從1970/1/1開始過了多少毫秒
    d.getTime()
    //星期幾
    d.getDay()
    //回傳現在的時間(毫秒)
    Date.now()

    d.setDate()
    d.setFullYear()
    d.setHours()
    d.setMilliseconds()
    d.setMinutes()
    d.setMonth()
    d.setSeconds()
    d.setSeconds()
    //const d = new Date("2015-03-25"); 
    //const d = new Date("2015-03-25T12:00:00Z"); 
    //const d = new Date("03/25/2015");
    //const d = new Date("Mar 25 2015");

    //const d = new Date(2018, 11, 24, 10, 33, 30, 0);(月份為0~11)
    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
    // new Date(milliseconds)

    //可比較時間
    // if (someday > today) {
    //     text = "Today is before January 14, 2100.";
    // } else {
    //     text = "Today is after January 14, 2100.";
    // }
}

//math
{
    Math.PI;
    //四捨五入
    Math.round(x)
    //無條件進位
    Math.ceil(x)
    //無條件捨去
    Math.floor(x)
    //回傳整數部分
    Math.trunc()
    //正數回傳1 0回傳0 負數回傳-1
    Math.sign()
    Math.pow(8, 2);
    Math.sqrt(64);
    //絕對值
    Math.abs(-4.7);

    //二分之一pi為90度角 sin(90度為1)
    Math.sin(1/2*Math.PI );
    Math.cos();
    Math.tan();

    //最大值 最小值
    Math.max(0,3);
    Math.min(0,3);
    //回傳0~1隨機值
    Math.random()*10;

    //log以自然常數e為底
    Math.log(1);
    //log以2為底
    Math.log2(8);
    //以10為底
    Math.log10(1000);
    //產生0~9的亂數
    Math.floor(Math.random() * 10);
}

//set
{   
    //
    const letters = new Set(["a","b","c"]);
    new Set();


    letters.add("a");
    letters.delete("a")
    //如果在set裡面的話return ture
    letters.has()
    letters.size

    //迴圈  
    let text = "";
    for (const x of letters) {
        text += x;
    }   
    console.log(text)
}

//Map 為[key,value]的組合 為python的dictionary
{
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
      ]);
    //插入一個[key,value]的組合
    fruits.set("oranges", 200);
    fruits.delete("bananas");
    //回傳500
    fruits.get("apples"); 
    fruits.size;
      
    //如果apple在裡面回傳true
    fruits.has("apples");

    //迴圈
    let text = "";
    fruits.forEach (function(value, key) {
        text += key + ' = ' + value;
    })
    for(let a of fruits){
        console.log(a)
    }
}

//regular express正規表示法
{
    //  正規表示法的規則 =>  /pattern/modifiers;
    //modifiers修飾符
    /*
    i 為不分大小寫
    g 為找到所有配對成功的值，而不是在第一個被搜尋到時停止
    m 為每一行都尋找第一個配對成功的值
     */
    /*
    [abc]
    [0-9]
    (x|y)
     */
    
    let text = "Visit W3Schools";
    text.search(/w3schools/i);
    text.replace( "W3Schools", "Microsoft");
    console.log(text)

    //宣告一個正規表示式pattern，如果後面的測試句子含有正規表示式的話return ture
    const pattern = /e/;
    pattern.test("The best things in life are free!");
    /e/.test("The best things in life are free!");
}

//ERROE 
{
    try {
        if ("1" != "2"){
            // throw可以自訂義error
            tdhrow("不相等");
        }
    }
    catch(err) {
        /*
        err object{
            err.name
            err.message
        }
        */
        console.log(err.name);
    }
    finally {
        //不論try跟catch的結果如何，都會執行
      }
}

//class
{
    class Car {
        //new一開始會執行constructor
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
    }
    let myCar1 = new Car("Ford", 2014);
}

//json
{
    //JSON.parse()可以解析json成物件或list的型態
    let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
    const obj = JSON.parse(text);
}