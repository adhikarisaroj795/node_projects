import styles from "./styles.module.css"

import React from 'react'

const main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload()
    }
    return (
        <div className={styles.main.container}>
            <nav className={styles.navbar}>
                <h1>Fakebook</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    )
};

export default main;
