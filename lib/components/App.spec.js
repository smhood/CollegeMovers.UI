import App from './App';
import { shallow } from 'enzyme';

describe('Test', () =>{
  it('should render', () => {
    const component = shallow(<App />);
    
    expect(component).toBeDefined;
  });
})