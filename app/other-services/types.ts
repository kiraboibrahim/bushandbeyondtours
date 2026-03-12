import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface TrustBadge {
    icon: IconDefinition;
    title: string;
    desc: string;
}

export interface Feature {
    icon: IconDefinition;
    title: string;
    description: string;
}

export interface Package {
    name: string;
    price: string;
    unit: string;
    description: string;
    includes: string[];
}

export interface Testimonial {
    name: string;
    location: string;
    text: string;
}

export interface Service {
    badge: string;
    title: string;
    subtitle: string;
    trustBadges: TrustBadge[];
    overviewTitle: string;
    overviewText: string;
    benefits: string[];
    features: Feature[];
    packages: Package[];
    testimonials: Testimonial[];
}