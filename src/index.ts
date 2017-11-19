 export class TsLinq<T> {
     constructor(private array:T[]) {

     }

     Where(predicate:IPredicate<T>) {
         const result:T[] = new Array<T>();
         for(const item of result) {
             if (predicate(item)) {
                 result.push(item);
             }
         }
         return result;
     }

 }


 export interface IPredicate<T> {
     (item:T):boolean;
 }


 var linq = new TsLinq<string>(["khurram","mohib"]);
 var predicate:IPredicate<string> = (item:string)=> item ==="mohib";

 linq.Where(predicate);