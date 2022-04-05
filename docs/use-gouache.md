---
sidebar_position: 3
---
# use-gouache 📦 


Welcome to the `useGouache` React hook. This hook is needed in order to use the [Gouache app](https://gouache.app/) and to see live updates of your styles into your apps.

## Table of Contents
- [Features](#features)
- [Install](#install)
  - [With Yarn](#with-yarn)
  - [With NPM](#with-npm)
- [Usage](#usage)
  - [Basics](#basics)
  - [How to get your project's API key?](#how-to-get-your-projects-api-key)
  - [Default style object / production mode](#default-style-object--production-mode)
  - [URL params override](#url-paramsoverride)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Features

- Hot reload (Live updates)
- Loading state
- Production mode
- Styles override using search params

## Install


### With Yarn

```sh
yarn add @gouache-app/use-gouache
```

### With NPM

```sh
npm i @gouache-app/use-gouache --save
```


## Usage

### Basics

```jsx
import { useGouache } from '@gouache-app/use-gouache';

const App = () => {
  const { styles, isLoading } = useGouache({ apiKey: 'MY_GOUACHE_API_KEY' });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>{JSON.stringify(styles)}</p>
    </>
  );
};
```

### How to get your project's API key?
 
Take a look at our docs: https://docs.gouache.app/docs/faq/api-key

### Default style object / production mode

We recommend using the use-gouache hook in production using the defaultStyles object in order to prevent fetching the styles object in production. To do so, you need to download the Styles object and use the `defaultStyles` and the `useDefaultStyles` params.

```jsx
import defaultStyles from './path_to_downloaded_json_file.json';

const App = () => {
  const { styles, isLoading } = useGouache({
    apiKey: 'MY_API_KEY',
    useDefaultStyles: true,
    defaultStyles,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>{JSON.stringify(styles)}</p>
    </>
  );
};
```

### URL params override

When you're using Gouache in production, like said earlier, you should use the defaultStyles object. That said, it did not mean that you cannot use the Gouache platform to test things out. To override the default styles, you can add the following search params to your app URL `?gouache-api-key=MY_GOUACHE_API_KEY`. (replacing `MY_GOUACHE_API_KEY` with your project's API key). This will only change the styles in your browser and not on any other user.

ex: https://example.com?gouache-api-key=MY_GOUACHE_API_KEY

### Theming with Gouache and styled-components 💅🏾

If you're interested by using Gouache with `styled-components`, take a look at our [blog article](https://blog.gouache.app/theming-with-gouache-and-styled-components-1097aa4aee73).

[![Theming with Gouache and styled-components](https://miro.medium.com/max/1400/1*Ctnl0ERmRTU9EcUmD8gffg.png)](https://blog.gouache.app/theming-with-gouache-and-styled-components-1097aa4aee73)
