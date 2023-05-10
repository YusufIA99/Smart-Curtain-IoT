import RPi.GPIO as GPIO
import time

# Set the GPIO mode to BCM
GPIO.setmode(GPIO.BCM)

# Set the GPIO pin numbers for IN1, IN2, IN3, IN4
IN1 = 17
IN2 = 18
IN3 = 27
IN4 = 22

# Set the GPIO pins as outputs
GPIO.setup(IN1, GPIO.OUT)
GPIO.setup(IN2, GPIO.OUT)
GPIO.setup(IN3, GPIO.OUT)
GPIO.setup(IN4, GPIO.OUT)

# Define the sequence of steps for the motor
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


def open_curtain():
    for i in range(500):
        for j in range(8):
            GPIO.output(IN1, cw_seq[j][0])
            GPIO.output(IN2, cw_seq[j][1])
            GPIO.output(IN3, cw_seq[j][2])
            GPIO.output(IN4, cw_seq[j][3])
            time.sleep(0.001)

def close_curtain():
    for i in range(500):
        for j in range(8):
            GPIO.output(IN1, ccw_seq[j][0])
            GPIO.output(IN2, ccw_seq[j][1])
            GPIO.output(IN3, ccw_seq[j][2])
            GPIO.output(IN4, ccw_seq[j][3])
            time.sleep(0.001)


# Clean up the GPIO pins
GPIO.cleanup()
