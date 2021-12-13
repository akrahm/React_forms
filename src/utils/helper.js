export const NAME_LENGTH = 5;
export const DESC_LENGTH = 10;


export function validatedropdown(value,label){
    let error = false;
    let Alrt = "";
    if(!value){
        error = true;
        Alrt = `${label} cannot be empty`;
    }
    let res = {
        value:value,
        error:error,
        Alrt:Alrt
    };
    return res;
}

export function validateemail(value,label){
    let error = false;
    let Alrt = "";
    if(!value){
        error = true;
        Alrt = `${label} cannot be empty`;
    }
    let res = {
        value:value,
        error:error,
        Alrt:Alrt
    };
    return res;
}

export function validatetext(value,label,minLength){
    let error = false;
    let Alrt = "";
    if(value?.trim()==="" || value === null){
        error = true;
        Alrt = `${label} cannot be empty`;
    }
    let res = {
        value:value,
        error:error,
        Alrt:Alrt
    };
    return res;
}

export function validateArr(value){
    let Arr1 = [...value];
    for(let i=0; i<Arr1.length; i++){
        if(Arr1[i]?.required){
            let res = Arr1[i].validateFunc(Arr1[i].value,Arr1[i].heading,Arr1[i].validateMaxLen);
            Arr1[i].error = res.error;
            Arr1[i].errorMsg = res.Alrt;
        }
    }
    return Arr1;
}