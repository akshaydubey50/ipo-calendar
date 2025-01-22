export function cn(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(" ");
}


export const formatDateRange = (dateObject) => {
    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const startDate = new Date(dateObject?.biddingStartDate);
    const endDate = new Date(dateObject?.listingDate);

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = months[startDate.getMonth()];
    const year = startDate.getFullYear();

    const startOrdinal = `${startDay}${getOrdinalSuffix(startDay)}`;
    const endOrdinal = `${endDay}${getOrdinalSuffix(endDay)}`;

    return `${startOrdinal} - ${endOrdinal} ${month} ${year}`;
};
