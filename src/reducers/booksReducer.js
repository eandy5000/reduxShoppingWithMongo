// books reducer
const startingBooks = [
    {
        id: '1',
        name: 'test',
        price: 11
    },
    {
        id: '2',
        name: 'Stuff',
        price: 11
    },
    {
        id: '3',
        name: 'Nonsense',
        price: 11
    }
]

export function booksReducer(state={books: [] }, action) {
    switch(action.type){
        
        //action. payload takes an array
        case 'FETCH':
        return {books: [
            ...state.books,
            ...startingBooks
        ]}

        //takes a single book object as action.payload
        case 'POST':
        return {books: [
            ...state.books,
            postValidator(action.payload)
        ]}

        case 'DELETE':
        const id = action.payload.id
        const delArr = [...state.books]
        
        return {books: delArr.filter(book => id !== book.id)}

        case 'UPDATE_NAME':
        
        const upId = action.payload.id
        const changeItem = updateHelper({...action.payload})

        const upArr = [...state.books]
        const upIndex = upArr.findIndex(i => upId === i.id)
        
        if(upIndex === -1) return {books: state.books}

        return {books: [
            ...upArr.slice(0, upIndex),
            {...upArr[upIndex], ...changeItem},
            ...upArr.slice(upIndex + 1)
        ]}
        
        default:
        return {books: state.books}

    }
}

// HELPERS
// only allows the user to update name and price
function updateHelper(obj) {
    for (var key in obj) {
       switch(key) {
         case 'name':
         break;
           
         case 'price':
         break;
           
         default:
           delete obj[key]
                      }
    }
    return obj  
}

function postValidator(obj) {
    for (var key in obj) {
        switch(key) {
            case 'name':
            break;

            case 'id':
            break;

            case 'price':
            break;
            
            default:
            delete obj[key]
        }
    }
    return obj
}