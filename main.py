from flask import Flask, render_template, request
import requests

app = Flask(__name__)

projects_list = []
for i in range(12):
    projects_list.append(f"Project {i}")

github_link = "https://github.com/Vitaliew"


@app.route("/")
def home():
    return render_template("index.html", items=projects_list, github_link=github_link)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
