import React from "react";
import CompanyBase from "../assests/CompanyBase.png";
import Category from "../assests/Category.png";
import Chart from "../assests/Chart.png";
import Ticket from "../assests/Ticket.png";
import Document from "../assests/Document.png";
import Calendar from "../assests/Calendar.png";
import Notification from "../assests/Notification.png";
import Setting from "../assests/Setting.png";
import CsvParse from "../component/CsvParse";
import "./UploadPage.css";

const UploadPage = () => {
    return (
        <div className="upload-page">
             <div className="leftPart">
                 <img className = "pic" src={CompanyBase} alt="img" />
                 <ul  className="all">
                    <li className="navigation-list"><a href="#"><img src={Category} alt="img" /><span>Dashboard</span></a></li>
                    <li className="navigation-list"><a href="#"><img src={Chart} alt="img" /><span>Upload</span></a></li>
                    <li className="navigation-list"><a href="#"><img src={Ticket} alt="img" /><span>Invoice</span></a></li>
                    <li className="navigation-list"><a href="#"><img src={Document} alt="img" /><span>Schedule</span></a></li>
                    <li className="navigation-list"><a href="#"><img src={Calendar} alt="img" /><span>Calendar</span></a></li>
                    <li className="navigation-list"><a href="#"><img src={Notification} alt="img" /><span>Notification</span></a></li>
                    <li className="navigation-list"><a href="#"><img src={Setting} alt="img" /><span>Setting</span></a></li>
                 </ul>

             </div>
             <div className="rightPart">
                 <CsvParse/>
             </div>
        </div>
    );
};

export default UploadPage;
