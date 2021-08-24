import React from 'react'
import styles from './switcher.module.css'

export default function Switcher({ state, onChange }) {

    return (
        <label id="m27-switcher" className={styles.switch}>
            <input type="checkbox" checked={state} onChange={onChange} />
            <span className={[styles.slider, styles.round].join(' ')}></span>
        </label>
    )
}
