from flask import Flask, jsonify, request
from PIL import Image
import numpy as np
import keras

app = Flask(__name__)


@app.route("/")
def home():
    return """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Upload an Image</title>
    </head>
    <body>
        <h1>Upload an Image for Prediction</h1>
        <form action="/predict" method="post" enctype="multipart/form-data">
            <label for="file">Choose an image:</label>
            <input type="file" name="file" id="file" accept="image/*" required>
            <br><br>
            <button type="submit">Upload and Predict</button>
        </form>
    </body>
    </html>
    """


@app.route("/predict", methods=["POST"])
def predict():
    try:
        # get image data
        file = request.files["file"]

        if file.filename == "":
            return (
                jsonify(
                    {
                        "status": False,
                        "code": 400,
                        "message": "No selected file",
                        "data": None,
                    }
                ),
                400,
            )

        # image preprocessing
        # convert to grayscale
        img = Image.open(file).convert("L")
        # resize image
        img = img.resize((28, 28))
        # to numpy array
        img_array = keras.utils.img_to_array(img)
        # normalize
        img_array = img_array / 255.0
        # reshpae to (1, 28, 28, 1)
        img_array = np.expand_dims(img_array, axis=0)

        # load model
        model = keras.models.load_model("model/mnist.keras")

        # get class names
        class_name = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
        }

        # predict
        prediction = model.predict(img_array)
        proba = float(np.max(prediction))
        prediction = class_name[np.argmax(prediction)]

        return jsonify(
            {
                "status": True,
                "code": 200,
                "message": "OK",
                "data": {"prediction": prediction, "probabilty": proba},
            }
        )
    except Exception as e:
        return (
            jsonify(
                {
                    "status": False,
                    "code": 500,
                    "message": str(e),
                    "data": None,
                }
            ),
            500,
        )


if __name__ == "__main__":
    app.run(host="0.0.0.0")
