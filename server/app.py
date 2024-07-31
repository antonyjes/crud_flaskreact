from api.init import create_app

app = create_app()

if __name__ == "__main__":
    app.run(port=3003, debug=True)