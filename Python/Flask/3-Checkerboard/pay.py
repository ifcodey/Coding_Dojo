from flask import Flask, render_template  # added render_template!
app = Flask(__name__)


@app.route('/')
def starterUp(row=8, col=8):
    return render_template("index.html", row=int(row), col=int(col))


@app.route("/<row>/<col>")
def tasking(row, col):
    return render_template("index.html", row=int(row), col=int(col))


@app.route("/<row>/<col>/<color1>/<color2>")
def tasking_1(row, col, color1, color2):
    return render_template("index.html", row=int(row), col=int(col), color1=color1, color2=color2)


if __name__ == '__main__':
    app.run(debug=True)
