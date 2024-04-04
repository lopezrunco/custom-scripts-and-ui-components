from bs4 import BeautifulSoup


def generate_html():
    data = [
        {
            "href": "https://www.facebook.com/BolEnUruguay/",
            "icon_class": "fab fa-facebook-f",
            "name": "Facebook",
            "bg_color": "#3b5998"
        },
        {
            "href": "https://twitter.com/BolEnUruguay",
            "icon_class": "fab fa-twitter",
            "name": "Twitter",
            "bg_color": "#00acee"
        },
        {
            "href": "https://www.youtube.com/channel/UC4S4X44iyU93_SuO0tqCIog/featured",
            "icon_class": "fab fa-youtube",
            "name": "Youtube",
            "bg_color": "#c4302b"
        },
        {
            "href": "https://www.instagram.com/bolenuruguay/",
            "icon_class": "fab fa-instagram",
            "name": "Instagram",
            "bg_color": "#e1306c"
        }
    ]

    html = "<h4>Síganos en las redes sociales:</h4>\n"

    for link in data:
        html += f'<a href="{link["href"]}" target="_blank" style="display: inline-block; padding: 0.2em 1.45em; margin: 0.1em; box-sizing: border-box; text-decoration: none; font-weight: 400; color: #fff; background-color: {link["bg_color"]}; text-align: center; position: relative; min-width: 140px; margin-bottom: 5px;">'
        html += f'<i class="{link["icon_class"]}"></i> {link["name"]}</a>\n'

    return html


generated_html = generate_html()
soup = BeautifulSoup(generated_html, 'html.parser')
prettified_html = soup.prettify()

print(prettified_html)
