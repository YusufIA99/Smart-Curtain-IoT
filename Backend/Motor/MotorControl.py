import RPi.GPIO as GPIO
import time
from temp_sensor import read_temp


GPIO.setmode(GPIO.BCM)


IN1 = 17
IN2 = 18
IN3 = 27
IN4 = 22


GPIO.setup(IN1, GPIO.OUT)
GPIO.setup(IN2, GPIO.OUT)
GPIO.setup(IN3, GPIO.OUT)
GPIO.setup(IN4, GPIO.OUT)


cw_seq = [
    [1,0,0,1],
    [1,0,0,0],
    [1,1,0,0],
    [0,1,0,0],
    [0,1,1,0],
    [0,0,1,0],
    [0,0,1,1],
    [0,0,0,1]
]

ccw_seq = [
    [0,0,0,1],
    [0,0,1,1],
    [0,0,1,0],
    [0,1,1,0],
    [0,1,0,0],
    [1,1,0,0],
    [1,0,0,0],
    [1,0,0,1]
]

duration = 3

start_time = time.time()

while time.time() - start_time < duration:
    temp = read_temp()
    print("Temperature: ", temp) 
    if temp < 26:
        for i in range(500):
            for j in range(8):
                GPIO.output(IN1, cw_seq[j][0])
                GPIO.output(IN2, cw_seq[j][1])
                GPIO.output(IN3, cw_seq[j][2])
                GPIO.output(IN4, cw_seq[j][3])
                time.sleep(0.001)
    else:
        for i in range(500):
            for j in range(8):
                GPIO.output(IN1, ccw_seq[j][0])
                GPIO.output(IN2, ccw_seq[j][1])
                GPIO.output(IN3, ccw_seq[j][2])
                GPIO.output(IN4, ccw_seq[j][3])
                time.sleep(0.001)


GPIO.cleanup()
