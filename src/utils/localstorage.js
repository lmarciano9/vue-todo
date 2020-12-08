export function saveObject(key, object) {
    let data = '';

    if (typeof(object) === 'object') {
        data = JSON.stringify(object);
    } else {
        data = String(object);
    }

    localStorage.setItem(key, data);
}

export function getObject(key) {
    let data = localStorage.getItem(key);

    try {
        return JSON.parse(data);
    } catch (_) {
        return null;
    }
}