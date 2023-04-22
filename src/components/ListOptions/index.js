import "./ListOptions.css";

const ListOptions = ( props ) => {

    const handleValue = (e) => {
        props.setValue(e.target.value);
    }

    return (
        <div className="list-options">
            <label>Equipos</label>
            <select value={ props.value } onChange={ handleValue }>
                <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
                { props.teams.map((team, index) => <option key={ index } value={ team } >{ team }</option>) }
            </select>
        </div>
    );
}

export default ListOptions;