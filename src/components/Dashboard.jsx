import React from 'react';
//components
import DashHeader from './DashHeader';
import SideBoard from './SideBoard';
import MetricsCard from './MetricsCard';
import ScheduleCard from './ScheduleCard';
//dummy data
import { DummyMetrics } from '../data';
import { DummyEvents } from "../data";
import ProductCard from './ProductCard';
import GraphCard from './GraphCard';

const Dashboard = ()=>{
    return(
        <div className="dash-container">
            <SideBoard/>
            <div className="dash">
                <DashHeader pageTitle="Dashboard"/>
                <div className="metrics">
                    { DummyMetrics.map((metric) => {
                        return(
                        <MetricsCard metricColor={metric.background}  metricName = {metric.name} metricValue={metric.value} metricIcon={metric.icon}/>
                    );}) }
                </div>
                
                    <GraphCard title="Activites" date="May - June 2021"/>
                
                <div className="dash-cards">
                    <ProductCard title="Top Products" date="May - June 2021"/>
                    <ScheduleCard EventList={DummyEvents}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


