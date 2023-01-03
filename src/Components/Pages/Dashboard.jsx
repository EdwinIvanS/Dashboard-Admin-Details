import CardComp from "./CardComp";
import MetricsComp from "./MetricsComp";
import Details from "./Details";
import ColumnChart from "./ColumnChart";
import ActivityComp from "./ActivityComp";
import BuilComp from "./BuildComp";
import CityRankings from "./CityRanking";
import { periodData } from "../../data.js";


const Dashboard = () => {
    return(
        <div className="contenedor-dashboard">    
            <div className="title">
                <p>DashBoard</p>
            </div>   
            <CardComp/>
            <MetricsComp/>
            <Details/>
            <ColumnChart periodData={periodData} dataColors={["#3258F2", "#F2545B", "#A93F55"]}/>
            <ActivityComp/>
            <BuilComp/>
            <CityRankings/>
        </div>
    )
}

export default Dashboard;