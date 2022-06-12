import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import useWindowSize from '../hooks/useWindowSize'
import useIsMounted from '../hooks/useIsMounted'

const NavBar = () => {
  const NavBarMobileRef = useRef(null)
  const mobileIconRef = useRef(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const isMounted = useIsMounted()
  const router = useRouter()
  const { width } = useWindowSize()
  const { theme, setTheme } = useTheme()

  const toggleMobileNavBar = () => {
    NavBarMobileRef.current.classList.add('touched')
    NavBarMobileRef.current.classList.toggle('translate-x-full')
    setMobileNavOpen(!mobileNavOpen)
  }

  const linkClicked = event => {
    if (event.currentTarget.href.indexOf('cv') > -1) {
      document.querySelectorAll('nav li a').forEach(navEl => {
        navEl.classList.remove('active')
      })
    }
    if (width <= 768) {
      toggleMobileNavBar()
    }
  }

  const renderNavBarItems = () => {
    const linkClasses =
      'relative before:absolute before:bottom-[-5px] before:h-[5px] before:w-[0] before:mt-[5px] before:bg-black dark:before:bg-white before:transition-all before:duration-300'
    return (
      <>
        <li>
          <Link href={{ pathname: '/', hash: 'home' }}>
            <a className={linkClasses} onClick={linkClicked}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/aboutme' }}>
            <a className={linkClasses} onClick={linkClicked}>
              About Me
            </a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/projects' }}>
            <a className={linkClasses} onClick={linkClicked}>
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/contact' }}>
            <a className={linkClasses} onClick={linkClicked}>
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cv">
            <a
              onClick={linkClicked}
              className={`${linkClasses} ${router.pathname === '/cv' ? 'active' : ''
                }`}
            >
              CV
            </a>
          </Link>
        </li>
      </>
    )
  }

  const LogoLetter = ({ letter }) => (
    <span className="letter inline-block top-0 relative">{letter}</span>
  )

  return (
    <nav className="fixed bg-purple dark:bg-darkgrey text-text h-16 w-full z-50">
      <div className="flex h-full container mx-auto justify-between items-center px-6 md:px-5">
        <div className="name font-extrabold text-3xl text-black dark:text-white">
          <Link href="/">Mansi here : </Link>
        </div>
        <ul className="hidden md:flex md:gap-6">{renderNavBarItems()}</ul>
        <ul
          ref={NavBarMobileRef}
          className={`md:hidden absolute flex flex-col w-full top-16 left-0 py-3 items-center text-white bg-primary transform translate-x-full gap-2 ${isMounted.current ? 'transition-transform' : ''
            }`}
        >
          {renderNavBarItems()}
        </ul>
        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden md:hidden outline-none focus:outline-none"
          aria-label="Toggle mobile menu"
          type="button"
          ref={mobileIconRef}
          onClick={toggleMobileNavBar}
        >
          <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
            <svg
              className="fill-current text-gray-900 dark:text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        </button>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 lg:transform-none md:relative md:left-0"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {isMounted.current && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-6 w-6 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default NavBar
