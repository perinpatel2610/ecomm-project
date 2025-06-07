import requests
import json

def merge_and_update_quantity(api_endpoint):
    # Retrieve the JSON data from the API
    response = requests.get(api_endpoint)
    json_data = response.text

    # Parse the JSON data
    data = json.loads(json_data)

    # Create a dictionary to track merged items
    merged_items = {}

    # Iterate through the items in the JSON data
    for item in data:
        key = (item['userId'], item['productId'])
        if key not in merged_items:
            # Add the item to the merged items dictionary
            merged_items[key] = item
        else:
            # Update the quantity of the existing merged item
            merged_items[key]['quantity'] += item['quantity']

    # Create a list of merged items
    merged_data = list(merged_items.values())

    # Serialize the merged data back into JSON format
    updated_json_data = json.dumps(merged_data)

    return updated_json_data

# Example usage with your API endpoint
api_endpoint = 'http://localhost:3000/cart'
merged_data = merge_and_update_quantity(api_endpoint)
print(merged_data)