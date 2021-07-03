import React from 'react'
import {  Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className={' bg-green text-white py-7 px-6 sm:px-14'}>
            <Link to='/'>
            <h1 className={'text-4xl mb-2'}>Mano Lithuanian</h1>
            </Link>
            <p className={'text-sm mb-12 w-80'}>Created by students for anyone who ever wanted to learn Lithuanian in easy way</p>
            <p className={'text-sm'}>© Copyright 2021 ManoLietuviu - All Rights Reserved</p>
        </div>
    )
}
