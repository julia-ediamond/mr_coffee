$(document).ready(function () {

    function SubmitContectForm(form) {

        console.log('Clicked button')
        form.submit();
        $('.contact-pop-up').dialog({
            modal: true,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        });
    };


    $(".contact-form").validate({
        rules: {
            user_name: 'required',
            lname: 'required',
            user_email: {
                required: true,
                email: true,
            },
            phoneNumber: {
                required: true,
                minlength: 9,
            },
            message: {
                required: true,
                minlength: 20,
            }
        },
        messages: {
            user_name: 'This field is required',
            lname: 'This field is required',
            user_email: 'Enter a valid email',
            phoneNumber: {
                minlength: 'Phone number must be at least 9 characters long'
            },
            message: 'Please enter your message'
        },
        submitHandler: SubmitContectForm
    });

})
