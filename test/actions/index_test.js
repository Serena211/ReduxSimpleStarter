import { expect } from '../test_helper'
import { SAVE_COMMENT } from '../../src/actions/types'
import { saveComment } from '../../src/actions/index';


describe('actions', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            const actions = saveComment();
            expect(actions.type).to.equal(SAVE_COMMENT);
        })
        it('has the correct payload', () => {
            const actions = saveComment('comment1');
            expect(actions.payload).to.equal('comment1');
        })
    })
})