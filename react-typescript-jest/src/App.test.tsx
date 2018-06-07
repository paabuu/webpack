import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('test app', () => {
    it('message props', () => {
        const app = shallow(<App message="xixi" />);
        expect(app.find('.message').text()).toBe('xixi')
    });
})