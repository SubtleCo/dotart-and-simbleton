import { UseBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".container");

export const BusinessList = () => {
    const businessArray = UseBusinesses();
    let businessHTML = "";
    businessArray.forEach(business => {
        businessHTML += Business(business);
    });
    contentTarget.innerHTML += businessHTML;
}