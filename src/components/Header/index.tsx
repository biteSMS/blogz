import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LinkDuo from './LinkDuo'
import classNames from 'classnames'
import Portal from '@/components/Portal'
import useAdapt from '@/components/Header/useAdapt'
import navList from './mock'
import menuIcon from '@/assets/images/menu.png'
import menuAdaptIcon from '@/assets/images/menu-adapt.png'
import './index.less'

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const isAdapt = useAdapt()
  return (
    <header className={classNames({ 'header-adapt': isAdapt })}>
      <div className="header-inner flex jc-sb ai-center">
        <Link to="/" style={{ height: 'auto' }}>
          <div className={classNames('brand', { 'brand-adapt': isAdapt })}>Wentz's Blog</div>
        </Link>
        <nav className="flex ai-center jc-sb">
          {navList.map((el, index) => (
            <LinkDuo to={el.url} key={index}>
              <div className={classNames('link flex ai-center', { 'link-adapt': isAdapt })}>
                <div
                  className={classNames('link-in flex jc-center ai-center', {
                    'link-in-adapt': isAdapt,
                    'link-in-active': pathname === el.url,
                    'link-in-adapt-active': pathname === el.url && isAdapt
                  })}>
                  {el.name}
                </div>
              </div>
            </LinkDuo>
          ))}
        </nav>
        <div className="menu" onClick={() => setShowMenu(true)}>
          <img src={isAdapt ? menuAdaptIcon : menuIcon} draggable={false} />
        </div>
        <Portal>
          <div className={classNames('menu-list', { 'menu-list-active': showMenu })}>
            <div className="container flex column">
              {navList.map((el, index) => (
                <LinkDuo to={el.url} key={index} onClick={() => setShowMenu(false)}>
                  <div className="mobile-link flex ai-center">
                    <span
                      className={classNames('mobile-link-line', {
                        'mobile-link-line-active': pathname === el.url
                      })}></span>
                    {el.name}
                  </div>
                </LinkDuo>
              ))}
            </div>
            <div className="close" onClick={() => setShowMenu(false)}>
              <img src={require('@/assets/images/close.png')} draggable={false} />
            </div>
          </div>
          <div
            className={classNames('mask', { 'mask-active': showMenu })}
            onClick={() => setShowMenu(false)}></div>
        </Portal>
      </div>
    </header>
  )
}

export default Header
