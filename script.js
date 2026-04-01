function getSummary() {
    let book = document.getElementById("book").value.toLowerCase().trim();
    let author = document.getElementById("author").value.toLowerCase().trim();

    let summary = "";

    if (book.includes("wings of fire") && author.includes("kalam")) {
        summary = "This book is about APJ Abdul Kalam's journey from a small boy to India's Missile Man.";
    } 
    else if (book.includes("rich dad poor dad") && author.includes("robert")) {
        summary = "This book teaches financial knowledge and importance of money management.";
    }
    else if (book.includes("amma diary lo konni pageelu") && author.includes("ravi")) {
        summary = "This book is about emotional life experiences written in a diary format by Ravi Manthri.";
    }
    else {
        summary = "Summary not available. Try another book.";
    }

    document.getElementById("output").innerText = summary;
}
