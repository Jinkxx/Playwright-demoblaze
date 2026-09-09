import pytest

from clients.demoblaze_client import DemoblazeClient

@pytest.fixture
def demoblaze_api():
    return DemoblazeClient()