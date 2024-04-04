from bs4 import BeautifulSoup


def generate_html():
    html = '''
    <div class="article_content">
      <hr id="system-readmore" />
      <h3>Detalles:</h3>
    </div>
    <div class="article_content">
      [row] [col class="span6 mb-3"] [tab id="tab1" class="tabbale" button="nav-tabs"]
    '''

    # Generate Exterior tab items
    for i in range(1, 8):
        html += f'''[tab_item title="Exterior {i}"] <img src="images/portfolio/casa-sierra-exterior-{i}.jpg" alt="Casa Sierra" /> [/tab_item]'''

    html += '''
      [/tab] [/col] [col class="span6"] [tab id="tab1" class="tabbale" button="nav-tabs"]
    '''

    # Generate Interior tab items
    for i in range(1, 11):
        html += f'''[tab_item title="Interior {i}"] <img src="images/portfolio/casa-sierra-interior-{i}.jpg" alt="Casa Sierra" /> [/tab_item]'''

    html += '''
      [/tab] [/col] [/row] [row] [col class="span6"] [tab id="tab1" class="tabbale" button="nav-tabs"]
    '''

    # Additional tab items
    additional_tabs = [
        "CORTE A A", "CORTE B B", "FACHADA ESTE", "FACHADA OESTE",
        "FACHADA SUR", "PLANTA ALTA", "PLANTA BAJA", "UBICACION"
    ]

    for title in additional_tabs:
        html += f'''[tab_item title="{title}"] <img src="images/portfolio/{title}.jpg" alt="Casa Sierra" /> [/tab_item]'''

    html += '''
      [/tab] [/col] [/row]
    </div>
    '''
    return html


generated_html = generate_html()

soup = BeautifulSoup(generated_html, 'html.parser')
prettified_html = soup.prettify()

print(prettified_html)
