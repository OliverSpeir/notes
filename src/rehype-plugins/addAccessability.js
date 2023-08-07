import { visit } from 'unist-util-visit';

export const accessibleCheckbox = () => {
    let idCounter = 0;

    return (tree) => {
      // console.log("accessability Plugin running");

      let modifications = [];

      visit(tree, 'element', (node, index, parent) => {
        // console.log("Visiting node: ", node.tagName);
        
        if (node.tagName === 'input' && node.properties.type === 'checkbox') {
        //   console.log("Checkbox found");
          
          let id = `checkbox-${idCounter++}`;
          node.properties.id = id;
          
          let description = node.properties.checked 
              ? 'Checkbox is selected' 
              : 'Checkbox is not selected';

          let label = {
            type: 'element',
            tagName: 'label',
            properties: {
              htmlFor: id,
              className: ['sr-only']
            },
            children: [{ type: 'text', value: description }],
          };

          modifications.push({parent, node, label});
        }
      });

      modifications.forEach(({parent, node, label}) => {
        let index = parent.children.indexOf(node);
        parent.children.splice(index, 0, label); 
        // console.log("Checkbox processed");
      });
    };
};
