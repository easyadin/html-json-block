**Creates a json structure of any html element**

**Usage**

````

import BlockKit from 'BlockKit'

const { newBlock } = new BlockKit();

const block = newBlock({
  a: {
    block: {
      href: 'google.com',
      target: '_black',
      div: {
        block: {
          innerText: '',
        },
      },
    },
  },
});

console.log(block);

````
