from abc import ABC, abstractmethod

class Algorithm(ABC):
    def __init__(self, name, description):
        self.name = name
        self.description = description

    @abstractmethod
    def analyze_sentiment(self, text):
        pass