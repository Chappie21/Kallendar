from os import stat
from flask import Flask
from config import *

# Instancia de aplicacion Flask
"""
    La carpeta public contiene lso archivos estaticos de produccion react
    Los caules son servidos a los clientes por medio de el endpoint '/'
"""
app = Flask(__name__, static_folder='Frontend/build', static_url_path='/')
app.config.from_object(DevelopmentConfig)

# Enviar html statico (pagina web)
@app.route('/')
def index():
    return app.send_static_file('index.html')

# Iniciar servidor (ejecutar)
if __name__ == '__main__':
     app.run()