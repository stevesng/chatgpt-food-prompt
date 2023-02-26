# ChatGPT Food Prompt

This bookmarklet adds a button below the textbox on the ChatGPT conversation page. Clicking the button will get current location of the device and prompt ChatGPT for local food recommendation based on the location.

Initially thought of as a Chrome extension to demostrate how ChatGPT can be customized for own application, it is later converted into a bookmarklet for it to work on iOS devices (as Chrome on iOS does not allow extension).

This bookmarklet is ccreated partially by ChatGPT.

## Installation
1. Create a bookmark for any page
2. Edit the bookmark and replace it's URL with the following minifed version of [bookmarklet.js](https://github.com/stevesng/chatgpt-food-prompt/blob/main/bookmarklet.js)
```
javascript:(function(){var b=document.createElement("button");b.textContent="Recommend local food!",b.id="recommend-food-btn",b.style.display="block",b.style.margin="0 auto",document.querySelector("form").insertAdjacentElement("afterend",b),b.addEventListener("click",function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(o){fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+o.coords.latitude+"&lon="+o.coords.longitude).then(o=>o.json()).then(function(o){let e=o.address.country,t=o.address.city,n=o.address.suburb,a=document.querySelector("form"),r=a.querySelector("textarea");var i="I am in "+n+", "+t+", "+e+". Recommend a local food with information in the following format:\n";i+="- Name of food in English\n",i+="- Link to Google Maps https://www.google.com/maps/search/?api=1&query=FOOD_NAME where FOOD_NAME is name of food\n",i+="- Name of food in native language\n",i+="- Link to Google Maps https://www.google.com/maps/search/?api=1&query=FOOD_NAME where FOOD_NAME is name of food in native language\n",r.value=i;let l=a.querySelector("button");l.click()}).catch(function(o){alert(o)})}):alert("Geolocation is not supported by this browser.")})})();
```

## Usage
1. When on the ChatGPT conversation page, open the bookmark
2. Click the `Recommend local food!` link which appears below the textbox

## Building
Use ChatGPT to minify [bookmarklet.js](https://github.com/stevesng/chatgpt-food-prompt/blob/main/bookmarklet.js)
```
minify the following javascript and make it into a bookmarklet:
```

## Checking
Not sure what this bookmarklet does? Ask ChatGPT
```
explain what the following bookmarklet does:
```

These were what ChatGPT replied:
> This is a bookmarklet that creates a button on a webpage, which when clicked allows the user to recommend a local food dish along with its information. The bookmarklet first creates a button with the text "Recommend local food!" and styles it to be displayed in the center of the page. Then, it inserts this button after the first form element on the webpage.
> When the button is clicked, it checks if the user's browser supports geolocation. If it does, the browser will prompt the user to allow access to their location. If the user grants permission, the bookmarklet uses the OpenStreetMap Nominatim API to reverse geocode the user's latitude and longitude into a human-readable address, including the country, city, and suburb. The bookmarklet then generates a string containing a recommended local food dish, formatted with information including the name of the dish in English and its native language, and a link to Google Maps that searches for the dish's name. Finally, the bookmarklet sets the text of the first textarea element on the page to the generated string, clicks the first button element on the page (presumably to submit the form), and sends an alert if any errors occur during the process.
