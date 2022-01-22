function main(str1,str2){

    let carry = 0;
   
    let length = 0;
    
    let split1 = str1.split('');
    let split2 = str2.split('');

    if(split1.length < split2.length){
        let diff = split2.length - split1.length;
        for(let i=0; i < diff;i++){
            split1.unshift('0');
        }
    }else if(split1.length < split2.length){
        let diff = split1.length - split2.length;
        for(let i=0; i < diff;i++){
            split2.unshift('0');
        }
    }

    length = split1.length; 
    let sumArr = [];
   
    for(let i=length - 1; i >= 0;i--){
        let sum = parseInt(split1[i]) + parseInt(split2[i]);
        let num = sum.toString();
       
        if(num.length > 1 || carry > 0){
            sum = sum + carry;
            num = sum.toString();
        }
       
        carry = num.length > 1 ? parseInt(num[0]) : 0;       
        sumArr.push(num.length > 1 ? num[1] : num);
       
    }

    sumArr.reverse();
   
    let toString = sumArr.join('');
   
    return toString;
   
}

const str1 = "123456";
const str2 = "123456";
//435777

console.log(main(str1,str2));