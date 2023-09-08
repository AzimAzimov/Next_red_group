import React, { FC, useState } from 'react'
import { headerData } from './header.data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss'


const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <ul>
        {headerData.map((item) => (
          <Link
            href={`${item.href}`}
            key={item.href}
            className={`${pathname === (item.href) ? styles.active : ''}`}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </header>
  );
}

export default Header