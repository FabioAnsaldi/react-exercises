const FormComponent = (attributi) => {
    return (
        <div className="form-componente">
            <h2>{attributi.configurazioneForm.titolo}</h2>
            <form name={attributi.configurazioneForm.nomeForm}
                onSubmit={attributi.configurazioneForm.funzioneInvia}>

                <div className="form-label-group">
                    <InputComponent configurazioneInput={{
                        valore: attributi.configurazioneForm.email,
                        tipo: "email",
                        id: "inputEmail",
                        classe: "form-control",
                        marcatore: "Inserisci Email",
                        etichetta: "Email"
                    }} />
                </div>

                <div className="form-label-group">
                    <InputComponent configurazioneInput={{
                        valore:  attributi.configurazioneForm.password,
                        tipo: "password",
                        id: "inputPassword",
                        classe: "form-control",
                        marcatore: "Inserisci Password",
                        etichetta: "Password"
                    }} />
                </div>

                <div className="checkbox mb-3">
                    <InputComponent configurazioneInput={{
                        selezionato: attributi.configurazioneForm.checkbox,
                        tipo: "checkbox",
                        id: "inputCheckbox",
                        classe: "",
                        marcatore: "",
                        etichetta: "Ricordami"
                    }} />
                </div>

                <ButtonComponent configurazioneButton={{
                    testo: attributi.configurazioneForm.testo,
                    tipo: "submit",
                    classe: "btn btn-lg btn-primary btn-block"
                }} />
                
            </form>
        </div>
    )
}

window && (window.FormComponent = FormComponent);
