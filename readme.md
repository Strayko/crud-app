<h1>Restful Routes</h1>
<table>
    <tr>
        <th>name</th>
        <th>url</th>
        <th>verb</th>
        <th>desc</th>
    </tr>
    <tr>
        <td>INDEX</td>
        <td>/campground</td>
        <td>GET</td>
        <td>Display a list of all camp</td>
    </tr>
    <tr>
        <td>NEW</td>
        <td>/campgrounds/new</td>
        <td>GET</td>
        <td>Displays form to make a new camp</td>
    </tr>
    <tr>
        <td>CREATE</td>
        <td>/campgrounds</td>
        <td>POST</td>
        <td>Add new Campground to DB</td>
    </tr>
    <tr>
        <td>SHOW</td>
        <td>/campgrounds/:id</td>
        <td>GET</td>
        <td>Show info about one campground</td>
    </tr>
    <tr>
        <td>EDIT</td>
        <td>/campgrounds/:id/edit</td>
        <td>GET</td>
        <td>Show edit form of on camp</td>
    </tr>
    <tr>
        <td>UPDATE</td>
        <td>/campgrounds/:id</td>
        <td>PUT</td>
        <td>Update a particular camp, then redirect</td>
    </tr>
    <tr>
        <td>DESTROY</td>
        <td>/campgrounds/:id</td>
        <td>DELETE</td>
        <td>Delete a particular camp, then redirect</td>
    </tr>
</table>