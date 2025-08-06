export interface CarouselItem {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    buttonText: string;
}

export interface Service {
    icon: string;
    title: string;
    description: string;
    color: string;
}

export interface Plan {
    name: string;
    price: string;
    duration: string;
    features: string[];
    popular?: boolean;
}