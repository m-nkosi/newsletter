$(document).ready(() => {
    const $form = $('form');
    let $email = $("#email");
    let $errorLabel = $("#errorLabel");
    // javaScript check email
    let email = document.getElementById("email");
    $form.on("submit",() => {
        if (!email.validity.valid || email.value ==='' || email.value === null ){
            $errorLabel.show();
            $email.addClass('errorInput');
            return false;
        }else{
            $("#container").fadeOut();
            $("#successSection").css("display", "flex").fadeIn("slow");
            if ($(".errorInput")){
                $errorLabel.hide();
                $email.removeClass('errorInput');
            }
            return false;
        }
    })
    $("#buttonForSuccessPage").on("click", () => {
        $("#successSection").fadeOut();
        document.querySelector("#email").value = "";
        $("#container").fadeIn("slow");

        return true;
    })

});