const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((item) => {
    item.addEventListener("click", () => {
        const parent = item.parentElement;

        document.querySelectorAll(".faq-item").forEach((faq) => {
            if(faq !== parent){
                faq.classList.remove("active");
            }
        });

        parent.classList.toggle("active");
    });
});