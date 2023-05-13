from flask import Flask, render_template, request
import RPi.GPIO as GPIO
import time
 
app = Flask(__name__)
 
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
 
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/open', methods=['POST'])
def open_curtains():
    for i in range(2048):
        for j in range(8):
            GPIO.output(IN1, cw_seq[j][0])
            GPIO.output(IN2, cw_seq[j][1])
            GPIO.output(IN3, cw_seq[j][2])
            GPIO.output(IN4, cw_seq[j][3])
            time.sleep(0.001)
    return 'Curtains opened!'
 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
    GPIO.cleanup()
