const priceForRoom = 1000;
let updatePrice = () => {
    let adult = document.getElementById("adult");
    let totalPrice = document.getElementById("price");
    let toDate = document.getElementById("toDate");
    let fromDate = document.getElementById("fromDate");

    let toDateValue = new Date(toDate.value);
    let fromDateValue = new Date(fromDate.value);

    toDate.min = fromDate.value;

    let days = (toDateValue - fromDateValue) / (24 * 60 * 60 * 1000);

    if (adult.value && toDate.value && fromDate.value)
        totalPrice.value = "Rs. " + parseInt(adult.value) * priceForRoom * days;
    else
        totalPrice.value = "Rs.0";

}