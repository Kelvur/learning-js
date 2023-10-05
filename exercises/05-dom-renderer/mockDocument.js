
function createElement(elementName) {
  let children = [];
  
  return {
    elementName,
    classList: '',
    innerHTML: '',
    getChildren() {
        return children;
    },
    appendChild(child) {
        children.push(child);
    }
  };
}

global.document = {
    createElement,
}