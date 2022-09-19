from flask import Flask, render_template, request, redirect

app = Flask(__name__)  # name of the page


@app.route('/')
def forms():
    return render_template('form.html')


@app.route("/", methods=['POST'])
def initial_render():
    print("Got Post Info")
    print(request.form)

    # yourName_form_form = request.form.get['name'] -- should but (Name)_form_form to work correct
    # [ Or ]
    Names = request.form.get('Name')
    Ids = request.form.get('Id')
    Strawberrys = request.form.get('Strawberry')
    Raspberrys = request.form.get('Raspberry')
    Apples = request.form.get('Apple')

    return render_template("checkout.html", Name=Names, Id=Ids, Strawberry=Strawberrys, Raspberry=Raspberrys, Apple=Apples)


@app.route("/checkout")
def showTab():
    return redirect("form.html")


if __name__ == "__main__":
    app.run(debug=True)
