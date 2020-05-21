
const eventSelector = (event, text='') => {
    // debugger;  
    text = text.map(x => x.toLowerCase())          
    if(text.length){
       return event.filter(e => {
            return text.indexOf(e.type_event.name.toLowerCase()) > -1
        })
        
    }
        else{
            return event.filter(e => {
                const textMatch = e.type_event.name;
                return  textMatch ;
            })
        }
}

export default eventSelector;