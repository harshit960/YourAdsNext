import { instagram, linkedin, mail } from "../assets/icons";
import { 
    backEnd, 
    design, 
    frontEnd,
    appdev,
    adsmanagemet,
    social,
    team1, 
    team2, 
    team3, 
    team4, 
    works1, 
    works2, 
    works3, 
    works4 
} from "../assets/images";
export const navbar = {
    name: 'YourAds',
    cta: 'Get in Touch',
    links: [
        {
            id: 1,
            name: 'Home'
        },
        {
            id: 2,
            name: 'About Us'
        },
        {
            id: 3,
            name: 'Services'
        },
        {
            id: 4,
            name: 'Works'
        },
        {
            id: 5,
            name: 'Team'
        }
    ]
};

export const hero = {
    heading: 'Next Generation \nDigital Agency',
    body: 'WE CONNECT - WE CREATE - WE GROW <br>HELPING YOU BUILD YOUR DREAM DIGITAL PRESENCE IS OUR 1st GOAL'
};

export const aboutUs = {
    heading: 'About Us',
    body: 'Simplifying your journey online with professional digital solutions tailored for your business growth.'
};

export const services = {

    heading: 'Services',
    provides: [
        {
            title: 'Design',
            img: `${design.src}`,
            altText: 'Design'
        },
        {
            title: 'Front End',
            img: `${frontEnd.src}`,
            altText: 'Front End'
        },
        {
            title: 'Back End',
            img: `${backEnd.src}`,
            altText: 'Back End'
        },
        {
            title: 'App Dev',
            img: `${appdev.src}`,
            altText: 'App Dev'
        },
        {
            title: 'Social Media Management',
            img: `${social.src}`,
            altText: 'Social Media Management'
        },
        {
            title: 'Ads Management',
            img: `${adsmanagemet.src}`,
            altText: 'Ads Management'
        }
    ]
};

export const ourWorks = {

    heading: 'Our Works',
    works: [
        {
            id: '1',
            img: `${works1.src}`,
            altText: 'works-1'
        },
        {
            id: '2',
            img: `${works2.src}`,
            altText: 'works-2'
        },
        {
            id: '3',
            img: `${works3.src}`,
            altText: 'works-3'
        },
        {
            id: '4',
            img: `${works4.src}`,
            altText: 'works-4'
        }
    ]
};
    
export const ourTeam = {

    heading: 'Our Team',
    body: 'Team collaboration in which team members are experienced \npeople in their fields',
    team: [
        {
            role: 'Programmer',
            name: 'Harshit Raj',
            img: `${team4.src}`,
            altText: 'Dimitri'
        },
        {
            role: 'Marketer',
            name: 'Raj Aryan',
            img: `${team4.src}`,
            altText: 'Stephan'
        },
        {
            role: 'Videographer',
            name: 'Subhomoy ',
            img: `${team4.src}`,
            altText: 'Lusenko Larov'
        },
        {
            role: 'Videographer',
            name: 'Prithvi',
            img: `${team4.src}`,
            altText: 'Andi Chen'
        },
        {
            role: 'Graphics Designer',
            name: 'Achintya',
            img: `${team4.src}`,
            altText: 'Andi Chen'
        },
        {
            role: 'Video Editor',
            name: 'Kartik',
            img: `${team4.src}`,
            altText: 'Andi Chen'
        }
    ]
};

export const footer = {
    name: 'YourAds',
    cta: [
        {
            icon: `${mail.src}`,
            altText: 'Mail',
            href: 'mailto:clicksm052@gmail.com'
        },
        // {
        //     icon: `${instagram.src}`,
        //     altText: 'Instagram'
        // }
    ],
    links: [
        {
            id: 1,
            name: 'Home'
        },
        {
            id: 2,
            name: 'About Us'
        },
        {
            id: 3,
            name: 'Services'
        },
        {
            id: 4,
            name: 'Works'
        },
        {
            id: 5,
            name: 'Team'
        }
    ]
}