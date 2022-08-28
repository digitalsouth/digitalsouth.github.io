---
---

// Update function
let updateGallery = (filter, cards) => {

    if (filter != "all") {
                cards.forEach(s => {
                    let card_value = s.getAttribute("value");

                    if (card_value.includes(filter) == false) {
                        s.classList.add("scale-out");
                        setTimeout(() => {
                            s.classList.add("hide")
                        }, 200)

                    } else {
                        if (s.classList.contains("scale-out")) {
                            s.classList.remove("hide");
                            setTimeout(() => { s.classList.remove("scale-out") }, 200);
                            setTimeout(() => { s.classList.add("scale-in") }, 210);
                        }
                    }
                })
            } else {
                cards.forEach(s => {
                    s.classList.remove("hide");
                    setTimeout(() => { s.classList.remove("scale-out") }, 200);
                    setTimeout(() => { s.classList.add("scale-in") }, 210);
                });

            } 
}

document.addEventListener('DOMContentLoaded', function() {
    let elem = document.querySelector('.browser-default');
    
    if(elem != null){
        console.log("event listeners coming on");
        let options = ""
        let instance = M.FormSelect.init(elem, options);
        let cards = document.querySelectorAll(".gallery-card");
        

        elem.addEventListener("change", e => {
            let filter = e.target.value;
            updateGallery(filter, cards);
        });
    }

});