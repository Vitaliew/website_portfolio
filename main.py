from flask import Flask, render_template, request
import requests

app = Flask(__name__)

projects_list = []
contributions_list = []
for i in range(12):
    projects_list.append(f"Project {i}")
    contributions_list.append(f"Contribution {i}")


github_link = "https://github.com/Vitaliew"
about_text = ("I am a junior python developer. I have completed a python bootcamp, and now I am working"
              " on my portfolio.")
achievements_dict = {"CS50": "https://certificates.cs50.io/19393c00-a2d1-49f2-b57d-e49e47007b5c.png?size=letter",
                     "PYTHON BOOTCAMP": ""}


@app.route("/")
def home():
    return render_template("index.html", contributions=contributions_list,
                           projects=projects_list, github_link=github_link, about=about_text,
                           achievements=achievements_dict)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
