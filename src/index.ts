import { IBlock, IRenderBlock } from './utils/types';
class BlockKit {
  //   renderUI: IRenderBlock = {};

  newBlock(block: IBlock) {
    return block;
  }

  /**
   * In case you use a component library
   * Provide all UI element for the supported html elements
   */
  //   setRenderElement(renderUI: IRenderBlock) {
  //     this.renderUI = renderUI;
  //     return this.renderUI;
  //   }
}

export default BlockKit;

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
