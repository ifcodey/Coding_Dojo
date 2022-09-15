from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def play_1():
    return "Page Work"


@app.route('/play')
def playone():
    return render_template("index.html")


@app.route('/play/<x>')
def playtwo(x):
    return render_template("index.html", x=int(x))


@app.route('/play/<x>/<color>')
def playthree(x, color):
    return render_template("index.html", x=int(x), color=color)


if (__name__) == ("__main__"):
    app.run(debug=True)
