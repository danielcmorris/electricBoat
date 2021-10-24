
export class Motor {

    makeModel: string = '';
    maxVoltageRating: number = 0;
    rpmAtMaxVoltage: number = 0;
    maxContinuousCurrentRating: number = 0;
    maxContinuousTorqueRating: number = 0;
    maxPeakCurrentRating: number = 0;
    maxPeakTorqueRating: number = 0;
    motorEfficiencyRating: number = 0;
    motorTorqueConstantLbsPerFtPerAmp: number = 0;
    motorVoltageConstantRpmsPerVolt: number = 0;
    motorshaftToPropShaftReductionRatio: number = 0;
    powerController:PowerController = new PowerController()
  }


export class PowerController{

        makeModel:string  ="";
        minVoltageRating: number=0;
        maxVoltageRating: number=0;
        MaxPeakVoltage: number=0;
        maxOneHourRating: number=0;
        maxContinuousCurrentRating: number=0;
       
       
      
    
}