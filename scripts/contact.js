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

const Clickbutton = document.getElementById("buttoncontact");

Clickbutton.addEventListener("click",()=>{
    alert("Thank you for the message. We will be contacting you soon!");
})