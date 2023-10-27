from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from osrsbox import items_api

import json
import base64
import random

app = Flask(__name__)
CORS(app)

# run this code on loop for daily reset
items = items_api.load()
items_no_dup = {}
   
print("adding items to no dupes list")
for i in items:
    if i.name not in items_no_dup:
        items_no_dup[i.name] = i.icon
item = random.choice(list(items_no_dup.items()))

item_str = item[1]
decoded_image = open('./images/item_pic.jpeg', 'wb')
decoded_image.write(base64.b64decode(item_str))
decoded_image.close()
#----------------
#items API Route
@app.route("/item")
def items():
    print(item[0])
    return send_file('./images/item_pic.jpeg')

@app.route("/guesscheck", methods = ['POST'])
def guessCheck():
    guess = request.get_json()
    response = guess["guess"]

    if response.lower() == item[0].lower():
        return jsonify({'correct': True})
    else:
        return jsonify({'correct': False})
    

if __name__ == "__main__":
    app.run(debug=True)