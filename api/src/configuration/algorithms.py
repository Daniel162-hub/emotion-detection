class AlgorithmRegistry:
    algorithms = []

    @classmethod
    def register_algorithm(cls, algorithm):
        cls.algorithms.append(algorithm)

    @classmethod
    def get_registered_algorithms(cls):
        return [{"name": algorithm.name, "description": algorithm.description } for algorithm in cls.algorithms]