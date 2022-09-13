export function getRating(form)
{
    let rating = 0;
    let count = 0;
    for (const [key, value] of Object.entries(form)) {
        rating += parseInt(value);
        count++;
    }
    return rating/count;
}