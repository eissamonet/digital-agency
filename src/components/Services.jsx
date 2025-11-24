import React from 'react'
import assets from '../assets /assets'

const Services = () => {

    const ServicesData = [
        {
          title: 'Advertising',
          description: "We turn bold ideas into powerful advertising campaigns that captivate audiences and drive results.",
          icon: assets.ads_icon
        },
        {
          title: 'Content Marketing',
          description: "We help you execute your plan and deliver content that converts.",
          icon: assets.marketing_icon
        },
        {
          title: 'Content Writing',
          description: "Our skilled writers create compelling content that engages your audience and boosts your brand's online presence.",
          icon: assets.content_icon
        },
        {
          title: 'Social Media Management',
          description: "We manage your social media platforms to enhance your brand visibility and engage with your audience effectively.",
          icon: assets.social_icon
        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-1 dark:hidden' />
    </div>
  )
}

export default Services
