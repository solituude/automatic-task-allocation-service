import React, {useState} from "react";
import s from './pointTable.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditPointModal from "../Modals/EditPointModal/EditPointModal";
import DeletingPointModal from "../Modals/DeletingPointModal/DeletingPointModal";

const test = [
    {
        id: 0,
        address: "ул. Ставропольская, д. 140",
        connectionTime: "Вчера",
        isDelieveried: "no",
        daysAfterGiveLastCard: 0,
        numberAcceptedRequests: 0,
        numberGivedCards: 0,
    }
]

const PointsTable = ({data}) => {
    const [pointID, setPointID] = useState();
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeletingModal, setShowDeletingModal] = useState(false);

    const handleClickEdit = (id) => {
        setPointID(id);
        setShowEditModal(true);
    }

    const handleClickDeleting = (id) => {
        setPointID(id);
        setShowDeletingModal(true);
    }

    return (
        <div className={s.container}>
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Адрес</th>
                    <th>Когда подключена точка?</th>
                    <th>Карты и материалы доставлены?</th>
                    <th>Кол-во дней после выдачи последней карты</th>
                    <th>Количество одобренных заявок</th>
                    <th>Кол-во выданных карт</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>

                {
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.address}</td>
                            <td>
                                <div className={s.tab__ok}>{item.joinTime}</div>
                            </td>
                            <td>
                                {item.materialsDelivery ? <div className={s.tab__ok}>Да</div> :
                                    <div className={s.tab__none}>
                                        Нет </div>}</td>
                            <td>{item.cardIssuanceDaysPassed}</td>
                            <td>{item.approvedAppsCount}</td>
                            <td>{item.issuedCardsCount}</td>
                            <td>
                                <button className={s.custom__button} onClick={() => handleClickEdit(item.id)}>
                                    <EditIcon/>
                                </button>
                            </td>
                            <td>
                                <button className={s.custom__button} onClick={() => handleClickDeleting(item.id)}>
                                    <DeleteForeverIcon/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <EditPointModal id={pointID} show={showEditModal} handleClose={() => setShowEditModal(false)}/>
            <DeletingPointModal id={pointID} show={showDeletingModal} handleClose={() => setShowDeletingModal(false)}/>
        </div>
    )
}

export default PointsTable;
