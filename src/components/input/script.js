const InputComponent = (attributi) => {
    return (
        <div className="input-componente">
            <input type={attributi.configurazioneInput.tipo}
                autocomplete="autocomplete"
                id={attributi.configurazioneInput.id}
                className={attributi.configurazioneInput.classe}
                defaultValue={attributi.configurazioneInput.valore}
                defaultChecked={attributi.configurazioneInput.selezionato}
                placeholder={attributi.configurazioneInput.marcatore} />
            <label for={attributi.configurazioneInput.id}>
                {attributi.configurazioneInput.etichetta}
            </label>
        </div>
    )
}

window && (window.InputComponent = InputComponent);