export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null, 
    //token: 'BQASA5MMV5e62_ash8QBOa868vz4g6THwMi8h-ndyPBhIXW-zv…IKET7Hf0_tQnEYF17rFmOY5PtAq6lTBEUpoM5AFeNbEJHTPeq',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET__USER':
            return{
                ...state,
                user: action.user
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token:action.token
                }
            case  'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists,
                };

            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
            default:
                return state;
    }
}
export default reducer;