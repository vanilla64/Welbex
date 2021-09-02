import React from 'react'

function Footer() {
  const styles = {
    footer: {
      margin: 0,
      padding: '50px 20px 30px',
    },
    list: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: 'center'
    }
  }

  return (
    <footer style={styles.footer} className="row">
      <ul style={styles.list}>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href={'https://hh.ru/resume/6600dec7ff08a61cd20039ed1f6a7569366b4c'}
          >HeadHunter</a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href={'https://t.me/vanilla64'}>Telegram</a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href={'https://vk.com/vanilla64'}>vk.com</a>
        </li>
      </ul>

    </footer>
  )
}

export default Footer
