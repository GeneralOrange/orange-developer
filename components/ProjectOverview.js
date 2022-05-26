import React from 'react'
import ProjectItem from './ProjectItem'
import styles from '../styles/ProjectOverview.module.scss'

export default function ProjectOverview() {

    const items = [
        {
            id: 1,
            name: 'Crypto-valuta.nl',
            description: 'Een project over crypto valtua\'s waar ik met m\'n collega\'s in rotterdam aan heb mogen werken. Met behulp van een handige API kunnen we de koersen van ruim 7000 munten in de gaten houden en vertonen in mooie overzichtjes.',
            stack: [
                'WordPress',
                'Custom Theme',
                'PHP',
                'API',
                'JQuery',
                'JavaScript'
            ],
            url: 'https://crypto-valuta.nl',
            image: '/crypto-valuta.png'
        },
        {
            id: 2,
            name: 'Voetbaluitslagen.com',
            description: 'Samen met m\'n collega\'s in rotterdam, hebben we een mooie website met alles wat je wilt weten over voetbal. Van de laatste uitslagen en nieuwtjes tot informatie over je favoriete club of zelfs om te gokken.',
            stack: [
                'WordPress',
                'Custom Theme',
                'PHP',
                'API',
                'JQuery',
                'JavaScript',
                'VueJS',
                'Symfony'
            ],
            url: 'https://voetbaluitslagen.com',
            image: '/voetbaluitslagen.png'	
        },
        {
            id: 3,
            name: 'Fugamedia.nl',
            description: 'Het bedrijf waar ik tot heden voor werk heeft natuurlijk ook een website nodig. Deze heb ik samen met een collega in 2 weken in elkaar gezet. Het is gewoon een simpel WordPress websitje, maar wel een custom theme.',
            stack: [
                'WordPress',
                'Custom Theme',
                'PHP',
                'JavaScript'
            ],
            url: 'https://www.fugamedia.nl/',
            image: '/fuga-media.png'	
        },
        {
            id: 4,
            name: 'Verzekerdtewerk.nl',
            description: 'Een side project waar ik met een vriend aan gewerkt heb, hij deed teksen en ik de tech. Als je iets te weten wil komen over klussen kan je het vinden om onze website.',
            stack: [
                'Strapi',
                'API',
                'NextJS',
                'JavaScript'
            ],
            url: 'https://verzekerdtewerk-nextjs.vercel.app/',
            repo: 'https://github.com/GeneralOrange/verzekerdtewerk-nextjs',
            image: '/verzekerdtewerk.png'
        }
    ]

    return (
        <div className={styles.wrapper}>
            { items.map((item, index) => (
                <ProjectItem key={index} item={item} index={index} />
            ))}
        </div>
    )
}
