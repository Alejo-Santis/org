import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';
import './App.css';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [ showForm, setShowForm ] = useState(false);
  const [ partners, setPartner ] = useState([
  {
    id: uuid(),
    name: "Harland Lhora",
    job: "Instructor",
    photo: "https://github.com//harlandlohora.png",
    team: "Front End",
    fav: true
  },
  {
    id: uuid(),
    name: "Genesys Rondón",
    job: "Desarrolladora de software e instructora",
    photo: "https://github.com/genesysaluralatam.png",
    team: "Programación",
    fav: false
  },
  {
    id: uuid(),
    name: "JeanMarie Quijada",
    job: "Instructora en Alura Latam",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    team: "UX y Diseño",
    fav: false
  },
  {
    id: uuid(),
    name: "Christian Velasco",
    job: "Head de Alura e Instructor",
    photo: "https://github.com/christianpva.png",
    team: "Programación",
    fav: false
  },
  {
    id: uuid(),
    name: "Jose Gonzalez",
    job: "Dev FullStack",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    team: "Innovación y Gestión",
    fav: false
  }]);
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ]);

  // Mostar el formulario
  const handleShow = () => {
    setShowForm(!showForm);
  }

  // Registrar Colaborador
  const registerPartner = (partner) => {
      setPartner([...partners, partner]);
  }

  // Eliminar colaborador
  const deletePartner = (id) => {
    console.log("Eliminar colaborador", id);
    const newPartner = partners.filter((partner) => partner.id !== id );
    setPartner(newPartner);
  }

  // Actualizar color de equipo
  const updateTeamColor = (color, id) => {
    const teamsUpdated = teams.map((team) => {
      if(team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });

    setTeams(teamsUpdated);
  }

  // Crear equipo
  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  }

  // Darle like a un colaborador
  const handleLike = (id) => {
    const partnersUpdated = partners.map((partner) => {
      if (partner.id === id) {
        partner.fav = !partner.fav;
      }
      return partner;
    })

    setPartner(partnersUpdated);
  }

  return (
    <div className='app'>
      <Header />
      { 
        showForm && <Form 
          teams={ teams.map(team => team.title) }
          registerPartner = { registerPartner }
          createTeam = { createTeam }
          /> 
      }

      <MiOrg showForm ={ handleShow }/>
      { 
        teams.map((team) =>  
          <Team 
            data={ team } 
            key={ team.title }
            partners = { partners.filter(partner => partner.team === team.title ) }
            deletePartner = { deletePartner }
            updateTeamColor = { updateTeamColor }
            handleLike = { handleLike }
          />)
      }
      <Footer />
    </div>
  );
}

export default App;