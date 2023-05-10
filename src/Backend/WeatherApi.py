import confiq 
import requests
import datetime 

City = "Aalborg" 

#importere api key fra confiq filen 
api_key = confiq.api_key

weather_data = requests.get("http://api.openweathermap.org/data/2.5/weather?q="+City+"&appid="+api_key) 

json_data = weather_data.json()

temperature_kelvin = json_data['main']['temp']

#Konvertere Kelvin til Celcius 
temperature_celsius = temperature_kelvin - 273.15
temperature_celsius_rounded = round(temperature_celsius)

sunrise_unix = json_data['sys']['sunrise']
sunset_unix = json_data['sys']['sunset']

sunrise_datetime = datetime.datetime.fromtimestamp(sunrise_unix)
sunset_datetime = datetime.datetime.fromtimestamp(sunset_unix)


sunrise_time = sunrise_datetime.strftime("%H:%M:%S")
sunset_time = sunset_datetime.strftime("%H:%M:%S")

print("Solopgang", City, "er", sunrise_time, "og solnedgang er", sunset_time)
print("Temperaturen i", City, "er", temperature_celsius_rounded, "Grader Celcius")
