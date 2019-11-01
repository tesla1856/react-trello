import Immutable from 'seamless-immutable';

const initState = Immutable(
{
    topicsByUrl:{},
    selectedTopicUrls:[]
}
);

export default function reduce (state=initState, action={})
    {
        switch (action.type)
        {
            default:
                return state;
        }
    }