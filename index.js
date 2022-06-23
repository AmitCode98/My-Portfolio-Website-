// Preloder page function
// const preloder = document.getElementsByClassName('loading')
// function myFunction(){
//     preloder.style.display= 'none';
// }
window.onload =function(){
    document.getElementById("loading").style.display = "none"
}

//            // !form validation

// const form = document.getElementById('form')
// const username = document.getElementById('username')
// const email = document.getElementById('email')
// const Pnumber = document.getElementById('Pnumber')
// const subject = document.getElementById('subject')
// const textarea = document.getElementById('textarea')

//             // !Add event

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     Validate();

// })

//              // !Define Validate Funcation

// const Validate = () => {
//     const usernameVal = username.value.trim();
//     const emailVal = email.value.trim();
//     const PnumberVal = Pnumber.value.trim();
//     const subjectVal = subject.value.trim();
//     const textareaVal = textarea.value.trim();

//     //?validate username

//     if (usernameVal === " ") {
//         setErrorMsg(usernameVal, 'username cannot ne blank');
//     }
//     else if (usernameVal.length <= 2) {
//         setErrorMsg(usernameVal, 'usename min 3 charactor');
//     }
//     else {
//         setSuccessMsg(usernameVal);
//     }




//      //!more email validation

//     const isEmail =(emailVal)=>{
//         var atSymbol = emailVal.indexOf("@");
//         if(atSymbol < 1)return false;

//         var dot=emailVal.lastIndexof('.');
//         if(dot <= atSymbol+2)return false;
//         if(dot=== emailVal.length-1)return false;
//         return true;
//     }

//     //?validate Email

//     if (emailVal === " ") {
//         setErrorMsg(emailVal, 'email cannot ne blank');
//     }
//     else if (!isEmail(emailVal) ) {
//         setErrorMsg(emailVal, 'Not a valid email');
//     }
//     else {
//         setSuccessMsg(emailVal);
//     }
// }

// function setErrorMsg(input, errormsgs){

// }        


// <!-- Mobile Responsive Navbar Button Desigen -->

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active")
});

const homeM = document.querySelector(".home-link");
homeM.addEventListener("click", () => {
    headerElem.classList.toggle("active")
});  

const serviceM = document.querySelector(".services-link");
serviceM.addEventListener("click", () => {
    headerElem.classList.toggle("active")
});

const aboutM = document.querySelector(".about-link");
aboutM.addEventListener("click", () => {
    headerElem.classList.toggle("active")
});
const portfolioM = document.querySelector(".portfolio-link");
portfolioM.addEventListener("click", () => {
    headerElem.classList.toggle("active")
});
const contactM = document.querySelector(".contact-link");
contactM.addEventListener("click", () => {
    headerElem.classList.toggle("active")
});


// !Animated Number Counter Section

const workSection = document.querySelector('.section-work-data');
const workObserver = new IntersectionObserver(
    (entries, observer) => {
        const [entry] = entries;
        console.log(entry);

        if (entry.isIntersecting == false) return;

        // Add
        const counterNum = document.querySelectorAll(".counter-numbers");

        const speed = 200;

        counterNum.forEach((curElem) => {

            const updateNumber = () => {
                const targetNumber = parseInt(curElem.dataset.number);
                // console.log(targetNumber);

                const intialNum = parseInt(curElem.innerText);
                // console.log(intialNum);

                const incrementNumber = Math.trunc(targetNumber / speed);
                // console.log(incrementNumber);

                if (intialNum < targetNumber) {
                    curElem.innerText = `${intialNum + incrementNumber}+`;
                    setTimeout(updateNumber, 10);
                }
            };
            updateNumber();

        });
        observer.unobserve(workSection)

    }, {
    root: null,
    threshold: 0,

});

workObserver.observe(workSection);



                            //   Creating a Sticky Responsive navbar
const heroSection = document.querySelector(".section-hero");                           
                            
const observer =new IntersectionObserver((entries)=> {
    const ent =entries[0];
    console.log(ent)
    !ent.isIntersecting
    ?document.body.classList.add("sticky")
    :document.body.classList.remove("sticky")
} , {
    root: null,
    threshold:0,
}); 
observer.observe(heroSection);                           
