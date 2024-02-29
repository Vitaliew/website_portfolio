from flask import Flask, render_template, request
import requests

app = Flask(__name__)

projects_list = []
contributions_list = []
for i in range(12):
    projects_list.append(f"Project {i}")
    contributions_list.append(f"Contribution {i}")


github_link = "https://github.com/Vitaliew"


@app.route("/")
def home():
    return render_template("index.html", contributions=contributions_list, projects=projects_list, github_link=github_link)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
