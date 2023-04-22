import { useState } from 'react';
import './Form.css';
import Input from '../Input';
import ListOptions from '../ListOptions';
import Button from '../Button/Button';

const Form = (props) => {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const { registerPartner, teams, createTeam } = props

    const handleSend = (e) => {
        e.preventDefault();
        const sendData = {
            name,
            job,
            photo,
            team
        }
        registerPartner(sendData);
    }

    const handelNewTeam = (e) => {
        e.preventDefault();
        createTeam({ title, primaryColor: color });
    }

    return (
        <section className='form'>
            <form onSubmit={ handleSend }>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Input 
                    name="Nombre"  
                    placeholder="Ingresar nombre" 
                    required 
                    value = { name }
                    setValue = { setName }
                />
                <Input 
                    name="Puesto"  
                    placeholder="Ingresar puesto" 
                    required 
                    value = { job }
                    setValue = { setJob }
                />
                <Input 
                    name="Foto"  
                    placeholder="Ingresar enlace de foto" 
                    required  
                    value = { photo }
                    setValue = { setPhoto }
                />
                <ListOptions 
                    value = { team }
                    setValue = { setTeam }
                    teams = {teams}
                />
                <Button>
                    Crear
                </Button>
            </form>
            <form onSubmit={ handelNewTeam }>
                <h2>Rellena el formulario para crear el Equipo</h2>
                <Input 
                    name="Titulo" 
                    placeholder="Ingresar titulo" 
                    required 
                    value = { title }
                    setValue = { setTitle }
                />
                <Input 
                    name="Color" 
                    type="color" 
                    placeholder="Ingresar el color Hex" 
                    required 
                    value = { color }
                    setValue = { setColor }
                />
                <Button>
                    Registrar Equipo
                </Button>
            </form>
        </section>
    );
}

export default Form;