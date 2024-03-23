from flask import Flask, render_template, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)


@app.route("/")
def home():
    github_link = "https://github.com/Vitaliew"
    about_text = ("I am a junior python developer. I have completed a python bootcamp, and now I am working"
                  " on side projects.")
    achievements_dict = {"CS50": "https://certificates.cs50.io/19393c00-a2d1-49f2-b57d-e49e47007b5c.png?size=letter",
                         "PYTHON BOOTCAMP": ""}
    github_projects_dict = {}
    github_contributions_dict = {}

    response = requests.get("https://github.com/stars/Vitaliew/lists/portofolio")
    status_code = response.status_code
    if status_code != 200:
        github_projects_dict["<p style='color:red;' > GITHUB ERROR </p>"] = ""
        github_contributions_dict["<p style='color:red;' > GITHUB ERROR </p>"] = ""
    else:
        soup = BeautifulSoup(response.text, 'html.parser')

        github_projects_list = soup.find(id="user-list-repositories")
        github_projects_h3 = github_projects_list.find_all("h3")
        for h3 in github_projects_h3:
            href = f"https://github.com{h3.find_next('a').get('href')}"
            name = href.split("/")
            github_projects_dict[name[-1]] = href

        github_contributions_dict[f"No contributions so far"] = ""

    return render_template("index.html", contributions=github_contributions_dict,
                           projects=github_projects_dict, github_link=github_link, about=about_text,
                           achievements=achievements_dict)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
