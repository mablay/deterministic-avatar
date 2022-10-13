# Deterministic Avataaars

Deterministic text hash to avatar converter.

If you want to generate an avatar based on a user ID or other serializable data, here's an example.

For this example I used:

* [VueJS v2](https://v2.vuejs.org) as UI framework
* [vuejs-avataaars](https://github.com/orgordin/vuejs-avataaars) from 
Or Gordin to render a parameterised avatar
* [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) to hash the user input
* [avataaars](https://avataaars.com) designed by [Pablo Stanley](https://twitter.com/pablostanley)

I also found a [react version](https://github.com/fangpenlin/avataaars) of avataaars.

## Setup
If you want to run this on your own, clone the repository and step into the project root directory.

```sh
npm install
npm run serve
```

Note: SubtleCrypto is only available on localhost or via https.
