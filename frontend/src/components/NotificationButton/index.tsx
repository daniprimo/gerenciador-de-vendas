import axios from "axios";
import { toast } from "react-toastify";
import icon from '../../assets/img/notification-icon.svg';
import './style.css';


type props = {
    saleId: number;
}

function handleClick (id: number) {
    axios.get(`http://localhost:8080/sales/${id}/notif`)
    .then(response => {
        toast.info("SMS Enviado com sucesso");
    });
}

export default function NotificationButton ( {saleId} : props){
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar"/>
        </div>
        )
}
