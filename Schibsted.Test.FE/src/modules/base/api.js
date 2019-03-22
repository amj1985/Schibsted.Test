class Api {
    constructor() {
    }
    post(url, data, opts = {}) {
        opts.method = 'POST';
        opts.body = JSON.stringify(data);
        opts.headers = {
            'Content-Type': 'application/json',
            'Authorization': this.authHeader()
        };
        return new Promise((resolve, reject) =>
            fetch(url, opts).then(this.checkStatus)
                .then(this.parseJSON)
                .then(data => resolve(data))
                .catch(err => reject(err)));
    }
    put(url, data, opts = {}) {
        opts.method = 'PUT';
        opts.body = JSON.stringify(data);
        opts.headers = {
            'Content-Type': 'application/json',
            'Authorization': this.authHeader()
        };
        return new Promise((resolve, reject) =>
            fetch(url, opts).then(this.checkStatus)
                .then(this.parseJSON)
                .then(data => resolve(data))
                .catch(err => reject(err)));
    }
    get(url, opts = {}) {
        opts.method = 'GET';
        opts.headers = {
            'Content-Type': 'application/json',
            'Authorization': this.authHeader()
        };
        return new Promise((resolve, reject) =>
            fetch(url, opts)
                .then(this.checkStatus)
                .then(this.parseJSON)
                .then(data => resolve(data))
                .catch(err => reject(err))
        );
    }
    delete(url, opts = {}) {
        opts.method = 'DELETE';
        opts.headers = {
            'Content-Type': 'application/json',
            'Authorization': this.authHeader()
        };
        return new Promise((resolve, reject) => {
            fetch(url, opts)
                .then(this.checkStatus)
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) return response;
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }

    parseJSON(response) {
        return response.text().then(function (text) {
            return text ? JSON.parse(text) : {}
        })
    }
    authHeader() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user && user.accessToken ? ` Bearer ${user.accessToken}` : {};
    }
}
export default Api = new Api();