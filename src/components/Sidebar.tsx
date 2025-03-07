import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/736x/aa/04/e2/aa04e2f8fb297ee9cbadbaf517e20048.jpg"
      />

      <div className={styles.profile}>
        <Avatar src="https://i.pinimg.com/736x/bc/bd/8c/bcbd8c3b68d48ee9774adb71e78b270d.jpg" />

        <strong>Matheus Barbosa</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <PencilLine size={20} />
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}
