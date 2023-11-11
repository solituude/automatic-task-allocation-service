import React, {useEffect} from "react";
import Header from "../../UI/Header/Header";
import EmployeeSlider from "../../UI/EmployeeSlider/EmployeeSlider";
import s from './managerHomepage.module.scss'
import {ReportButton} from "../../UI/ReportButton/ReportButton";
import ManagerOptions from "../../Components/ManagerOptions/ManagerOptions";
import {connect} from "react-redux";
import {requestEmployees} from "../../redux/reducers/managerReducer/managerAction";

const ManagerHomepage = ({ employees, requestEmployees}) => {
    const header = new Headers();
    const loginLS = localStorage.getItem('login');
    const passwordLS = localStorage.getItem('password');
    header.append('Authorization', 'Basic ' + btoa(loginLS + ':' + passwordLS));
    header.append('Accept', 'application/json');

    useEffect(() => {
        requestEmployees(header);
        console.log(employees)
    },[])

    return(
        <div className={s.container}>
            <Header/>
            <EmployeeSlider data={employees}/>
            <div className={s.content}>
                <ReportButton/>
                <ManagerOptions/>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => ({
    employees: store.manager.employees,
})

export default connect(mapStateToProps, {requestEmployees})(ManagerHomepage);