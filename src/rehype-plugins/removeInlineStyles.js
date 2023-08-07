import { visit } from 'unist-util-visit';

export const removeInlineStyles = () => {
  return (tree) => {
    // console.log("inline style Plugin running");
    visit(tree, 'raw', node => {
      if (node.value.includes('<pre')) {
        // console.log("Encountered a raw <pre> element.");
        
        // Remove style attribute from <pre> inside raw content
        const regex = /(<pre[^>]+)style="[^"]*"/g;
        node.value = node.value.replace(regex, '$1');
        
      }
    });
  };
};
