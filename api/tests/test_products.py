def test_get_all_products(demoblaze_api):
    response = demoblaze_api.get_entries()
    assert response.status_code == 200
    
    #assert isinstance(response.json(), list)
