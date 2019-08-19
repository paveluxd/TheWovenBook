$(function () {
    var $form = $("#subscription");
    var $secondaryForm = $("#secondary-subscription");

    var onSubmit = function (e) {
        var $self = $(this);
        e.preventDefault();

        var email = $self.find("input[name=email]").val()
        if (email == '') {
            return;
        }

        var url = $self.attr('action');
        $.ajax({
            url: url,
            type: 'post',
            data: $self.serialize(),
            success: function (data) {
                showSuccessMessage();
            }
        });
    };

    $form.submit(onSubmit);
    $secondaryForm.submit(onSubmit);
});

function showSuccessMessage() {
    $("#success-message").show();
}
