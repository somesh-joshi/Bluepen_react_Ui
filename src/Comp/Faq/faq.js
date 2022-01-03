import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import  Accordion from "./accordion.js";

function Faq() {
    return (
        <>
        <div className="container">
        <h1>FAQs</h1>
        <Accordion />
        </div>
        </>
    );
}


export default Faq;