import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
    let component;
    beforeEach(() => {
        component = renderComponent(CommentBox);
    })
    it('has the correct class name', () => {
        expect(component).to.have.class('comment-box');
    });
    it('has a textarea ', () => {
        expect(component.find('textarea')).to.exist;
    });
    it('has a button', () => {
        expect(component.find('button')).to.exist;
    })
    describe('when enters some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'hahahahahah');
        })
        it('shows text that is entered', () => {
            expect(component.find('textarea')).have.value('hahahahahah');
        });
        it('clears textarea after clicking submit button', () => {
            component.simulate('submit');
            expect(component.find('textarea')).have.value('');
        })
    });

})