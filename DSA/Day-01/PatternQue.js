let n = 5;
for (let i=1 ;i<=n;i++){
    console.log('*'.repeat(i));
}


// without repeate  
// let p = 5;
// for (let i=1 ;i<=p;i++){
//     let str = '';
//     for (let j=1;j<=i;j++){
//         str += '*';
//     }
//     console.log(str);
// }


let P=5;
for (let i =1; i<=P; i++){
    let str= '';
    for (let j=1; j<=i ; j++){
        str += '*';
    }
    console.log(str);
}

let C=5;
for (let i =C; i>=1;i--){
    let str= '';
    for (let j=1; j<=i ; j++){
        str += '*';
    }
    console.log(str);
}


// let r=4 , c=5;
// for (let i =1; i<=r; i++){
//     let str= '';
//     for (let j=1; j<=c ; j++){
//         str += '*';
//     }
//     console.log(str);
// }

 let r=4 , c=4;
 for (let i =1; i<=r; i++){
     let str= '';
     for (let j=1; j<=c ; j++){
       if (i===1 || i===r || j===1 || j===c){
        str += '*';
       }else{
        str += ' ';
       }
     }
     console.log(str);
 }

