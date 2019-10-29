from flask import request, Flask
import requests
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/token', methods=['GET'])
def login():
    if request.method == 'GET':
        url = "https://accounts.spotify.com/api/token"
        payload = {
            'grant_type': "client_credentials"
        }
        headers = {
            'Authorization': "Basic MjBiMzk3ZGU5YmEyNDE0Yjk2NGJmNTVjZmNlYzllYzM6ZmY0MDYzZGM1MDAxNDFkZTlhNjBiNjI2ZjY1YmNiMDg=",
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        return json.loads(response.text)
