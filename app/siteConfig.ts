import brand from '../config/brand.json';
import contact from '../config/contact.json';
import navigation from '../config/navigation.json';
import home from '../config/home.json';
import safaris from '../config/safaris.json';
import services from '../config/services.json';
import misc from '../config/misc.json';

const siteConfig = {
    company: brand.company,
    socials: brand.socials,
    seo: brand.seo,
    contacts: contact,
    navigation: navigation.main,
    footer: navigation.footer,
    home: home.home,
    images: home.images,
    about: home.about,
    safaris: safaris,
    services: services,
    community: misc.community,
    payment: misc.payment
};

export default siteConfig;