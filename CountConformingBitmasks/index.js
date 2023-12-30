/* SOLUTION RETURNING 7 INSTEAD OF 8  IN THE TEST CASE*/
function solution(A, B, C) {
    // Implement your solution here
    //Helper functions
    const toBin = (N) =>{
        return  (N >>> 0).toString(2);

    }

    const toDec = (N) =>{
        return parseInt(N, 2)
    }

    //Total number is total unique numbers conforming for each ABC

    /*
    Dealing with one number eg A:
    - Generate the binary version of the number
        -convert to array for easier iteration
    - Get the set bits, bits set to one
        -set bits and their indices, other bit's and their indices
    - Generate all possible numbers with those set bits
        -Get other bit's as a number, all numbers from when all bit's are 0 to when 
        all bits    are one

    */
    const getConforms= (N)=>{
        let binNums = [];
        const binArr = toBin(N).split("");
        let setBits =[], otherBits =[];//indices where bit == 1
        
        for(let i=0;i<binArr.length;i++){
            if(binArr[i]==1){
                setBits.push(i);
            }
            else{
                otherBits.push(i)
            }
        }
        console.log("setBits",setBits)
        console.log("otherBits",otherBits)
        //create a number from other bits
        let binNum= []
        for(let i=0; i<otherBits.length;i++){
            binNum.push('1')

        }
        console.log("binNum",binNum)
        let decNum = toDec(binNum.join(""));
        console.log("decNum",decNum)
        let currentNewBinNum = new Array(binArr.length).fill('1');
        for(let i=decNum;i>=0;i--){
            let currDecBinArr = toBin(decNum).split("");
            console.log("currDecBinArr",currDecBinArr)
            for(let i=otherBits.length;i>=0;i--){
                if(currDecBinArr[i]){
                    currentNewBinNum[otherBits[i]]=currDecBinArr[i]
  
                }

            }
            decNum--;
            console.log("currentNewBinNum",currentNewBinNum)
            binNums.push(currentNewBinNum.join(""))
        }

        console.log("binNums",binNums)
        return binNums


    }
    //Push unique numbers to conformingNumbers

    console.log("getConforms(A)",getConforms(A))
    console.log("getConforms(B)",getConforms(B))
    console.log("getConforms(C)",getConforms(C))

    // conformingNumbers.concat(getConforms(A),getConforms(B), getConforms(C))
    console.log("conformingNumbers",getConforms(A).concat(getConforms(B), getConforms(C)))
    // let conformingNumbers = getConforms(A).concat(getConforms(B), getConforms(C));
    let conformingNumbers = [...new Set(getConforms(A).concat(getConforms(B), getConforms(C)))];

    console.log("conformingNumbers",conformingNumbers)



    return conformingNumbers.length;


}



console.log("Solution",solution(1073741727, 1073741631, 1073741679))