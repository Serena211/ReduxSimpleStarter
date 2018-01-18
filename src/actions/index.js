// action creator to save each comment as it gets created
import { SAVE_COMMENT } from './types'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}