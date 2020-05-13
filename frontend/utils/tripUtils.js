export const orderEventsByTripDate = events => events.sort((eventA, eventB) => {
    const dateA = new Date(eventA.tripDate).getTime();
    const dateB = new Date(eventB.tripDate).getTime();
    return dateA - dateB;
});