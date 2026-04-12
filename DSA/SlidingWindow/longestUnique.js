// s = cadbzabcd
// length = 5 output
//brute force approach

let s = "cadbzabcd"
// 012345678
// cadbzabcd
let maxLen = 0,len=0,l=0,r=0,n=s.length;

// for(let i=0;i<s.length;i++){
//     let hash={}
//     for(let j=i;j<s.length;j++){
//         if(hash[s[j]]===1) break;
//         len = j-i+1;
//         maxLen = Math.max(maxLen,len);
//         hash[s[j]]=1;
//     }
// }

let hash = Array.from({ length: 256 }, () => -1);
//cadbzabcd
//11111

while(r<n){
    let code = s[r].charCodeAt(0);   
    if(hash[code]!=-1){
        if(hash[code]>=l){
            l = hash[code]+1;
        }
    }   
    len = r-l+1;
    maxLen = Math.max(maxLen,len);
    hash[code]=r;
    r++;
}


console.log("maxLen is : ",maxLen)