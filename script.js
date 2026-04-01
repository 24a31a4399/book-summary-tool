function getSummary() {
    let book = document.getElementById("book").value.toLowerCase();

    let summary = "";

    if (book === "wings of fire") {
        summary = "This book is about APJ Abdul Kalam's journey from a small boy to a great scientist.";
    } 
    else if (book === "rich dad poor dad") {
        summary = "This book teaches financial knowledge and importance of money management.";
    }
    else {
        summary = "Summary not available. Try another book.";
    }

    document.getElementById("output").innerText = summary;
}
