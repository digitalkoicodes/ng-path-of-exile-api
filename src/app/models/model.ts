export class Model {
    id: string = null;

    constructor(options?) {
        for (var prop in options)
         if (options.hasOwnProperty(prop))
             this[prop] = options[prop];
     }
 
     patch(options: Object){
         for (var prop in options)
         if (options.hasOwnProperty(prop))
             this[prop] = options[prop];
     }
}