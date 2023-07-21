import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.scss';

export default function MenuLink({ children, to }) {

    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}            
        >
            {children}
        </NavLink>
    )
}