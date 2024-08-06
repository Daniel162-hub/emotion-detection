from flask import Flask, request, jsonify

app = Flask(__name__)

## register bayes algorithm to the algorithm registry
from algorithms.naive_bayes import NaiveBayes
from configuration.algorithms import AlgorithmRegistry

AlgorithmRegistry.register_algorithm(NaiveBayes())

@app.route('/algorithms', methods=['GET'])
def get_algorithms():
    algorithms = AlgorithmRegistry.get_registered_algorithms()
    return jsonify(algorithms)

## Add a new route to get the sentiment of a text
@app.route('/sentiment', methods=['POST'])
def get_sentiment():
    text = request.json.get('text')
    algorithm_name = request.json.get('algorithm')

    ## get the first algorithm from the registry by name and be case insensitive
    algorithm = next((algorithm for algorithm in AlgorithmRegistry.algorithms if algorithm.name.lower() == algorithm_name.lower()), None)

    if algorithm is None:
        return jsonify({"error": "Algorithm " + algorithm_name +  " not found"}), 404

    sentiment = algorithm.analyze_sentiment(text)
    
    return jsonify({"sentiment": sentiment})

if __name__ == '__main__':
    app.run(debug=True)