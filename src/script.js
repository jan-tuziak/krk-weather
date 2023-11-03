function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const data = JSON.parse(httpGet("https://www.meteosource.com/api/v1/free/point?place_id=krakow&sections=all&timezone=UTC&language=en&units=metric&key=s3ynnrvz0t6hzhzdqjk1jnyphojhvensv1fg8ook"));

document.getElementById("summary").innerHTML = data["current"]["summary"];
document.getElementById("temperature").innerHTML = `Temperature: ${data["current"]["temperature"]}C`;
document.getElementById("wind").innerHTML = `Wind: ${data["current"]["wind"]["speed"]} km/h`;
document.getElementById("date").innerHTML = new Date().toLocaleDateString();
document.getElementById("icon").src = `img/icons/${data["current"]["icon_num"]}.png`