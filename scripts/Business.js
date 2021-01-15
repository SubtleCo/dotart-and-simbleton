export const Business = (businessObj) => {
    return `
    <h2 class="business-name">${businessObj.companyName}</h2>
    <p class="business-full-street">${businessObj.addressFullStreet}</p>
    <p class="business-citu-state-zip">${businessObj.addressCity} ${businessObj.addressStateCode}, ${businessObj.addressZipCode}</p>
    <br>
    `
}