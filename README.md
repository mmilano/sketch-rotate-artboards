# Rotate Artboard Orientation

Simple plugin for Sketch to rotate the orientation of selected artboards. 

Akin to toggling between "landscape" to "portrait" orientation –- width becomes height, height becomes width. 

Exactly the same as manually doing the following:

1. selecting an artboard
1. changing the value of the width to be the value of the height, and changing the height to be the value of the width


## How To Use

1. Select one or more artboards
1. Run the plugin

### Usage Notes
* The plugin will disregard selected items that are not artboards.
* If no elements are selected, the plugin will simply do nothing.
* There is basic logging (to the Sketch plugin console) for each artboard rotated.

### Keyboard Shortcuts
None Assigned.



### Known Issues

**Artboard Overlap**

Currently, an artboard might be rotated and end up overlapping another artboard on the document.

Solution is to manually move the overlapping artboard(s) so that they do not overlap.



## Installation
### Install Manually
1. [Download the ZIP file](https://github.com/mmilano/sketch-rotate-artboards/archive/master.zip) and unzip.
1. In a new Finder window, navigate to Users/[YOUR USERNAME]/Library/Application Support/com.bohemiancoding.sketch3/Plugins. From the terminal, this is 
`~/Library/Application Support/com.bohemiancoding.sketch3/Plugins.`

   You can also get to this directory from within Sketch:
   Sketch > Preferences > Plugins.  Using the tiny gear menu, select "Show Plugins Folder."

1. Manually copy the plugin file `rotate-artboards.sketchplugin` into this destination.


### Install With A Double-Click
1. [Download the ZIP file](https://github.com/mmilano/sketch-rotate-artboards/archive/master.zip) and unzip.
1. Double-click the file `rotate-artboards.sketchplugin`.
1. If Sketch is not already running, it will launch.
1. A dialog should display asking you to confirm that you want to install the plugin file.
1. A successful installation will display a confirmation of success dialog.


### Have The Machines Handle Installation
1. Install using Sketch Toolbox


## Contributors
* [mmilano](https://github.com/mmilano) # Author


## Change Log
v1.0.1: 2017-02-25

* Adjust menu behavior so that main command it root (i.e. no need for a redundant submenu)
* Cleanup of some vestigal code.

v1.0: 2017-02-21 

* Initial release


## License
Apache License
