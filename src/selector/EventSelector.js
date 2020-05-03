
const eventSelector = (event, text='') => {
    return event.filter(e => {
        // const searchByCategory = e.type_event.name == text;
        const textMatch = e.type_event.name.toLowerCase().includes(text.toLowerCase());
        return  textMatch ;
    })
}


// export const eventSelectorByText = (event, { text }) => {

//     return event.ads.filter(ad => {
//         console.log('filter ad', ad)
      
//         const textMatch = ad.title.toLowerCase().includes(text.toLowerCase());
//         return textMatch ;
//     })
// }
export default eventSelector;