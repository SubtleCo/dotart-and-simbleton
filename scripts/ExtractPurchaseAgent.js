export const ExtractPurchaseAgents = (businessArray) => {
    const purchaseAgentArray = businessArray.map(business => {
        return {
            fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
            company: business.companyName,
            phoneNumber: business.phoneWork
        };
    })
    return purchaseAgentArray;

}