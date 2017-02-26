// Rotate Artboard Orientation
// author: Michel Milano
// — Source code available at [GitHub](https://github.com/???/plugins.rotate-artboard)
//
// Rotates the currently selected artboard(s)_' orientation, portrait to landscape -
// width becomes the height, height becomes the width.


var APP = NSApplication.sharedApplication;

function onRun(context) {

    var Sketch = context.api();

    var selectedItems = context.selection;
    var selectedCount = selectedItems.count();

    if (selectedCount == 0) {
        log('Nothing selected.');
    } 
    else {
        log('Selected items: \n');
        for (var i = 0; i < selectedCount; i++) {
            var item = selectedItems[i];

            if (item.className() != 'MSArtboardGroup') {
                log ("selection #" +(i+1)+ " is not an artboard");
            } else {
                log ("selection #" +(i+1)+ " is an artboard");

                var artboard = item;
                var existing_width = artboard.frame().width();
                var existing_height = artboard.frame().height();
                
                // flip the orientation
                var new_width = existing_height;
                var new_height = existing_width;
                artboard.frame().setWidth(new_width);
                artboard.frame().setHeight(new_height);
                
                log ("Changed orientation of artboard: " + item.name());
                log ("old dimensions: " + existing_width +"," + existing_height);
                log ("new dimensions: " + new_width +"," + new_height);           
            };
        log ("\r");
        };
    };
};

