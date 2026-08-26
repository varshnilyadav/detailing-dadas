import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', href, target, rel, children, className, ...props }) => {
  const btnClass = `${styles.btn} ${variant === 'primary' ? styles.btnPrimary : styles.btnSecondary} ${className || ''}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={btnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};
