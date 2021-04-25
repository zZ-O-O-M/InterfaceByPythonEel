import eel


@eel.expose
def get_value(res):
    return int(res) * 100


eel.init("web")
eel.start("index.html", size = (500, 400))
