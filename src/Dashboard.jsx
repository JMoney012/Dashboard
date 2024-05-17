import { useState } from 'react'
import { mockTransactions } from './mockData'
import './App.css'
import Heading from './Heading';
import Sidebar from './Sidebar';
import TransactionBar from './TransactionBar';



const Dashboard = () => {
    return (
        <div>
            <Heading />
            <div>
                <Sidebar />
            </div>
            <TransactionBar />
        </div>
    );
};

 

export default Dashboard;