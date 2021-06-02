import json

import sys,io,os
import django

sys.stdout=io.TextIOWrapper(sys.stdout.detach(),encoding='utf-8')
sys.stderr=io.TextIOWrapper(sys.stderr.detach(),encoding='utf-8')
os.environ.setdefault("DJANGO_SETTINGS_MODULE","admin_front.frontApp.settings")
django.setup()

from admin_front.mainApp.models import AdminTable

def parsing() :

    with open('lat_lng.json') as json_file:
        json_data = json.load(json_file)

    post = []

    for i in range(7):
        post.append({
            'lat' : json_data['positions'][i]['lat'],
            'lng': json_data['positions'][i]['lng']
        })

    return post

if __name__ == '__main__':
    post = parsing()

    for i in range(len(post)):
        positions(
            lat = positions[i]['lat'],
            lng=positions[i]['lng']
        ).save()