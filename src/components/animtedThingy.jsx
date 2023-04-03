const AnimtedThingy = () => {
    return(
        <>
        <div className="animtedThingy">
            <div className="animtedThingy__container">
                <section className="hidden">
                    <h1>Animated Thingy</h1>
                    <p>Some text</p>
                </section>

                <section className="hidden">
                <div className="animtedThingy__container__image">
                    <img src="https://images.unsplash.com/photo-1611834780921-8b1b1b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image" />
                    </div>
                </section>

                <section className="hidden">
                    <h1>Animated Thingy</h1>
                    <p>Some text</p>
                </section>
            </div>
        </div>
        
        

        </>
    )
}

export default AnimtedThingy;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
        }
    });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => {
    observer.observe(element);
});