const ButtonComponent = (attributi) => {
    return (
        <div className="button-componente">
            <button type={attributi.configurazioneButton.tipo}
                className={attributi.configurazioneButton.classe}>
                {attributi.configurazioneButton.testo}
            </button>
        </div>
    )
}

window && (window.ButtonComponent = ButtonComponent);