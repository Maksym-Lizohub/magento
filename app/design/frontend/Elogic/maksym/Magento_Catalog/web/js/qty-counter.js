define(["jquery"], function ($) {
    ("use strict");

    $(function () {
        $("button.adds").on("click", add);
        $("button.subs").on("click", remove);
    });

    function add() {
        var input = $("input.qty"),
            value = input.val();

        input.val(++value);

        if (value > 0) {
            $("button.subs").removeAttr("disabled");
        }
    }

    function remove() {
        var input = $("input.qty"),
            value = input.val();

        if (value > 1) {
            input.val(--value);
        } else {
            $("button.subs").attr("disabled", "disabled");
        }
    }
});
