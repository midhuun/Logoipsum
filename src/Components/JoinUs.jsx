import React from 'react';
import Card from './Card';

function Solutions() {
  return (
    <div className='pt-[100px] flex justify-center flex-col text-center'>
      <h1 className='font-[700] md:text-[60px] text-[25px] join-h1'>Want to <span>Join</span>  Us?</h1>
      <p>To remain with us, it is essential that you diligently follow the steps provided</p>
      <div className='py-[100px] px-[15px] sm:px-[50px]  place-items-center gap-[10px] sm:gap-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Card name="Commencement of business" description="Invested shareholders must confirm payment and office address" due="Within 180 days" penalty="50,000" date="for the company" num='1' sup='st' />
        <Card name="Auditor Appointment" description="Company informs new auditor and submits ADT.1 form to ROC." due="Within 30 days" penalty="50,000" date="for the company" num='2' sup='nd' />
        <Card name="DIN eKYC" description="Directors share personal information for identification & verification" due="Within 180 days" penalty="300" date="per month." num='3' sup='rd ' />
        <Card name="DPT-3" description="Companies report money taken from people to ROC; auditors confirm details." due="Within 30 days" penalty="300" date="per month" num='4' sup='th' />
        <Card name="MCA Form AOC-4" description="It's like an official report card for a company's documents" due="On or Before 30th November" penalty="200" date="per day (No upper limit)*" num="5" sup='th' />
        <Card name="MCA Form MGT-7" description="Companies must annually report activities and finances to the registrar." due="On or Before 31st December" penalty="200" date="per day (No upper limit)*" num='6' sup='th' />
      </div>
      <p className='px-[10%] text-start'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form. There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form.</p>
    </div>
  );
}

export default Solutions;