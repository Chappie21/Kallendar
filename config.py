"""
    Este script define una serie de configuraciones por medio
    de atributos en una clase.

    El micro framework de flask es capaz de leer este.
"""
class Config(object):
    # SECRET_KEY = os.urandom(24)
    SECRET_KEY = 'un_valor_random'


# Configuracion de produccion 
class ProductionConfig(Config):
    DEBUG = False

# Configuracion de modo de desarrollo
class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True