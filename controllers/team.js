function toggleCard(card) {
    const content = card.querySelector(".expandable");

    document.querySelectorAll(".expandable").forEach(c => {
        if (c !== content) c.classList.remove("active");
    });

    content.classList.toggle("active");
}


