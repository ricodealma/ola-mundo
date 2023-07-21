import styles from './BotaoPrincipal.module.scss';
import React from 'react'

export default function BotaoPrincipal({children,tamanho}) {
  return (
    <button 
      className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
        `}
    >
      {children}
    </button>
  )
}
