import "./Partner.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Partner = (props) => {

    const { name, job, photo, id, fav } = props.datos;
    const { primaryColor, deletePartner, handleLike } = props;

    return (
        <div className="partner">
            <AiFillCloseCircle className="delete" onClick={ () => deletePartner(id) } />
            <div className="header" style={{ backgroundColor: primaryColor }}>   
                <img src={ photo } alt={ name } />
            </div>
            <div className="info">
                <h4>{ name }</h4>
                <h5>{ job }</h5>
                { fav ? <AiFillHeart color="red" onClick={ () => handleLike(id) } /> 
                        : <AiOutlineHeart  onClick={ () => handleLike(id) } /> }
            </div>
        </div>
    );
}

export default Partner;