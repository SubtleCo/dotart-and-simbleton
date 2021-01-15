import { UseBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".allCompanies");


// BusinessList() with no parameters will list all business
// If BusinessList() contains a variable, it will try to filter
// variable 1 should be object key as a string
// variable 2 should be object value as a string

export const BusinessList = (filter=undefined, filterValue) => {
    const businessArray = UseBusinesses();
    let businessHTML = "";

    if (!filter) {
        businessArray.forEach(business => {
            businessHTML += Business(business);
        });
    } else {
        const filteredArray = businessArray.filter(business => {
           return business[filter] === filterValue;
        })
        filteredArray.forEach(business => {
            businessHTML += Business(business);
        });
    }

    contentTarget.innerHTML += businessHTML;


    // Search functionality

    const companySearchResultArticle = document.querySelector(".foundCompanies");

    document
        .querySelector("#companySearch")
        .addEventListener("keypress", keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const foundBusiness = [];
                    const searchKey = keyPressEvent.target.value.toLowerCase();

                    if (searchKey === "") {
                        companySearchResultArticle.innerHTML = "";
                        return BusinessList();
                    }

                    foundBusiness.push(businessArray.find(business => {
                        return business.companyName.toLowerCase().includes(searchKey)
                    }))
                    console.log(foundBusiness);
                    let foundBusinessHTML = "";
                    foundBusiness.forEach(business => {
                        foundBusinessHTML += Business(business);
                    });
                    contentTarget.innerHTML = "";
                    companySearchResultArticle.innerHTML = foundBusinessHTML;
                }
        })
}