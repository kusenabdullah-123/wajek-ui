export function dateFromString(value: string): Date {
    let d = new Date();
    d.setTime(Date.parse(value));
    return d;
}

export class ObjectHelper {
    
    static fromJson(object: any, json: any) {
        return json == undefined ? undefined : Object.assign(object, json);
    }

    static toJson(object) {
        let json = {};

        const proto = Object.getPrototypeOf(object);
        Object.entries(Object.getOwnPropertyDescriptors(proto))
        .filter(([key, descriptor]) => typeof descriptor.get === 'function')
        .map(([key, descriptor]) => {
            if (descriptor && key[0] !== '_') {
                try {
                    const val = (this as any)[key];
                    json[key] = val;
                } catch (error) {
                    console.error(`Error calling getter ${key}`, error);
                }
            }
        });
        
        return json;
    }

}