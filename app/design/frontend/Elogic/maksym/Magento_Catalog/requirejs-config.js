var config = {
    map: {
        "*": {
            qtyCounter: "Magento_Catalog/js/qty-counter",
        },
    },
    config: {
        mixins: {
            "Magento_Catalog/js/catalog-add-to-cart": {
                "Magento_Catalog/js/catalog-add-to-cart-mixin": true,
            },
        },
    },
};
