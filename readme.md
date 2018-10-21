RESTFUL ROUTES

name       url                   verb        description
===========================================================================
INDEX     /campgrounds           GET         Display a list of all camp
NEW       /campgrounds/new       GET         Displays form to make a new camp
CREATE    /campgrounds           POST        Add new Campground to DB
SHOW      /campgrounds/:id       GET         Show info about one campground
EDIT      /campgrounds/:id/edit  GET         Show edit form of on camp
UPDATE    /campgrounds/:id       PUT         Update a particular camp, then redirect
DESTROY   /campgrounds/:id       DELETE      Delete a particular camp, then redirect