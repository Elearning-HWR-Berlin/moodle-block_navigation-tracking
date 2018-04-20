# Navigation Tracking Moodle Plugin

## Description
The Navigation Tracking block plugin for Moodle improves course navigation with a better usability/ user experience by:
* aggregating all topics and activities/resources of one course (order mirrored from course)
* making the topics collapsible with the 'active' topic opened on page load
* indicating topic progress and completion of individual activities/ resources (green = completed; blank background = not started; bold text & light grey = in progress)
* adding icons for activities/ resources to indicate the type of activity/ resource


## Credits

The plugin was developed by [Synergy Learning](http://www.synergy-learning.com) based on a concept by [Björn Lefers](http://www.lefers.com) as part of his work in a project team that developed a [blended learning degree program in Business Adminstration at HWR Berlin](http://www.hwr-berlin.de/fachbereich-wirtschaftswissenschaften/studiengaenge/business-administration-ba/blended-learning-format/). 

## Version

The plugin is released under [GNU GPL v3 or later](http://www.gnu.org/copyleft/gpl.html). It has been tested and is running on Moodle version 3.3. at HWR Berlin (it has not, yet, been tested for Moodle versions 3.4./ 3.5., but we are planning to do so in August/September 2018). 

Please be aware that the plugin was designed to match the [Lambda Theme](https://themeforest.net/item/lambda-responsive-moodle-theme/9442816), which is not available for free.

## Install

How to install Moodle plugins is described here: https://docs.moodle.org/33/en/Installing_plugins#Installing_a_plugin 

## Configuration

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
* 'Custom instance name' to whatever title is reqiured;
* 'Display on page types' to 'Any page';
* 'Default region' to 'Left';
* 'Default weight' to '-10 (first)'.
6. Within the 'On this page' section set:
* 'Visible' to 'Yes';
* 'Region' to 'Left';
* 'Weight' to '-10 (first)'.
7. Click 'Save changes'
8. Click the 'Turn editing off' button.

## Contribute

We are currently looking for developers to help us maintain the plugin in the future! If you are interested please shoot a message to: bjoern.lefers@hwr-berlin.de 
