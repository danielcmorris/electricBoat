import { Propeller } from "./propeller";

export class Boat{
    makeModel:string = "Alden 31"
    waterline:number = 24;
    displacement:number = 13300;
    draft:number = 3.5;
    beam:number = 10.5;
    propeller:Propeller = new Propeller()
    public get csa() : number {
       return this.getCSA();
    }
    
    prismatic:number = .45;
  
    constructor(){
       
    }
    getCSA() {
        var d = 0;
        let csa = 0;
        try {
          d = parseFloat(`${this.draft}`);
          var pi;
          if (d > 0)
            csa = Math.PI * Math.pow(d, 2) / 2;
        } catch {
          csa = 0;
        }
        return csa;
      }
}