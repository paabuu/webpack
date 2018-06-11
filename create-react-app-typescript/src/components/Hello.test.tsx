import * as enzyme from 'enzyme';
import * as React from 'react';
import Container, { Hello } from './Hello';
import { enthusiasm } from '../reducer/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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

    it('enthusiasm count + 1 after click increment button', () => {
        const store = createStore(enthusiasm, {
            languageName: 'A',
            enthusiasmLevel: 1
        });
        const subject = (
            <Provider store={store}>
                <Container />
            </Provider>
        );

        const wrapper = enzyme.mount(subject);
        store.dispatch({
            type: 'INCREMENT_ENTHUSIASM'
        });

        expect(wrapper.find('.greeting').text()).toEqual('Hello A!!');
    });

    it('enthusiasm count - 1 after click decrement button', () => {
        const store = createStore(enthusiasm, {
            languageName: 'A',
            enthusiasmLevel: 3
        });
        const subject = (
            <Provider store={store}>
                <Container />
            </Provider>
        );

        const wrapper = enzyme.mount(subject);
        store.dispatch({
            type: 'DECREMENT_ENTHUSIASM'
        });

        expect(wrapper.find('.greeting').text()).toEqual('Hello A!!');
    });

    it('enthusiasm count will not be less than 1 after click decrement button', () => {
        const store = createStore(enthusiasm, {
            languageName: 'A',
            enthusiasmLevel: 1
        });
        const subject = (
            <Provider store={store}>
                <Container />
            </Provider>
        );

        const wrapper = enzyme.mount(subject);
        store.dispatch({
            type: 'DECREMENT_ENTHUSIASM'
        });

        expect(wrapper.find('.greeting').text()).toEqual('Hello A!');
    });
});

