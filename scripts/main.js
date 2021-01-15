import { BusinessList } from './BusinessList.js'
import { PurchaseAgentList } from './PurchaseAgentList.js'

// Filter with key / value pairs
BusinessList("addressStateCode", "NY");
BusinessList("companyIndustry", "Manufacturing");

// No filter
// BusinessList();

PurchaseAgentList();
console.log("hi!")