from flask import Flask, render_template, request
import requests

app = Flask(__name__)

projects_list = ["project 1", "project 2", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3"]
@app.route("/")
def home():
    return render_template("index.html", projects=projects_list)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
