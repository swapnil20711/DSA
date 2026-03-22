// longest subarray with sum <=k
// brute, better, optimal
// Generate all subarrays

let arr = [2,5,1,7,10]
let k = 14

let maxLen = 0,left=0,right=0,sum=0;
// for(let i=0;i<arr.length;i++){
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//         sum +=  arr[j]
//         // console.log(sum)
//         // console.log(k)
//         // console.log(sum<=k)
        
//         if(sum<=k){
//             maxLen = Math.max(maxLen,j-i+1);
//         }else if(sum>k){
//             break;
//         }
//     }
// }

// console.log(maxLen)



//better use two pointers
// TC -> O(N+N)
// while(right<arr.length-1){
//     sum+= arr[right];
//     while(sum>k){
//         sum = sum -arr[left];
//         left++;
//     }
//     if(sum<=k){
//         maxLen = Math.max(maxLen,right-left+1);
//     }
//     right++;
// }

//optimal approach
while(right<arr.length-1){
    sum+= arr[right];
    if(sum>k){
        sum = sum -arr[left];
        left++;
    }
    if(sum<=k){
        maxLen = Math.max(maxLen,right-left+1);
    }
    right++;
}

console.log('maxLen is : ',maxLen)
