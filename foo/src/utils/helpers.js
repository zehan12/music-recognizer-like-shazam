
export const mergeClassName = (val1, val2) => {
    return val1 + (val2 ? ' ' + val2 : '')
}