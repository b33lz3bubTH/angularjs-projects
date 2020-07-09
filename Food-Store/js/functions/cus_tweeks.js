var selectedItemDB = [];
var _selectProduct = (obj) =>{
    for(i=0;i<selectedItemDB.length;i++){
        if(obj.icode == selectedItemDB[i].icode){
            prev = selectedItemDB.slice(0,i);
            next = selectedItemDB.slice(i+1,selectedItemDB.length);
            selectedItemDB = prev.concat(next);
            return selectedItemDB;
        }
    }
    selectedItemDB.push(obj);
}
var _isSelected = (iCode) =>{
    for(i=0;i<selectedItemDB.length;i++){
        if(selectedItemDB[i].icode == iCode){
            return 1;
        }
    }
    return 0;
}

var _debug_ = () =>{
    console.log(selectedItemDB);
}