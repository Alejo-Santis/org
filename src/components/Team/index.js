import './Team.css';
import Partner from '../Partner';
import hexToRgba from 'hex-to-rgba';

const Team = ( props ) => {

    const { title, primaryColor, id } = props.data;
    const { partners, deletePartner, updateTeamColor, handleLike } = props;

    const obj = {
        backgroundColor: hexToRgba(primaryColor, 0.6)
    }

    const titleStyle = {
        borderColor: primaryColor
    }

    return <> 
    { partners.length > 0 &&
        <section className='team' style={ obj }>
            <input 
                type="color"
                className="input-color"
                value={ primaryColor }
                onChange={(e) => {
                    updateTeamColor( e.target.value, id)
                }}
            
            />
            <h3 style={ titleStyle } >{ title }</h3>
            <div className='partners'>
                { 
                    partners.map((partner, index) => <Partner 
                        datos={ partner } 
                        key ={ index } 
                        primaryColor = { primaryColor }
                        deletePartner = { deletePartner }
                        handleLike = { handleLike }
                    />)
                }
            </div>
        </section>
    } </>
}

export default Team;