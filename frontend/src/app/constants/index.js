
import { instagram, linkedin } from "../assets/icons";
import { 
    backEnd, 
    design, 
    frontEnd, 
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
    body: 'We bring to life the most complex projects, specialize in online \nbooking systems and the creation of aggregator sites'
};

export const aboutUs = {
    heading: 'About Us',
    body: 'Digital agency based on Surabaya that will provide the best \nservice to realize your idea through design and technology for \nyour business growth.'
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
            icon: `${linkedin.src}`,
            altText: 'Linkedin'
        },
        {
            icon: `${instagram.src}`,
            altText: 'Instagram'
        }
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