export const PurchaseAgent = (businessObj) => {
    return `
    <article class="agents">
    <h4>${businessObj.fullName}</h4>
    <h5>${businessObj.company}</h5>
    <p class="phone-number">${businessObj.phoneNumber}</p>
    <br>
    `
}