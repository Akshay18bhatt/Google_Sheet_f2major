

function downloadText(){
    let data= JSON.stringify(state);
    
    // console.log(data);

    let blob = new Blob([data], {type:"text/plain"});
    // console.log(blob);
    
    const url= URL.createObjectURL(blob);
    // console.log(url);
    let anc= document.createElement("a");
    anc.href= url;
    anc.download="temp.txt";
    anc.click();
}

