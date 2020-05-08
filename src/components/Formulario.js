import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    
    const {ciudad, pais} = busqueda;

    //State para validar el Formulario
    const [error, setError] = useState(false);

    //Funcion que coloca los elementos en el state

    const handleChange = e => {
        //actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    //Cuando el usuario da submit al formulario 

    const handleSubmit = e => {
        e.preventDefault();

        //Validar los campos el form
        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
            
        }
        setError(false);

        setConsultar(true);
    }

    return(
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error mensaje="Todos los campos son Obligatorios"/>}

            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Selecciona un País--</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="VE">Venezuela</option>
                    <option value="IT">Italia</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País</label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}

export default Formulario;