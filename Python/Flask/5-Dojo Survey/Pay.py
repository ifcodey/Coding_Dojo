from flask import Flask, render_template, request, redirect

app = Flask(__name__)  # name of the page


@app.route('/')
def forms():
    return render_template("form.html")


@app.route("/", methods=['POST'])
def initial_render():
    print("Got Post Info")
    print(request.form)

    # yourName_form_form = request.form.get['name'] -- should but (Name)_form_form to work correct
    # [ Or ]
    yourName = request.form.get('name')
    cityName = request.form.get('city')
    langName = request.form.get('language')
    textArea = request.form.get('textarea')
    radio = request.form.get('radio')
    checkbox = request.form.get('checkbox')

    return render_template("result.html", yourNames=yourName, cityNames=cityName, langNames=langName, textAreas=textArea, radio=radio , checkbox=checkbox)


@app.route("/result")
def showTab():
    return redirect("form.html")


if __name__ == "__main__":
    app.run(debug=True)
