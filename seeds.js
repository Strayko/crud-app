var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus turpis sit amet lacinia pellentesque. Vestibulum pellentesque, libero eu tristique blandit, tellus velit sagittis dui, sit amet convallis mauris nunc id leo. Curabitur sollicitudin commodo feugiat. Aenean mattis, libero et tempor accumsan, ipsum purus placerat mauris, vitae dictum ipsum velit non mauris. Suspendisse vestibulum sit amet nunc vitae ornare. Quisque a elit arcu. Morbi interdum mi nec tortor condimentum pulvinar. "
    },
    {
        name: "Desert Mesa", 
        image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus turpis sit amet lacinia pellentesque. Vestibulum pellentesque, libero eu tristique blandit, tellus velit sagittis dui, sit amet convallis mauris nunc id leo. Curabitur sollicitudin commodo feugiat. Aenean mattis, libero et tempor accumsan, ipsum purus placerat mauris, vitae dictum ipsum velit non mauris. Suspendisse vestibulum sit amet nunc vitae ornare. Quisque a elit arcu. Morbi interdum mi nec tortor condimentum pulvinar. "
    },
    {
        name: "Canyon Floor", 
        image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402__340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus turpis sit amet lacinia pellentesque. Vestibulum pellentesque, libero eu tristique blandit, tellus velit sagittis dui, sit amet convallis mauris nunc id leo. Curabitur sollicitudin commodo feugiat. Aenean mattis, libero et tempor accumsan, ipsum purus placerat mauris, vitae dictum ipsum velit non mauris. Suspendisse vestibulum sit amet nunc vitae ornare. Quisque a elit arcu. Morbi interdum mi nec tortor condimentum pulvinar. "
    }
]

function seedDB() {
    //Remove all Campgrounds
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Removed Campgrounds!");
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create({
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment) {
                            if(err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                    }
                });
            });
        }
    });
    //add a few campgrounds
    
    //add a few comments
}
module.exports = seedDB;