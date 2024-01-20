from flask import Flask,request,abort,render_template,jsonify
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

@app.get("/")
def index():
    return render_template("index.html")

@app.get("/windstorm")
def predict_windstorm():
    try:
        temperature= float(request.args.get("temperature"))
        relativeHumidity = float(request.args.get("relativeHumidity"))
        pressure = float(request.args.get("pressure"))
        windDirection = float(request.args.get("windDirection"))
        precipitation = float(request.args.get("precipitation"))
        windGustSpeed = float(request.args.get("windGustSpeed"))
    
        # Make Prediction Here
        # And Assign Prediction Value to Prediction Variable
        
        prediction = "No Windstorm"
        
        return jsonify({"success":True, "prediction":prediction})
    except:
        return jsonify({"success":False, "message":"An error occured"})
 
 
@app.get("/landslide")
def predict_landslide():
    try:
        height= float(request.args.get("height"))
        slope = float(request.args.get("slope"))
        rainfall = float(request.args.get("rainfall"))
        historicalPrecipitation = float(request.args.get("historicalPrecipitation"))
    
        # Make Prediction Here
        # And Assign Prediction Value to Prediction Variable
        
        prediction = "No Landslide"
        
        return jsonify({"success":True, "prediction":prediction})
    except:
        return jsonify({"success":False, "message":"An error occured"})


@app.get("/flood")
def predict_flood():
    try:
        maxTemperature = float(request.args.get("maxTemperature"))
        minTemperature = float(request.args.get("minTemperature"))
        rainfall = float(request.args.get("rainfall"))
        relativeHumidity = float(request.args.get("relativeHumidity"))
        windSpeed = float(request.args.get("windSpeed"))
        cloudCoverage = float(request.args.get("cloudCoverage"))
        brightSunshine = float(request.args.get("brightSunshine"))
        latitude = float(request.args.get("latitude"))
        longitude = float(request.args.get("longitude"))
        altitude = float(request.args.get("altitude"))
    
        # Make Prediction Here
        # And Assign Prediction Value to Prediction Variable
        
        prediction = "No Flood"
        
        return jsonify({"success":True, "prediction":prediction})
    except:
        return jsonify({"success":False, "message":"An error occured"})


@app.get("/earthquake")
def predict_earthquake():
    try:
        latitude= float(request.args.get("latitude"))
        longitude = float(request.args.get("longitude"))
        depth = float(request.args.get("depth"))
    
        # Make Prediction Here
        # And Assign Prediction Value to Prediction Variable
        
        prediction = "No Earthquake"
        
        return jsonify({"success":True, "prediction":prediction})
    except:
        return jsonify({"success":False, "message":"An error occured"})
        


@app.errorhandler(404)
def invalid_request(e):
    return jsonify({"success":False, "message":"Invalid Request"}) 

if __name__ == "__main__": 
    app.run()
    