![Perx Health](https://user-images.githubusercontent.com/4101096/163123610-9dfa9263-1518-4f5d-8839-9ddc142a513e.png)

[![Build Status](https://github.com/perxhealth/eslint-config-perxhealth/actions/workflows/publish.yaml/badge.svg)](https://github.com/perxhealth/eslint-config-perxhealth/actions/workflows/publish.yaml) [![Build Status](https://github.com/perxhealth/eslint-config-perxhealth/actions/workflows/main.yaml/badge.svg)](https://github.com/perxhealth/eslint-config-perxhealth/actions/workflows/main.yaml)

Perx Health's standard, base ESLint configuration for Node and TypeScript
projects. This package provides Perx's `.eslintrc` as an extensible, shared
config.


## Installation

We do not currently differentiate between React projects, ECMAScript 6+
projects etc... for now, it's one config to rule them all!

Use the below steps to install `eslint-config-perxhealth` in to your Node or
JavaScript project.

### Install ESLint and Prettier

This package expects `eslint` and `prettier` to be installed as peer
dependencies.

```bash
$ pnpm install -D eslint prettier
```

To view a list of all peer dependencies, run the following command

```
$ pnpm info "eslint-config-perxhealth@latest" peerDependencies
```

### Add Config Package

First, install the package from the npm registry with your package manager of
choice.

```bash
$ pnpm install -D eslint-config-perxhealth
```

Or with `yarn`

```bash
$ yarn install -D eslint-config-perxhealth
```

Or with `npm`

```bash
$ npm install --save-dev eslint-config-perxhealth
```

### Add ESLint Config

Configure your project's ESLint config to use the newly installed package. At
Perx we prefer using `.yaml` files, but there's [many ways to do so](https://eslint.org/docs/latest/use/configure/configuration-files#using-configuration-files)

Create a file named `.eslintrc.yaml`.

```yaml
extends:
  - perxhealth
```

Or with JavaScript, create `.eslintrc.js`.

```javascript
module.exports = {
  "extends": "perxhealth"
}
```

It is also possible to extend further, as is the nature of ESLint config.

Below is an example which starts with Airbnb's [popular config](https://www.npmjs.com/package/eslint-config-airbnb) 
and applies Perx's over the top.

```yaml
extends:
  - airbnb
  - perxhealth
```

## Maintenance or Development

Follow the below steps in sequence to get up and running with a local
development copy of the package.

### Prerequisites

You will need the following things properly installed on your machine.

- [Git](https://git-scm.com/)
- [asdf](https://github.com/asdf-vm/asdf)

### Clone the repository

```bash
$ git clone git@github.com:perxhealth/eslint-config-perxhealth.git
$ cd eslint-config-perxhealth
```

### Install System Dependencies

Use `asdf` to ensure the correct version of the package's system dependencies
are installed and ready to use.

```bash
$ asdf install
```

### Linting

Ensure this package lints against its own rules.

```bash
$ pnpm lint
```
