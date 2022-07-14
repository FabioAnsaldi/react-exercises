const FooterComponent = (attributi) => {
    return (
        <footer class="footer mt-auto py-3">
            <div class="container">
                <span class="text-muted">&copy; Corso Front End Developer 2022</span>
            </div>
        </footer>
    )
}

window && (window.FooterComponent = FooterComponent);