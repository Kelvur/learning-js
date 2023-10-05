import "./mockDocument";
// Component
import DomRenderer from "./DomRenderer";
import BasicComponent from "./BasicComponent";


describe('BasicComponent', () => {
    it('should render correctly', () => {
        const basicComponent = new BasicComponent();
        const bodyElement = document.createElement('body');
        DomRenderer.render(basicComponent, bodyElement);
        const rootElement = bodyElement.getChildren()[0];
        expect(rootElement.elementName).toBe('div');
        expect(rootElement.classList).toBe('basic-component');
        expect(rootElement.getChildren()[0].elementName).toBe('h1');
        expect(rootElement.getChildren()[0].classList).toBe('basic-component__title');
        expect(rootElement.getChildren()[0].innerHTML).toBe('Basic Component');
        expect(rootElement.getChildren()[1].elementName).toBe('p');
        expect(rootElement.getChildren()[1].classList).toBe('basic-component__description');
        expect(rootElement.getChildren()[1].innerHTML).toBe('I am a basic component');
    });
});