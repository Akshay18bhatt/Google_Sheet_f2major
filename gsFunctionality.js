let activeCellId= null;

let activeCell= document.getElementById("activeCell");
let form = document.getElementById("form");

form.addEventListener("change", onChangeFormData);

// hashMap for the cells
let state={};

const defaultStyles= {
    fontFamily: "",
    fontSize:16,
    isBold:false,
    isItalic:false,
    isUnderline:false,
    align:screenLeft,
    fontColor: "#000000",
    bgColor: "#eaddcd"

}

function onChangeCellText(e){
    let changedText= e.target.innerText;
    // console.log(changedText);
    
    if(state[activeCellId]){
        state[activeCellId].text= changedText;
    }
    else{
        state[activeCellId]= {...defaultStyles,text:changedText};
    }
}

function onChangeFormData(){
    let styles= {
        fontFamily: form.fontFamily.value,
        fontSize: form.fontSize.value,
        isBold: form.isBold.checked,
        isItalic: form.isItalic.checked,
        isUnderline: form.isUnderline.checked,
        align: form.align.value,
        fontColor: form.fontColor.value,
        bgColor: form.bgColor.value
    }
    applyStyles(styles);
}

function applyStyles(styles){

    if(!activeCellId){
        form.reset();
        alert("Please select a cell!");
        return;
    }

    let activeCell= document.getElementById(activeCellId);
    // console.log(activeCell);

    // Applying styles to that selected cell
    activeCell.style.fontFamily= styles.fontFamily;
    activeCell.style.fontSize= styles.fontSize +"px";
    activeCell.style.fontWeight= styles.isBold?"700":"400";
    activeCell.style.fontStyle= styles.isItalic?"italic":"normal";
    activeCell.style.textDecoration= styles.isUnderline?"underline":"none";
    activeCell.style.textAlign= styles.align;
    activeCell.style.color= styles.fontColor;
    activeCell.style.backgroundColor= styles.bgColor;

    // Now to avoid that after this every other cell does not get this
    // same styling we will maintain a hashmap and we will check
    // if this cell id is there in map or not
    // If yes- we will extract that styling and apply again
    // If no- we will reset the whole styling

    // Refer to OnFocusingCell function 

    state[activeCellId]= {...styles, text:activeCell.innerText};
    // console.log(state);
    
}
function onFocusingCell(event){
    activeCellId=event.target.id;
    // console.log(activeCellId);
    activeCell.innerText=activeCellId;

    // if it present in hashmap continue with its previous 
    // styling
    if(state[activeCellId]){

        let styles= state[activeCellId];
        // console.log(styles);
        form.fontFamily.value = styles.fontFamily;
        form.fontSize.value = styles.fontSize;
        form.isBold.checked = styles.isBold;
        form.isItalic.checked = styles.isItalic;
        form.isUnderline.checked = styles.isUnderline;
        form.align.value = styles.align;
        form.fontColor.value = styles.fontColor;
        form.bgColor.value = styles.bgColor;
    }
    else{
        // reset with the default
        form.reset();
    }
}