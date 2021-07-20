import { EVENTS } from '../shared/events';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { ARTISTS } from '../shared/artists';

export const initialState = {
    events: EVENTS,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    artists: ARTISTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};