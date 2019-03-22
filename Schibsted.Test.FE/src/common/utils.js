export const stringFormat = (template, ...args) => {
    for (let i = 0; i < args.length; i++) {
        template = template.replace(`{${i}}`, args[i]);
    }
    return template;
};

export const isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}