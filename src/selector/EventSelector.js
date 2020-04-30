
const eventSelector = (event, { text, category }) => {

    return event.ads.filter(e => {
        console.log('filter ad', e)
        const searchByCategory = e.category == category;
        const textMatch = e.title.toLowerCase().includes(text.toLowerCase());
        return searchByCategory & textMatch ;
    })
}


export const eventSelectorByText = (event, { text }) => {

    return event.ads.filter(ad => {
        console.log('filter ad', ad)
      
        const textMatch = ad.title.toLowerCase().includes(text.toLowerCase());
        return textMatch ;
    })
}
export default eventSelector;