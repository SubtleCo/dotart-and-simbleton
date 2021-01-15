export const ExtractPurchaseAgents = (businessArray) => {
    const purchaseAgentArray = businessArray.map(business => {
        return business.purchasingAgent;
    })
    return purchaseAgentArray;

}