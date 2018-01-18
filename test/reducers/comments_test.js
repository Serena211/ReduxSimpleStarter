import { expect } from '../test_helper'
import commentsReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', () => {
    it('handles actions with unknown type', () => {
        expect(commentsReducer(undefined,{})).to.eql([]);
    })
    it('handles actions of SAVE_COMMENT type', () => {
        const action = { type: SAVE_COMMENT, payload: 'comment1' };
        expect(commentsReducer([], action)).to.eql(['comment1']);
    })
})