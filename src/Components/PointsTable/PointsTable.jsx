import React from "react";
import s from './pointTable.module.scss';

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

const PointsTable = () => {
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
                </tr>
                </thead>
                <tbody>

                {
                    test.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.address}</td>
                            <td>
                                <div className={s.tab__ok}>{item.connectionTime}</div>
                            </td>
                            <td>
                                <div className={s.tab__none}>
                                    {item.isDelieveried} </div></td>
                            <td>{item.daysAfterGiveLastCard}</td>
                            <td>{item.numberAcceptedRequests}</td>
                            <td>{item.numberGivedCards}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default PointsTable;
