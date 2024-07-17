// Function to calculate points
const calculatePoints = (receipt) => {
    let points = 0;

    // One point for every alphanumeric character in the retailer name
    const alphanumericChars = receipt.retailer.replace(/[^a-z0-9]/gi, '').length;
    points += alphanumericChars;

    // 50 points if the total is a round dollar amount with no cents
    if (parseFloat(receipt.total) === Math.floor(receipt.total)) {
        points += 50;
    }

    // 25 points if the total is a multiple of 0.25
    if (parseFloat(receipt.total) % 0.25 === 0) {
        points += 25;
    }

    // 5 points for every two items on the receipt
    points += Math.floor(receipt.items.length / 2) * 5;

    // Points for item descriptions that are a multiple of 3 in length
    receipt.items.forEach(item => {
        const trimmedLength = item.shortDescription.trim().length;
        if (trimmedLength % 3 === 0) {
            points += Math.ceil(parseFloat(item.price) * 0.2);
        }
    });

    // 6 points if the day in the purchase date is odd
    const purchaseDay = new Date(receipt.purchaseDate).getDate();
    if (purchaseDay % 2 !== 0) {
        points += 6;
    }

    // 10 points if the time of purchase is after 2:00pm and before 4:00pm
    const [hours, minutes] = receipt.purchaseTime.split(':').map(Number);
    if (hours === 14 || (hours === 15 && minutes === 0)) {
        points += 10;
    }

    return points;
}

module.exports = calculatePoints;
