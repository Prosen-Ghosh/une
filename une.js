module.exports = (value) => {
    return (typeof value !== 'undefined' && value !== null && typeof value === 'object') ?
            Object.keys(value).length === 0 : (typeof value !== 'undefined' && value !== null && Object.prototype.toString.call(value) === '[object Array]') ?
            value.length === 0 : (value === undefined || value === null || value === '');
}