"use strict";

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */

module.exports = {
    maksym: {
        area: "frontend",
        name: "Elogic/maksym",
        locale: "en_US",
        files: ["css/styles-m", "css/styles-l"],
        dsl: "less",
    },
};
