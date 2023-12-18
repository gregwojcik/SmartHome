export const data = {
    "appliances": [
      {
        "id": "speaker_1",
        "type": "speaker",
        "name": "Living Room Speaker",
        "status": "on",
        "volume": 50,
        "controls": [
          {
            "type": "slider",
            "label": "Volume",
            "min": 0,
            "max": 100,
            "step": 1
          }
        ]
      },
      {
        "id": "thermostat_1",
        "type": "thermostat",
        "name": "Living Room Thermostat",
        "status": "on",
        "temperature": 22,
        "controls": [
          {
            "type": "slider",
            "label": "Temperature",
            "min": 15,
            "max": 30,
            "step": 1
          }
        ]
      },
      {
        "id": "ac_1",
        "type": "ac",
        "name": "Bedroom AC",
        "status": "off",
        "temperature": 24,
        "fanSpeed": "low",
        "controls": [
          {
            "type": "slider",
            "label": "Temperature",
            "min": 18,
            "max": 30,
            "step": 1
          },
          {
            "type": "select",
            "label": "Fan Speed",
            "options": ["low", "medium", "high"]
          }
        ]
      },
      {
        "id": "lights_1",
        "type": "lights",
        "name": "Kitchen Lights",
        "status": "on",
        "brightness": 75,
       
        "controls": [
          {
            "type": "slider",
            "label": "Brightness",
            "min": 0,
            "max": 100,
            "step": 1
          },
          
        ]
      },
      {
        "id": "fireplace_1",
        "type": "electric_fireplace",
        "name": "Living Room Fireplace",
        "status": "off",
        "flameIntensity": 50,
        "controls": [
          {
            "type": "slider",
            "label": "Flame Intensity",
            "min": 0,
            "max": 100,
            "step": 1
          }
        ]
      },
      {
        "id": "door_lock_1",
        "type": "door_lock",
        "name": "Front Door Lock",
        "status": "locked",
        "controls": [
          {
            "type": "toggle",
            "label": "Lock/Unlock"
          }
        ]
      }
    ]
  }
 