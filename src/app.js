
var template = (
    <div>
        <h1>Hello this is my first app</h1>
        <hr></hr>
        <p>This is ASX  !!</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <button type="button" class="btn btn-primary">Hello</button>
    </div>
);



var user = {
    userName: '',
    age: 24,
    location: 'Melbourne'
}


var movie = {
    title: 'this is a title',
    subtitle: 'This is a subtitle',
    options: ['one', 'two']
}


function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'location Unknown';
    }
}

function checkAge(age) {
    if (age <= 24) {
        return age;
    } else {
        return 'age is more than 24';
    }
}

var temolateThree = (
    <div>
        <h1>{movie.title}</h1>
        {movie.subtitle && <p>{movie.subtitle}</p>}
        <p>{movie.options.length > 1 && <p>Movie : {movie.options}</p>}</p>

        <p>{movie.options.length > 0 ? `Here are your options ${movie.options}` : 'No options'}</p>

    </div>
);



var templateTwo = (
    <div>
        <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
        <p>{(user.age && user.age >= 20) && <p>Age : {user.age}</p>}</p>
        <p>Location :{getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(temolateThree, appRoot);