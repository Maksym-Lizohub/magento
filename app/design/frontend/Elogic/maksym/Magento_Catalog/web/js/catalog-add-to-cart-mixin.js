define(["jquery"], function ($) {
    "use strict";
    return function (widget) {
        $.widget("mage.catalogAddToCart", widget, {
            /**
             * Handler for the form 'submit' event
             *
             * @param {Object} form
             */
            submitForm: function (form) {
                this.showCart();
                this.ajaxSubmit(form);
            },
            /**
             * Open minicart when Add To Cart has been clicked
             */
            showCart: function () {
                let self = this;
                $(".block-minicart").dropdownDialog("open");
                $(this.options.dropdownDialogSelector).addClass("active");
                $(this.options.minicartSelector).on(
                    "contentLoading",
                    function () {
                        $(self.options.dropdownDialogSelector).removeClass(
                            "action"
                        );
                    }
                );
            },
        });
        return $.mage.catalogAddToCart;
    };
});
