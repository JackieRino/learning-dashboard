
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable";



export function generateReport({mockData, totalQuantity, totalAmount, average, totalGrand, percentageDistribution}){
 const doc = new jsPDF();

 const currency= value=> new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(Number(value));

//  Report title
 doc.setFontSize(20);
 doc.text("Numerical Data Report", 14,20);

//  Report Date
doc.setFontSize(20);
doc.text(`Generated: ${new Date().toLocaleDateString("en-GB")}`, 14, 28);

// Summary Section
 doc.setFontSize(13);
 doc.text("Summary", 14, 40 );

 doc.setFontSize(10);
 doc.text(`Total Quantity: ${totalQuantity}`, 14, 49);
  doc.text(`Total Amount: ${currency(totalAmount)}`, 14, 56);
   doc.text(`Weighted Average: ${currency(average)}`, 14, 63);
    doc.text(`Grand Total: ${currency(totalGrand)}`, 110, 49);



  // Detailed data table
  autoTable(doc, {
    startY: 75,
    head: [[
      "Amount (£)",
      "Quantity",
      "Extended Amount (£)",
      "Distribution (%)"
    ]],
    body: mockData.map((item, index) => {
      const extended =
        Number(item.Amount) * Number(item.Quantity);

      return [
        currency(item.Amount),
        String(item.Quantity),
        currency(extended),
        `${Number(
          percentageDistribution[index] ?? 0
        ).toFixed(2)}%`
      ];
    }),
    theme: "grid",
    headStyles: {
      fillColor: [40, 65, 100]
    },
    styles: {
      fontSize: 9
    }
  });




// download the PDF

doc.save("numerical-data-report.pdf");

 
}


