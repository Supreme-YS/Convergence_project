import paho.mqtt.client as mqtt
import paho.mqtt.publish as publish
import RPi.GPIO as GPIO
from time import sleep

ServoPin = 0
ServoPin2 = 0
ServoPin3 = 0

servo_max = 12
servo_min = 3

GPIO.setmode(GPIO.BCM)

GPIO.setup(ServoPin, GPIO.OUT)
GPIO.setup(ServoPin2, GPIO.OUT)
GPIO.setup(ServoPin3, GPIO.OUT)

servo = GPIO.PWM(ServoPin, 50)
servo2 = GPIO.PWM(ServoPin2, 50)
servo3 = GPIO.PWM(ServoPin3, 50)

servo.start(0)
servo2.start(0)
servo3.start(0)


def setServoPos(degree):
    if degree > 180:
        degree = 180

    duty = servo_min + (degree * (servo_max - servo_min) / 180.0)
    print("Degree : {} to {}(DUTY)".format(degree, duty))

    servo.ChangeDutyCycle(duty)


def setServoPos2(degree):
    if degree > 180:
        degree = 180

    duty = servo_min + (degree * (servo_max - servo_min) / 180.0)
    print("Degree : {} to {}(DUTY)".format(degree, duty))

    servo2.ChangeDutyCycle(duty)

def setServoPos3(degree):
    if degree > 180:
        degree = 180

    duty = servo_min + (degree * (servo_max - servo_min) / 180.0)
    print("Degree : {} to {}(DUTY)".format(degree, duty))

    servo3.ChangeDutyCycle(duty)


def on_connect(client, userdata, flags, rc):
    print("connect" + str(rc))
    if rc == 0:
        client.subscribe("rasp/json")
    else:
        print("fail")


def on_message(client, userdata, msg):
    myval = msg.payload.decode('utf-8')

    setServoPos(140)
    sleep(0.2)
    setServoPos(0)

    if myval == "PET":

        publish.single("rasp/material", myval, hostname=ip, port=port)
        setServoPos2(140)
        sleep(5)
        setServoPos2(0)
        publish.single("rasp/count", "over", hostname=ip, port=port)

    elif myval == "PP":

        publish.single("rasp/material", myval, hostname=ip, port=port)
        setServoPos3(140)
        sleep(5)
        setServoPos3(0)
        publish.single("rasp/count", "over", hostname=ip, port=port)

    elif myval == "PS":
        publish.single("rasp/material", myval, hostname=ip, port=port)
        publish.single("rasp/count", "over", hostname=ip, port=port)

    elif myval == "OTHER":
        publish.single("rasp/material", myval, hostname=ip, port=port)
        publish.single("rasp/count", "over", hostname=ip, port=port)

    else:
        print("wrong")


ip = '192.168.0.213'
port = 0

mqttClient = mqtt.Client()

mqttClient.on_connect = on_connect

mqttClient.on_message = on_message

mqttClient.connect(ip, 1883, 60)

mqttClient.loop_forever()
