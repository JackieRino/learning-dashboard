import { mockData } from "./mockData"

export function sumOfQuantity (){

      const total=   mockData.reduce((sum,oneObject)=>{
            return sum+ oneObject.Quantity;
        },0)
        
        return total;
    
}


export function sumOfAmount(){
      const total= mockData.reduce((sum,oneObject)=>{
            return sum + Number(oneObject.Amount);
      },0)

      return total;
}

export function extendedAmount(){
    const extendedAmounts=  mockData.map(oneObject=>{
            return Number(oneObject.Amount) * Number(oneObject.Quantity)
      })
      return extendedAmounts;
};

export function weightedAverage(){
      const weightedSum= mockData.reduce((sum,oneObject)=>{

            const extendedAmount= oneObject.Amount * oneObject.Quantity;
            return sum + extendedAmount;
      },0)
            
      const quantitySum= sumOfQuantity();

     const average= weightedSum / quantitySum;

     return average;


}

export function grandTotal(){
      return extendedAmount().reduce((sum,amount)=> sum + amount,0);
}