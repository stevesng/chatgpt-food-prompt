var b = document.createElement("button");
b.textContent = "Recommend local food!";
b.id = "recommend-food-btn";
b.style.display = "block";
b.style.margin = "0 auto";
document.querySelector("form").insertAdjacentElement("afterend", b);

b.addEventListener("click", function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+position.coords.latitude+"&lon="+position.coords.longitude)
        .then(response => response.json())
        .then(function(data) {
          const country = data.address.country;
          const city = data.address.city;
          const suburb = data.address.suburb;
          const form = document.querySelector("form");
          const formTextArea = form.querySelector("textarea");
          var formTextAreaValue = "I am in "+suburb+", "+city+", "+country + ". Recommend a local food with information in the following format:\n";
          formTextAreaValue = formTextAreaValue + "- Name of food in English\n";
          formTextAreaValue = formTextAreaValue + "- Link to Google Maps https://www.google.com/maps/search/?api=1&query=FOOD_NAME where FOOD_NAME is name of food\n";
          formTextAreaValue = formTextAreaValue + "- Name of food in native language\n";
          formTextAreaValue = formTextAreaValue + "- Link to Google Maps https://www.google.com/maps/search/?api=1&query=FOOD_NAME where FOOD_NAME is name of food in native language\n";
          formTextArea.value = formTextAreaValue;
          const formButton = form.querySelector("button");
          formButton.click();
        })
        .catch(function(error) {
          alert(error);
        });
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});
