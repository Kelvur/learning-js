// Components
import Component from './Component';
import { div, h1, p } from './StandardElementsFactory';


class BasicComponent extends Component {

    render() {
        return new div({ className: 'basic-component' },
        [
            new h1({ className: 'basic-component__title' }, 'Basic Component'),
            new p({ className: 'basic-component__description' }, 'I am a basic component'),
        ]
        );
    }
}

export default BasicComponent;
