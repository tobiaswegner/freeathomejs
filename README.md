# libfreeathome-js

This Typescript / Javascript library implements the official ABB / Busch-Jaeger REST API for free@home as documented in their [Developer Portal](https://developer.eu.mybuildings.abb.com/).

## Getting started

### Prerequisites

This library does not have an runtime dependencies, however in order to run tests or transpile it from Typescript to Javascript, you have to install the development dependencies using

```
npm install
```

in the root folder of this repository.

### How to use it

#### Create the REST API object

```
var freeathome = require("freeathome");

var url = "https://apim.eu.mybuildings.abb.com/fhapi/v1/api/rest";
var token = "<oauth token>";
var subscriptionKey = "<subscription key>";

var api = freeathome.createRestAPI(url,
            new freeathome.FreeAtHomeRestAPITokenAuthentication(
              token,
              subscriptionKey
            )
          );
```

#### Query current configuration

```
api.getConfiguration().then((model) => { console.log(JSON.stringify(model)) });
```

#### Set datapoint value

To set a datapoint, you have to figure out its path first. This can be performed by parsing the configuration. A datapoint path consists of:
  * siteId: The free@home installation (SysAP)
  * deviceId: The particular device, e.g. Sensor/Switch actuator
  * channelId: The channel, e.g. switch actuator channel A
  * datapointId: The particular datapoint, e.g. SwitchOnOff

For example, the following code would switch on a hue with the device id (serial number) BEED08210001 in the installation 00000000-0000-0000-0000-000000000000.

```
api.setDatapoint("00000000-0000-0000-0000-000000000000", "BEED08210001", "ch0000", "idp0000", "1");
```

## Author

* **Tobias Wegner** - [www.tobiaswegner.de](https://www.tobiaswegner.de)

## License

This software is licensed under the MIT license.
