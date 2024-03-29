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
            $("#container").hide()
            $("#highLighted").html($("#email").val());
            $("#successSection").css("display", "flex").show("slow");
            if ($(".errorInput")){
                $errorLabel.hide();
                $email.removeClass('errorInput');
            }
            return false;
        }
    })
    $("#buttonForSuccessPage").on("click", () => {
        $("#successSection").hide();
        document.querySelector("#email").value = "";
        $("#container").show();

        return true;
    })

});