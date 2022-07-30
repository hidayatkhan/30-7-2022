function gold(){
    let goldmAount=document.getElementById('goldAmount').value; 
    if(goldmAount>7.5)
    {
        document.getElementById('showresult').innerText=goldmAount*120000/40;
    }
    else{
        document.getElementById('showresult').innerHTML="Your Zakat is not Applicable";
    }


}


function silver(){ 
    let silverAmount= document.getElementById('silverAmount').value;
    if(silverAmount>52.5)
    {
        document.getElementById('result').innerText=silverAmount*1620/40;
    }
    else{
        document.getElementById('result').innerText="Your Zakat is not applicable";
    }
}

function cash(){
    let cashAmount=document.getElementById('cashAmount').value;
    if(cashAmount>85050) 
    {
document.getElementById('cashResult').innerText=cashAmount/40;
}
else{
    document.getElementById('cashResult').innerText="Your Zakat in not applicable";
}}