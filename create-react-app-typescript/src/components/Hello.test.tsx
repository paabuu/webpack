import * as enzyme from 'enzyme';
import * as React from 'react';
import { Hello } from './Hello';

describe('test hello', () => {
    it('renders the correct text when no emthusiasm level is given', () => {
        const hello = enzyme.shallow(<Hello languageName="Daniel" />);
        expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
    });
    
    it('renders the correct text with an explict enthusiam of 1', () => {
        const hello = enzyme.shallow(<Hello languageName="Wenjie" enthusiasmLevel={1} />);
        expect(hello.find('.greeting').text()).toEqual('Hello Wenjie!');
    });
    
    it('renders the correct text with an explict enthusiam of 5', () => {
        const hello = enzyme.shallow(<Hello languageName="Wenjie" enthusiasmLevel={5} />);
        expect(hello.find('.greeting').text()).toEqual('Hello Wenjie!!!!!');
    });  
    
    it('throws when the enthusiasm level is 0', () => {
        expect(() => {
            enzyme.shallow(<Hello languageName="Wenjie" enthusiasmLevel={0} />)
        }).toThrow()
    });
    
    it('throws when the enthusiasm level is negative', () => {
        expect(() => {
            enzyme.shallow(<Hello languageName="Wenjie" enthusiasmLevel={-1} />)
        }).toThrow()
    });
});

describe('test checkbox', () => {
    it('CheckboxWithLabel chnages the text after click', () => {
        const hello = enzyme.shallow(<Hello languageName="wenjie" />);
        const checkbox = hello.find('input[type="checkbox"]');

        expect(hello.find('.checkbox').text()).toEqual('off');
        checkbox.simulate('change');
        expect(hello.find('.checkbox').text()).toEqual('on');
    });
});

describe('test todos', () => {
    it('add a todo after enter', () => {
        const hello = enzyme.mount(<Hello languageName="wenjie" />);
        const input = hello.find('.todos input');
        expect(hello.find('.each-todo').length).toEqual(0);
        
        input.simulate('keydown', {target: {value: 'hahah'}, key: 'Enter'});
        expect(hello.find('.each-todo').length).toEqual(1);
    });
});

