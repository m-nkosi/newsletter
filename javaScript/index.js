$(document).ready(() => {
    const $form = $('form');
    let $email = $("#email");
    let $errorLabel = $("#errorLabel");
    // javaScript check email
    let email = document.getElementById("email");
    $form.on("submit",() => {
        if (!email.validity.valid){
            $errorLabel.show();
            $email.addClass('errorInput');
            return false;
        }
    })

});