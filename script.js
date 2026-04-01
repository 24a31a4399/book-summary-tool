function getSummary() {
    let book = document.getElementById("book").value.toLowerCase();

    let summary = "";

    if (book === "wings of fire") {
    summary = "This book is about APJ Abdul Kalam's journey.";
} 
else if (book === "rich dad poor dad") {
    summary = "This book teaches financial knowledge.";
}
else if (book === "amma dairy lo konni pageelu") {
    summary = "This book is about emotions and life experiences written in a diary format.";
}
else {
    summary = "Summary not available. Try another book.";
}
    document.getElementById("output").innerText = summary;
}
