import './MiOrg.css';

const MiOrg = ({ showForm }) => {

    return (
        <div className='orgSection'>
            <h3 className='title'>Mi organización</h3>
            <img className='add' src="/img/add.png" alt="add" onClick={ showForm } />
        </div>
    );
}

export default MiOrg;