import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }
type ButtonLinkProps = LinkProps & { className?: string; children: ReactNode }

export function Button({ className, children, ...props }: ButtonProps) {
  return <button className={twMerge(clsx('button', className))} {...props}>{children}</button>
}

export function ButtonLink({ className, children, ...props }: ButtonLinkProps) {
  return <Link className={twMerge(clsx('button', className))} {...props}>{children}</Link>
}
