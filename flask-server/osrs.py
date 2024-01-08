from osrsbox import items_api

import random

def load_items():
    # load items from osrsbox api
    items = items_api.load()
    items_no_dup = {}
    
    print("adding items to no dupes list")
    for i in items:
        if i.name not in items_no_dup:
            items_no_dup[i.name] = i.icon

    return items_no_dup

def random_item(items_no_dup):
    # select random item
    return random.choice(list(items_no_dup.items()))

