
const initialState = [
    {
        name : 'Affali',
        job : 'Student',
        avatar : 'photo.jpeg',
        id : 1
    },
    {
        name : 'Moussa',
        job : 'Teacher',
        avatar : 'photo.jpeg',
        id : 2
    },
    {
        name : 'Chaka',
        job : 'Student',
        avatar : 'photo.jpeg',
        id : 3
    }
]

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD-USER' :{
            return [...state, action.payload];
        }
        case 'DELETE-USER' :{
            let index = state.findIndex(user => user.id === parseInt(action.payload));
            let newUser = [...state];
            newUser.splice(index, 1);
            return newUser;
        }
        case 'SET-USER' :{
            let newUser = [...state];
            let index = newUser.findIndex(user => user.id === parseInt(action.payload.id));
            newUser[index] = action.payload.user;
            return newUser;
        }
        default :{
            return state;
        }
    }
}
