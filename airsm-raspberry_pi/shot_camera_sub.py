import paho.mqtt.client as mqtt
from picamera import PiCamera
from time import sleep
import detect

ip = ''
port = 0

camera = PiCamera()
camera.start_preview()
camera.resolution = (3280, 2464)


def on_connect(client, userdata, flags, rc):
    print("connect" + str(rc))
    if rc == 0:
        client.subscribe("web/camera")

    else:
        print("fail")


def on_message(client, userdata, msg):
    myval = msg.payload.decode('utf-8')
    if myval == "shot":

        camera.capture('/home/pi/project/uploads/image.jpg', resize=(640, 640))
        sleep(2)
        detect.detect("image.jpg")

    else:
        print("wrong")


mqttClient = mqtt.Client()

mqttClient.on_connect = on_connect

mqttClient.on_message = on_message

mqttClient.connect(ip, 1883, 60)

mqttClient.loop_forever()



