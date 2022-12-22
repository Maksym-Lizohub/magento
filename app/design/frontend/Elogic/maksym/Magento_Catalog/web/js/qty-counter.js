define(["jquery"], function ($) {
    ("use strict");

    $(function () {
        $("#adds").on("click", add);
        $("#subs").on("click", remove);
    });

    function add() {
        var input = $("input#qty"),
            value = input.val();

        input.val(++value);

        if (value > 0) {
            $("#subs").removeAttr("disabled");
        }
    }

    function remove() {
        var input = $("input#qty"),
            value = input.val();

        if (value > 1) {
            input.val(--value);
        } else {
            $("#subs").attr("disabled", "disabled");
        }
    }
});
