from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from cryptography.fernet import Fernet

import osrs

items = osrs.load_items() #load all items before startup
item_count = [{item: 0} for item in items] #create list with item name and count

key = Fernet.generate_key() #generate encryption key
fernet = Fernet(key)

app = Flask(__name__)
CORS(app)

#item API Route
@app.route("/item")
def get_random_item():
    item = osrs.random_item(items)
    print(item[0])
    
    encName = fernet.encrypt(item[0].encode())

    return jsonify({"name": encName.decode("utf-8"), "img": item[1]})

#guess check API Route
@app.route("/guesscheck", methods = ['POST'])
def guessCheck():
    guess = request.get_json()
    name = guess["name"] # encrypted
    response = guess["guess"]
    decName = fernet.decrypt(name).decode()
    value = -1
    keysList = []
    if response.lower() == decName.lower():
        for dict in item_count:
            if dict.get(decName) != None:
                
                value = dict.get(decName)
                value += 1 # update value
                dict[decName] = value
        return jsonify({'correct': True, 'count': value})
    else:
        for dict in item_count:
            if dict.get(decName) != None:
                
                value = dict.get(decName)
                
                dict[decName] = value
        return jsonify({'correct': False, 'count': value})
    

if __name__ == "__main__":
    app.run(debug=True)
