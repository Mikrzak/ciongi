onload = function(){
    var boom = document.getElementById("boom");
    var sobbing = document.getElementById("sobbing");
    var outro = document.getElementById("outro");
    sobbing.volume = 0.1;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function playSobbing() { 
    sobbing.play(); 
}

async function Evaluate(){
    outro.play();
    await sleep(7500);
    boom.play(); 
    var a1, r, q, Sn, isAry, isInf, n, amount;
    a1 = parseFloat(document.getElementById("a1").value);
    rq = parseFloat(document.getElementById("rq").value);
    // Sn = parseFloat(document.getElementById("Sn").value);
    isAry = parseInt(document.getElementById("isAry").value);
    isInf = parseInt(document.getElementById("isInf").value);
    n = parseFloat(document.getElementById("n").value);
    amount = parseInt(document.getElementById("amount").value);
    num1 = parseFloat(document.getElementById("seq1").value);
    num2 = parseFloat(document.getElementById("seq2").value);
    num3 = parseFloat(document.getElementById("seq3").value);
    // console.log(a1,rq,n,amount, isInf);
    if(!isNaN(a1) && !isNaN(rq)){
        if(isAry == 1 ){

            if(!isNaN(n))
                document.getElementById("an").innerHTML = "a(" + n + ") = " + (a1 + ((n-1) * rq));

            if(!isNaN(amount) || isInf == 1){
                if(isInf == 0)
                    document.getElementById("Snout").innerHTML = "S(" + amount + ") = " + (((2 * a1 + (amount-1) * rq)/2) * amount);
                else{
                    if(rq < 1)
                        document.getElementById("Snout").innerHTML = "S(n) = - nieskończoność";
                    else if(rq > 1)
                        document.getElementById("Snout").innerHTML = "S(n) = + nieskończoność";
                    else if(rq == 1)
                        document.getElementById("Snout").innerHTML = "S(n) = " + a1;
                }
            }
        }
        else if(isAry == 0){
            if(!isNaN(n))
                document.getElementById("an").innerHTML = "a(" + n + ") = " + (a1 * Math.pow(rq, n-1));
            if(!isNaN(amount) || isInf == 1){
                if(isInf == 0)
                    document.getElementById("Snout").innerHTML = "S(" + amount + ") = " + (a1 * (1 - (Math.pow(rq,amount)) / (1-rq)));
                else{
                    if(Math.abs(rq) < 1)
                        document.getElementById("Snout").innerHTML = "S = " + (a1/(1-rq));
                    else if(rq == 1)
                        document.getElementById("Snout").innerHTML = "S(n) = " + a1;
                    else
                        document.getElementById("Snout").innerHTML = "S(n) = + nieskończoność";
                }
            }
        }

    }

    if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
        console.log(num1,num2,num3);
        document.getElementById("typeout").innerHTML = "";
        if(num1 == num2 && num1 == num3)
            document.getElementById("typeout").innerHTML += "Ciąg jest stały, arytmetyczny i geometryczny (r = q = 1)";
        else if(num1 > num2 && num2 > num3)
            document.getElementById("typeout").innerHTML += "Ciąg jest malejący";
        else if((num1 == num2 && num2 >= num3) || (num1 >= num2 && num2 == num3))
            document.getElementById("typeout").innerHTML += "Ciąg jest nierosnący";
        else if(num1 < num2 && num2 < num3)
            document.getElementById("typeout").innerHTML += "Ciąg jest rosnący";
        else if((num1 < num2 && num2 == num3) || (num1 == num2 && num2 < num3))
            document.getElementById("typeout").innerHTML += "Ciąg jest niemalejący";
        else
            document.getElementById("typeout").innerHTML += "Ciąg nie jest monotoniczny";
        if(num2 - num1 == num3 - num2)
            document.getElementById("typeout").innerHTML += ", jest arytmetyczny, r = " + (num2-num1);
        else if(num2 / num1 == num3 / num2)
        document.getElementById("typeout").innerHTML += ", jest geometryczny, q = " + (num2/num1)   ;
    }
    // await sleep(20000);
    // txt = ""
    // for(var i = 0; i < 1000; i++){
    //     //txt += "#";
    //     document.getElementById("Snout").innerHTML += "#";
    //     document.getElementById("typeout").innerHTML += "#";
    //     document.getElementById("an").innerHTML += "#";
    //     document.getElementById("labelsus1").innerHTML += "#";
    //     document.getElementById("labelsus2").innerHTML += "#";
    //     document.getElementById("labelsus3").innerHTML += "#";
    //     document.getElementById("labelsus4").innerHTML += "#";
    //     document.getElementById("labelsus5").innerHTML += "#";
    // }
    // await sleep(2500)
    // while(true){
    //     //txt += "#";
    //     document.getElementById("Snout").innerHTML += "#";
    //     document.getElementById("typeout").innerHTML += "#";
    //     document.getElementById("an").innerHTML += "#";
    //     document.getElementById("labelsus").innerHTML += "#";
    //     console.log(txt);
    // }
}
