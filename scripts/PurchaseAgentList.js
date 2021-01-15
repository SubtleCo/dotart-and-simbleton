import { UseBusinesses } from './BusinessProvider.js';
import { ExtractPurchaseAgents } from './ExtractPurchaseAgent.js';
import { PurchaseAgent } from './PurchaseAgent.js';

export const PurchaseAgentList = () =>{
    const businessArray = UseBusinesses();
    const agentArray = ExtractPurchaseAgents(businessArray);
    const contentTarget = document.querySelector('.container')
    let agentHTML = "";

    agentArray.forEach(agent => {
        agentHTML += PurchaseAgent(agent);
    })


    contentTarget.innerHTML += `<h2 class="purchase-agent-title">Purchasing Agents </h2> 
                                ${agentHTML}`;
}