// Core
import Component from './Component';


export class div extends Component {

    render() {
        const {className} = this.props;
        const divElement = document.createElement('div');
        divElement.classList = className;
        divElement.innerHTML = typeof children === 'string' ? this.children : '';
        return divElement;
    }
}

export class span extends Component {

    render() {
        const {className} = this.props;
        const spanElement = document.createElement('span');
        spanElement.classList = className;
        spanElement.innerHTML = this.children;
        return spanElement;
    }
}

export class h1 extends Component {

    render() {
        const {className} = this.props;
        const h1Element = document.createElement('h1');
        h1Element.classList = className;
        h1Element.innerHTML = this.children;
        return h1Element;
    }
}

export class p extends Component {

    render() {
        const {className} = this.props;
        const pElement = document.createElement('p');
        pElement.classList = className;
        pElement.innerHTML = this.children;
        return pElement;
    }
}