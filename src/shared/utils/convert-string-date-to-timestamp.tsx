export default function ConvertStringDateToTimestamp(stringDate: string): number {
    const dateString = stringDate;
    const dateParts = dateString.split('/');
    const dateObject = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
    const timestamp = dateObject.getTime()/1000;
    return timestamp;
}