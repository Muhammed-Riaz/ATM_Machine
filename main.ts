#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let mypin = 1101;

let pinAnswer =await inquirer.prompt([{
    name:"Balance",
    message:"Enter your pin code",
    type:"number",
    
  }]);
if( pinAnswer.Balance === mypin){
    console.log(`your pin is correct`)
    
    let operationAns =await inquirer.prompt([{
        name:"operation",
        message:"please Select a option",
        choices:["withdraw","check current balance","get Balnce copy","recieved Date and time"],
        type:"list",
    }]);
    
   if(operationAns.operation ==="withdraw"){
    let amountAns = await inquirer.prompt([{
        name:"amount",
        message:"please enter your amount",
        type:"number",
        
    }]);
    if(amountAns.amount > myBalance){
        console.log(`your withdraw limit is ${myBalance}`)
    }else{
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is ${myBalance}`)
    };
    
}

else if(operationAns.operation ==="check current balance"){
    console.log(`your current balance is ${myBalance}`)
}

}

else{
    console.log('incorrect pin code')
};


