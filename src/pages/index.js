import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import Head from '@docusaurus/Head'
import HeroImg from '../../static/img/Hero.jpg'

const svgList = [

]
const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/docs/intro'>
            🖱Click Here!
          </Link>
        </div>
      </div>
    </header>
  )
}

function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          优特科技 <br /> 信息帮助中心
        </h1>
        {  <p className={styles.leftContainer_p}>
          在这里记录一些知识，希望对你也帮助。
           <br />
          请点击顶部菜单或搜索查找问题
        </p> }
        <div className={styles.buttonContainer}>
           <button className={styles.button}>
            <a className={styles.hero_a} href='basic'>
              点我开始
            </a>
          </button>
          <span className={styles.buttonLeftText}>
            Get Started. <br /> 开启学习之旅.
          </span> *
          <div className={styles.svgContainer}>
            {svgList.map((item, index) => {
              return <Svg {...item} key={item.title} />
            })}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt='HeroImg' />
      </div>
    </div>
  )
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title='主页'
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <MyHero />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  )
}
