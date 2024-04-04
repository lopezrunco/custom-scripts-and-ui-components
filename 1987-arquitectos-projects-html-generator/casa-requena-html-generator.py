from bs4 import BeautifulSoup


def generate_html():
    html = '''
    <div class="article_content">
      <hr id="system-readmore" />
      <h3>Detalles:</h3>
    </div>
    <div class="article_content">
      [row]
    '''

    tabs = [
        {
            "title": f"Exterior {i}",
            "path": f"images/portfolio/casa-requena-exterior-{i}.jpg"
        }
        for i in range(1, 4)
    ]

    html += '''
      [col class="span6 mb-3"] [tab id="tab1" class="tabbale" button="nav-tabs"]
    '''

    for tab in tabs:
        html += f'''[tab_item title="{tab['title']}"] <img src="{tab['path']}" alt="Casa Requena" /> [/tab_item]'''

    html += '''
      [/tab] [/col] [col class="span6"] [tab id="tab1" class="tabbale" button="nav-tabs"]
    '''

    tabs = [
        {
            "title": f"Interior {i}",
            "path": f"images/portfolio/casa-requena-interior-{i}.jpg"
        }
        for i in range(1, 8)
    ]

    for tab in tabs:
        html += f'''[tab_item title="{tab['title']}"] <img src="{tab['path']}" alt="Casa Requena" /> [/tab_item]'''

    html += '''
      [/tab] [/col] [/row]
    </div>
    '''
    return html


generated_html = generate_html()

soup = BeautifulSoup(generated_html, 'html.parser')
prettified_html = soup.prettify()

print(prettified_html)
