var successM = document.getElementById("success"),
    main = document.getElementById("main"),
    dimissBtn = document.getElementById("dismiss"),
    errM = document.getElementById("err"),
    emailInput = document.getElementById("em");

// email Validation function
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

window.onsubmit = () => {
    if (validateEmail(emailInput.value)) {
        // success
        successM.classList.add("show");
        main.classList.add("hide");
        emailInput.classList.remove("err-input");
        errM.classList.add("hide");
        window.scrollTo(0, 0);
        document.body.style = "overflow-y: hidden"; 
    } else {
        // error
        emailInput.classList.add("err-input");
        errM.classList.remove("hide");
    }
}

// styles when close success message
dimissBtn.onclick = () => {
    successM.classList.remove("show");
    main.classList.remove("hide");
    document.body.style = "overflow-y: auto"; 
}

// styles on error
emailInput.oninput = () => {
    errM.classList.add("hide");
    emailInput.classList.remove("err-input");
}