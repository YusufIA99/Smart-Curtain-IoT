import confiq 
import requests
import datetime 
from Backend.IoT.Software.Motor.MotorControlTemp import MotorControlClass 
import RPi.GPIO as GPIO
import time

City = "Aalborg" 

# Import the API key from the confiq file 
api_key = confiq.api_key

# Create an instance of the MotorControlClass
motor = MotorControlClass()

while True:
    # Get the current time
    now = datetime.datetime.now()

    # Get the sunrise and sunset times using the OpenWeatherMap API
    weather_data = requests.get("http://api.openweathermap.org/data/2.5/weather?q="+City+"&appid="+api_key) 
    json_data = weather_data.json()
    sunrise_unix = json_data['sys']['sunrise']
    sunset_unix = json_data['sys']['sunset']
    sunrise_datetime = datetime.datetime.fromtimestamp(sunrise_unix)
    sunset_datetime = datetime.datetime.fromtimestamp(sunset_unix)

    # Check if it's currently sunrise or sunset
    if now >= sunrise_datetime and now < sunset_datetime:
        # If it's sunrise, run the motor forward
        motor.run_forward()
    else:
        # If it's not sunrise, run the motor backwards
        motor.run_backward()

    # Wait for 1 minute before checking the time again
    time.sleep(60)
motor.cleanup() 


