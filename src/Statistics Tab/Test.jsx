

import { mockData } from "./Pages/mockData"
import { sumOfAmount, sumOfQuantity, weightedAverage, extendedAmount, grandTotal } from "./Pages/calculations"
import { useMemo } from "react";
import { generateReport } from "./Pages/generateReport";





export const Test = () => {

    const percentageDistribution= useMemo(()=>{

        const total= grandTotal();

       return mockData.map(oneObject=> {
            const extended= oneObject.Amount * oneObject.Quantity;

            return  total === 0 ? 0: (extended/total)*100;

     } )

    },[])


    const formattedAmountTotal= new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP"}).format(sumOfAmount());

    const formattedWeightedAverage= new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(weightedAverage());

    const extendedAmounts= extendedAmount();
    const formattedExtendedAmounts= extendedAmounts.map(amount=>new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(amount));

    const formattedGrandTotal= new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(grandTotal());

function handleGeneratePDF(){
     generateReport({mockData,
         totalQuantity: sumOfQuantity(), totalAmount: sumOfAmount(), average :weightedAverage(), totalGrand: grandTotal(), percentageDistribution});
}

  return (
    <>
     <div className="allSummaryCards">
        <div className="summaryCard">
            <h2>Total Quantity</h2>
            <p className="figure">{sumOfQuantity()}</p>
            <p className="text">Units across records</p>
        </div>

        <div className="summaryCard">
            <h2>Total Amount</h2>
            <p className="figure">{formattedAmountTotal}</p>
            <p className="text">Sum of amount values</p>
        </div>

        <div className="summaryCard">
            <h2>Weighted Average</h2>
            <p className="figure">{formattedWeightedAverage}</p>
            <p className="text">Per Unit</p>
        </div>

        <div className="summaryCard">
            <h2>Grand Total</h2>
            <p className="figure">{formattedGrandTotal}</p>
            <p className="text">Sum of extended amounts</p>
        </div>
<div className="center">
    <button onClick={handleGeneratePDF}> Download PDF Report</button>
</div>

    </div>

        <table>
            <thead>
                <tr>
                    <th>Amount (£)</th>
                    <th>Quantity</th>
                    <th>Entended Amount</th>
                    <th>Distribution (%)</th>
                </tr>
            </thead>
            <tbody>
                {mockData.map((oneObject,index)=>
                     <tr key={oneObject.id}>
                        <td>{oneObject.Amount}</td>
                        <td>{oneObject.Quantity}</td>
                       <td>{formattedExtendedAmounts[index]}</td>
                       <td>{percentageDistribution[index].toFixed(2)}%</td>
                      
                    </tr>
                )}
            </tbody>
        </table>

        
    </>
   
  )
}


{/*
   # NEXT GENERATE PDF REPORT
    
    */}