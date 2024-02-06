let firstInput= document.getElementById("searched_text");
let second_input= document.getElementById("replacing_txt");
let fnrBtn= document.getElementById("fnr-btn");


fnrBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log("hii");
    let searched_text= firstInput.value;
    let replacing_txt= second_input.value;
    // console.log(searched_text,replacing_txt);        

    for(let i=1;i<=rows;i++){
        for(let j=1;j<columns;j++){

            let presentCellId= String.fromCharCode(64+j)+i;
            // console.log(presentCellId);
            let presentCell= document.getElementById(presentCellId);
            // console.log(presentCell);
            let text= presentCell.innerHTML;
            // console.log(text);
            
            if(text.includes(searched_text)){
                presentCell.innerHTML="";
                presentCell.innerHTML=text.replace(searched_text,replacing_txt);
                state[presentCellId].text= replacing_txt;
            }
            else{

            } 
        }
    }

})

