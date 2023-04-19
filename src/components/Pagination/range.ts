export const range = (start: any, end: any, step: number = 1) => {

    let i = start

    const range = []

    do {
        range.push(i)
        i += step
    } while (i <= end)

    return range
}