function displayName(json)
{
    try
    {
        console.log(json.name);
    }
    catch (e)
    {
        console.log("Exception: " + e.message);
    }
}

function displayProfession(json)
{
    try
    {
        console.log(json.Profession);
    }
    catch (e)
    {
        console.log("Exception: " + e.message);
    }
}

function displayAge(json)
{
    try
    {
        console.log(json.Age) ;
    }
    catch (e)
    {
        console.log("Exception: " + e.message);
    }
}

function displayData(data)
{
    try
    {
        let json = JSON.parse(data);

        displayName(json);
        displayProfession(json);
        displayAge(json);
    }
    catch (e)
    {
        console.log("Exceptoin: " + e.message);
    }
}

let request = new XMLHttpRequest();
let url = "data.json" ;

request.open("GET", url);
request.addEventListener("load", function() {
    if (request.status === 200)
    {
        displayData(request.responseText);
    }
    else
    {
        console.log("Server Error; " + request.status);
    }
}, false);

request.addEventListener("error", function() {
    console.log("Cannot Make AJAX Request");
}, false );

request.send();