<?php
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
 * global settings page for block_navigationbs
 * @package     block_navigationbs
 * @copyright   Synergy Learning
 * @author      Gerry G Hall 2016
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/** @var $settings \admin_settingpage */
$settings->add(new admin_setting_heading(
    'headerconfig',
    get_string('headerconfig', 'block_navigationbs'),
    get_string('descconfig', 'block_navigationbs')
));

$settings->add(new admin_setting_configcolourpicker(
    'block_navigationbs/completion_colour',
    get_string('completion_colour', 'block_navigationbs'),
    get_string('completion_colour_desc', 'block_navigationbs'),
    '0'
));