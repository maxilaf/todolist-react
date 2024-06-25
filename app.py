from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/chiffre")
def chiffre():
    chiffre = 43
    return jsonify(chiffre)

@app.route("/api/nom")
def nom():
    nom = "Tim"
    return jsonify(nom)


# flask --app src/app --debug run
