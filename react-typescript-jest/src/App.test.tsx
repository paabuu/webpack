import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Hello from './Hello';

describe('test app', () => {
    it('message props', () => {
        const app = shallow(<App message="xixi" />);
        expect(app.find('.message').text()).toBe('xixi')
    });

    it('change count after click', () => {
        const app = shallow(<Hello name="xixi" age={1} />);
        expect(app.state().count).toEqual(0);
        app.simulate('click');
        expect(app.state().count).toEqual(1);
    });
})