import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const callBack = jest.fn() //fn creates moc func
        const wrapper = shallow(<Button onClick={callBack}/>);
        wrapper.find('button').simulate('click');
        expect(callBack).toHaveBeenCalled()
    });
});

//toHaveBeenCalled is actual method