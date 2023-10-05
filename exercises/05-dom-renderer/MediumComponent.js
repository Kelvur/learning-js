// Components
import Component from './Component';
import { div } from './StandardElementsFactory';
import BasicComponent from './BasicComponent';


class MediumComponent extends Component {

    render() {
        return (
            new div({}, [
                new BasicComponent(),
                new BasicComponent(),
            ])
        );
    }
}

export default MediumComponent;
