export default class ProductsDB {
    static init() {
        localStorage.set("1", {"test":"1","test2":"2","test3":123}) ;
    }

    static get(key) {
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    static set(key,value) {
        return localStorage.setItem(key,JSON.stringify(value));
    }

    static length() {
            return localStorage.length() ;
    }
    static unset(key) {
        if(this.isset(key))
            return localStorage.removeItem(key);
        else
            return null;
    }

    static clear() {
        return localStorage.clear();
    }

    static isset(key) {
        return this.get(key) !== null;
    }
}
