
export class localStorageProvider {

    public static getObject(key: string) {
        let saved : any;
        if (!localStorage.getItem(key)) 
            return undefined;
        saved = localStorage.getItem(key);
        return JSON.parse(saved);
    }

    public static setObject(key: string, objectValue: any) {
        localStorage.setItem(key, JSON.stringify(objectValue));
    }

    public static removeObject(key: string) {
        localStorage.removeItem(key);
    }
}
