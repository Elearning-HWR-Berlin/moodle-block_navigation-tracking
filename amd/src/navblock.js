// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Load the navigation  javascript.
 *
 * @package     block_navigationbs
 * @copyright   Synergy Learning
 * @author      Gerry G Hall 2016
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery' , 'core/url'], function($, url) {

    return {

        init: function() {

            var clicked = function (sectionBody, parentElem, toggle) {
                if (parentElem.hasClass('expanded')) {
                    sectionBody.slideUp('slow', collapsed(parentElem, toggle));
                } else {
                    sectionBody.slideDown('slow', expanded(parentElem, toggle));
                }
            };

            var expanded = function (parentElem, toggle) {

                parentElem.attr('aria-expanded', 'true').toggleClass('expanded');
                toggle.attr('src', url.imageUrl('expanded', 'block_navigationbs'));

            };

            var collapsed = function (parentElem, toggle) {

                parentElem.attr('aria-expanded', 'false').toggleClass('expanded');
                toggle.attr('src', url.imageUrl('collapsed', 'block_navigationbs'));

            };

            $('.block_navigationbs').on('click', 'div.section:not(.empty) span.chevron', this, function () {

                var elem = $(this);
                var parentElem = elem.closest('div.section');
                var sectionBody = parentElem.children('div.sectionbody');
                clicked(sectionBody, parentElem, elem.children('img'));

            });
        }
    };
});
