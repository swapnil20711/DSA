// Max points you can obtain from n cards
// either from front or from back
// lsum=0,rsum=0
// [6,2,3,4,7,2,1,7,1] 
// lsum = 15 rsum=0 sum=15
// 3 front 1 back
// lsum=15-4 = 11 rsum=1 sum=12
// lsum=8 rsum=8 sum=16 
// lsum=6 rsum=9 sum=15
// lsum=0 rsum=11 sum=11
// max will be 16

let arr = [6, 2, 3, 4, 7, 2, 1, 7, 1], k = 4;
let leftSum = 0, rightSum = 0, maxSum = 0,rightIndex = arr.length-1;

for (let i = 0; i < k; i++) {
    leftSum += arr[i]
}

maxSum = leftSum;

for(let i=k-1;i>=0;i--){
    leftSum-=arr[i];
    rightSum+=arr[rightIndex];
    rightIndex--;
    maxSum = Math.max(maxSum,leftSum+rightSum)
}


console.log('maxSum : ',maxSum)
// TC: O(2K)