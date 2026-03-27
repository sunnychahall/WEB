// let months = ["january", "july", "march", "august"];
// months.splice(0, 1);
// months.splice(1, 0,  "june");
// console.log(months);



// let lan = ["c", "java", "ruby", "javascript", "python", "react"];



// console.log(lan.reverse().indexOf("javascript"));


// let num = [1, 2, 3, 4];
// n = 3;
// console.log(num.slice(0, 3));
// console.log(num.slice(-n));


// let str = "iwek";

// if (str.length === 0)
// {
//     console.log("Yes");
// }
// else
// {
//     console.log("No");
// }


// let s = "TomY";
// index = 2;
// if (s[index] == s[index].toLowerCase())
// {
//     console.log("Yes");
// }

// else{
//     console.log("No");
// }


// let s = prompt("String: ");
// console.log(`without space ${s.trim()}`);


// let num = [2, 4, 6];
// n = 4;
// if (num.indexOf(n) === -1)
// {
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// let num = 234
// let count = 0;
// while (num > 0)
// {
//     count++;
//     num = Math.floor(num / 10);
// }

// console.log(count);


// let num = 235
// let sum = 0;
// while (num > 0)
// {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }

// console.log(sum);

// let random = Math.floor(Math.random() * 100) + 1;
// console.log(random);

// avg = 3 + 4;
// a = avg / 2;
// console.log(a);


// function OddEven(request)
// {
//     if (request == "odd")
//     {
//        let odd = function(n)
//        {
//         if ((n % 2) != 0)
//         {
//             console.log("true");
//         }
//         else{
//             console.log("false");
//         }
//        }
//        return odd;
//     }
    
//     else if (request == "even")
//     {
//         let even = function(n)
//         {
//             console.log(n % 2 == 0);
//         }
//         return even;
//     }

//     else{
//         console.log("invalid");
//     }
// }

// let fun = OddEven("even");
// let req = 5
// OddEven(req);


let s = "abbccd";

let removeDup = function(str) {
    let ans = "";
    
    for (let i = 0; i < str.length; i++) {
        let curr = str[i];
        
        if (ans.indexOf(curr) == -1) {
            ans += curr;
        }
    }
    
    return ans;
}

console.log(removeDup(s));