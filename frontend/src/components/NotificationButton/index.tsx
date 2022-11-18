import axios from "axios";
import icon from '../../assets/img/notification-icon.svg';
import './style.css';


type props = {
    saleId: number;
}

function handleClick (id: number) {
    axios.get(`http://localhost:8080/sales/${id}/notif`)
    .then(response => {
        console.log("Sucesso");
    });
}

export default function NotificationButton ( {saleId} : props){
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar"/>
        </div>
        )
}
