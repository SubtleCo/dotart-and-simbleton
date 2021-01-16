import { UseBusinesses } from './BusinessProvider.js';
import { ExtractPurchaseAgents } from './ExtractPurchaseAgent.js';
import { PurchaseAgent } from './PurchaseAgent.js';

export const PurchaseAgentList = () =>{
    const businessArray = UseBusinesses();
    const agentArray = ExtractPurchaseAgents(businessArray);
    const contentTarget = document.querySelector('.allAgents')
    let agentHTML = "";

    agentArray.forEach(agent => {
        agentHTML += PurchaseAgent(agent);
    })


    contentTarget.innerHTML += `<h2 class="purchase-agent-title">Purchasing Agents </h2> 
                                ${agentHTML}`;

 // Search functionality, agents

    const agentSearchResultArticle = document.querySelector(".foundAgents");

    document
        .querySelector("#agentSearch")
        .addEventListener("keypress", keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const foundAgent = [];
                    const searchKey = keyPressEvent.target.value.toLowerCase();

                    if (searchKey === "") {
                        agentSearchResultArticle.innerHTML = "";
                        contentTarget.innerHTML = "";
                        return PurchaseAgentList();
                    }
                    foundAgent.push(agentArray.find(agent => {
                        return agent.fullName.toLowerCase().includes(searchKey)
                    }))
                    console.log(foundAgent);
                    let foundAgentHTML = "";
                    foundAgent.forEach(agent => {
                        foundAgentHTML += PurchaseAgent(agent);
                    });
                    contentTarget.innerHTML = "";
                    agentSearchResultArticle.innerHTML = foundAgentHTML;
                }
        })
}