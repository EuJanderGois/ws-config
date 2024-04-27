# ws-config

Basic lib for get config params from yaml files.

Created for individual use but open source on MIT license.

For contribute or fork visit [GitHub Repo](https://github.com/EuJanderGois/ws-config).

## Installation

to install using yarn:
``` batch
yarn add ws-config
```

to install using npm:
``` batch
npm install ws-config
```

## Usage

To use you can import the `getConfig` and store this in a const.

``` javascript
import getConfig from "ws-config";

const config = getConfig("your_config_file.yaml");
```

Change `your_config_file.yaml` for the real name of your config file like `config.yaml` or any other.

In `yaml` file you can add any value and access it from config variable.

``` yaml
# version stored in yaml file
version: "1.0.0"
```

And call in your code:
``` javascript
import { getConfig } from "ws-config";

const config = getConfig("config.yaml");

console.log(config.version);
```

> The output be: `1.0.0`.

Using default require:
``` javascript

const { getConfig } = require("ws-config");

// and the same code of before example

```

## Changelog

### Middle Changes
> 0.1.x <br>
Added all current functionalities.

### Minor Changes
> 0.1.17 <br>
Updated readme file.

> 0.1.16 <br>
Fixed imports using require.