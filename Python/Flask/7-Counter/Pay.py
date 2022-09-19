from distutils.log import debug
from webbrowser import get
from flask import Flask, render_template, session, redirect
app = Flask(__name__)

app.secret_key = 'Keep it scret,keep it safe'


@app.route("/counter")
def index():
    # if count in page equal value so increase a value to it but if i do
    # refersh to page or the count = 1 return to open a counter html page.
    if 'count' in session:
        session['count'] = session.get('count') + 1
    else:
        session['count'] = 1
    return render_template("counter.html")


@app.route("/")
def index2():
    if 'count2' in session:
        session['count2'] = session.get('count2') + 1
    else:
        session['count2'] = 1
    return render_template("counter.html")


@app.route('/destroy')
def destroy_session():
    session.pop('count', None)
    return redirect('/counter')


@app.route('/increment')
def increment():
    session['count'] = int(session.get('count')) + 1
    return redirect('/counter')

@app.route('/reset')
def reset():
    session['count'] = -1
    return redirect('/counter')

if __name__ == "__main__":
    app.run(debug = True)