$("#togel1").click(
    function () {
        // $("input[type=checkbox]").attr("checked",!toggle); toggle = !toggle; 
        if ($("#togel1").prop("checked") == true) {
            $("#isi1-1").addClass("sembunyi");
            $("#isi1-2").removeClass("sembunyi");
        }
        else { 
            $("#isi1-2").addClass("sembunyi");
            $("#isi1-1").removeClass("sembunyi");
        } //default
    }
);