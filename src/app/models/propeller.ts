export class Propeller {
    diameter: number = 0;
    rpmAtHullSpeed: number = 0;
    maxHullSpeedInKnots: number = 0;
    optimumPitch:number = 0;
    efficiency:number = 0;
    constructor() { }
    public get pitch(): number {
        let cp =  this.calculatedPitch()
        
        if(!cp){
            return 0;
        }
      return cp;
    }
    private calculatedPitch() {
      let speed = this.maxHullSpeedInKnots;
      let rpm = this.rpmAtHullSpeed;
      return (((speed * 101.3) / rpm) * 12) / 0.55
    }
  
  
  
  }