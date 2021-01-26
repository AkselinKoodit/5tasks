
function military() {
    let age = Number(document.getElementById("age").value);
    let answer = document.getElementById("answer");
    if(age<18) {
        return answer.textContent="Too young";
    } else if (age<27) {
        return answer.textContent="Right age for military";
    } else if (age<41){
        return answer.textContent="You are in reserve";
    } else if (age<51) {
        answer.textContent='You are in backup reserve';
    } else {
        return answer.textContent='Too old for fightning gramps(/grams)!';
    }
}

calculate=()=> {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let third = Number(document.getElementById("third").value);
    let sum = first+second+third;
    let multi = first*second*third;

    if(first>=0&&second>=0&&third>=0) {
        return answer2.textContent = ("Sum of numbers is "+sum+" and multiplication of the numbers is "+multi);
    } else if (first>=0||second>=0||third>=0) {
        return answer2.textContent = ("Sum of numbers is "+sum);
    } else if(first<0&&second<0&&third<0) {
        return answer2.textContent = "All negatives";
    } else {
        return answer2.textContent = "Something's fishy...";
    }
}

checkNum=()=> {
    let answer3 = document.getElementById("answer3");
    let number = Number(document.getElementById("number").value);
    if(number<0) {
        return answer3.textContent = "Yeah so that's a negative number. Try givin me a positive one";
    } else if (number%2==0) {
        return answer3.textContent = "The number is even";
    } else {
        return answer3.textContent = "The nunmber is odd";
    }
}

bmi=()=> {
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let bmi = Math.round(weight/(height/100*height/100));
    if(bmi<18.5){
        return answer4.textContent = "Your BMI is "+bmi+" which means you're underweight (BMI<18,5)";
    } else if (bmi<25) {
        return answer4.textContent = "Your BMI is "+bmi+" which means you're normal weight (BMI 18.5-25)";
    }  else if (bmi<30) {
        return answer4.textContent = "Your BMI is "+bmi+" which means you're overweight (BMI25-30)";
    } else {
        return answer4.textContent = "Your BMI is "+bmi+" which means you're obese (BMI=<30)";
    }              
    // if(bmi<18.5) {
    //     return answer2.textContent = (bmi+", BMI below 18,5 is underweight");
    // } else if (first>=0||second>=0||third>=0) {
    //     return answer2.textContent = ("Sum of numbers is "+sum);
    // } else if(first<0&&second<0&&third<0) {
    //     return answer2.textContent = "All negatives";
    // } else {
    //     return answer2.textContent = "Something's fishy...";
    // }
}

salaryTotal=()=> {
    let salary = Number(document.getElementById("salary").value);
    let hours = Number(document.getElementById("hours").value);
    let total = hours*salary;
    if(hours>7&&hours<=9){
        total+=((total-7)*0.5);
    } else if (hours>9){
        total+=salary*2*0.5+(hours-9)*salary;
    }
    return answer5.textContent = total;
             
}