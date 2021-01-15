import { UseBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".container");

export const BusinessList = () => {
    const businessArray = UseBusinesses();
    let businessHTML = "";
    for (const business of businessArray) {
        businessHTML += Business(business);
    }
    contentTarget.innerHTML += businessHTML;
}