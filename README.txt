This file is part of Moodle - http://moodle.org/

Moodle is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Moodle is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 *
 * @package     block_navigationbs
 * @copyright   Synergy Learning
 * @author      Michael Slevin
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

Custom Navigation block for Berlin School of Economics courses
==========================

# Adding this block to a course and also all course activities automatically #

This Navigation block can be displayed on a Course and all of that Course's Activity
pages automatically by adding it to the 'Course' page. i.e. /course/index.php

The method for doing this as an Admin User is outlined below:
1. Browse to a parent course page within a course category.
2. Click the 'Turn editing on' button located at the top right of the page.
3. Locate the 'Add a block' feature and select 'Navigation Tracking' block.
4. Once the page reloads and the Navigation Tracking block is shown open the 'Actions'
menu from the block header and selct 'Configure Navigation Tracking block' to display
the configuration input fields.
5. Within the 'Where this block appears' section set:
'Custom instance name' to whatever title is reqiured;
'Display on page types' to 'Any page';
'Default region' to 'Left';
'Default weight' to '-10 (first)'.
6. Within the 'On this page' section set:
'Visible' to 'Yes';
'Region' to 'Left';
'Weight' to '-10 (first)'.
7. Click 'Save changes'
8. Click the 'Turn editing off' button.
