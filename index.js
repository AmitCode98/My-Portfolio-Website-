// !form validation

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const Pnumber = document.getElementById('Pnumber')
const subject = document.getElementById('subject')
const textarea = document.getElementById('textarea')

// !Add event

form.addEventListener('submit', (event) => {
    event.preventDefault();
    Validate();

})

// !Define Validate Funcation

const Validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const PnumberVal = Pnumber.value.trim();
    const subjectVal = subject.value.trim();
    const textareaVal = textarea.value.trim();

    //?validate username

    if (usernameVal === " ") {
        setErrorMsg(usernameVal, 'username cannot ne blank');
    }
    else if (usernameVal.length <= 2) {
        setErrorMsg(usernameVal, 'usename min 3 charactor');
    }
    else {
        setSuccessMsg(usernameVal);
    }




     //!more email validation

    const isEmail =(emailVal)=>{
        var atSymbol = emailVal.indexOf("@");
        if(atSymbol < 1)return false;

        var dot=emailVal.lastIndexof('.');
        if(dot <= atSymbol+2)return false;
        if(dot=== emailVal.length-1)return false;
        return true;
    }

    //?validate Email

    if (emailVal === " ") {
        setErrorMsg(emailVal, 'email cannot ne blank');
    }
    else if (!isEmail(emailVal) ) {
        setErrorMsg(emailVal, 'Not a valid email');
    }
    else {
        setSuccessMsg(emailVal);
    }
}



