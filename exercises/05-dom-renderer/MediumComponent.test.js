import "./mockDocument";
// Component
import DomRenderer from "./DomRenderer";
import MediumComponent from "./MediumComponent";


describe('BasicComponent', () => {
    it('should render correctly', () => {
        const basicComponent = new MediumComponent();
        const bodyElement = document.createElement('body');
        DomRenderer.render(basicComponent, bodyElement);
        expect(bodyElement.getChildren()[0].elementName).toBe('div');
        expect(bodyElement.getChildren()[0].getChildren()[0].elementName).toBe('div');
        expect(bodyElement.getChildren()[0].getChildren()[0].classList).toBe('basic-component');
        expect(bodyElement.getChildren()[0].getChildren()[1].elementName).toBe('div');
        expect(bodyElement.getChildren()[0].getChildren()[1].classList).toBe('basic-component');
    });
});