// Maximum sum in a window
let arr = [-1,2,3,3,4,5,-1]
let k =4;

let left=0,right=k-1;sum=0;

for(let i=left;i<=right;i++){
    sum+=arr[i];
}

let maxSum = sum;

while(right<arr.length-1){
    sum=sum-arr[left];
    left++;
    right++;
    sum = sum+arr[right];

    maxSum = Math.max(sum,maxSum);

}

console.log("maxSum is : ",maxSum)

