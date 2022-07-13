

const FooterComponent = (attributi) => {
    return (
        <footer class="footer mt-auto py-3">
            <div class="container">
                <span class="text-muted">&copy; Corso Front End Developer 2022</span>
            </div>
        </footer>
    )
}

class Application extends React.Component {
    constructor(attributi) {
        super(attributi);

        this.state = { email: "", password: "", checkbox: false };
    }

    loggaUtente(event) {
        debugger
        event.preventDefault();
    }

    render() {
        return (
            <div className="application-componente">
                <div className="form-signin">
                    <FormComponent configurazioneForm={{
                        email: this.state.email,
                        password: this.state.password,
                        checkbox: this.state.checkbox,
                        testo: "Loggati",
                        nomeForm: "sign-in",
                        titolo: "Il Form di registrazione",
                        funzioneInvia: this.loggaUtente.bind(this)
                    }} />
               </div>
               <FooterComponent />
            </div>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('root'));