/**
 * @fileoverview Footer Module
 * @author Box
 */

/*
 * Manages the footer module, including todo counts and filters
 */
Application.addModule('test', function (context) {

    'use strict';

    //--------------------------------------------------------------------------
    // Private
    //--------------------------------------------------------------------------

    var test;

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        /**
         * Initializes the module. Caches a data store object to todos
         * @returns {void}
         */
        init: function () {
            test = '';
        },

        /**
         * Destroys the module.
         * @returns {void}
         */
        destroy: function () {
            test = null;
        },

        /**
         * Handles the click event for the module.
         * @param {Event} event A DOM-normalized event object.
         * @param {HTMLElement} element The nearest HTML element with a data-type
         *      attribute specified or null if there is none.
         * @param {string} elementType The value of data-type for the nearest
         *      element with that attribute specified or null if there is none.
         * @returns {void}
         */
        onmouseover: function (event) {

            // code to be run when a click occurs
            console.log(event);
        }

    };
});
