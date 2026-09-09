import requests

class DemoblazeClient:

    def __init__(self):
        self.base_url = "https://api.demoblaze.com"

    def get_entries(self):
        return requests.get(
            f"{self.base_url}/entries"
        )
    def get_category(self, category):
        return requests.post(
            f"{self.base_url}/bycat",
            json={"cat": category}
        )