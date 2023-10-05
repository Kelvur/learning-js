
class Component {

  constructor(props = {}, children = []) {
    this.isComponent = true;
    this.props = props;
    this.children = children;
  }

  getProps() {
    return this.props;
  }

  getChildren() {
    return this.children;
  }

  render() {
    throw new Error('Not implemented');
  }
}
export default Component;