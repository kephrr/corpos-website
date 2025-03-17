export interface PostProps {
    image: string;
    username: string;
    pseudo: string;
    text: string;
    social: string;
    date: string;
}

export interface ButtonProps {
    content: string;
    colors: string;
}

export interface LargeCardProps {
    title: string;
    text: string;
    img: string;
    btntext: string;
    btncolor: string;
}

export interface InfoProps {
    img: string,
    label: string,
    title: string,
    date: string
}

export interface CardProps {
    title: string;
    text: string;
    img: string;
    url?: string;
    btn?: boolean;
    btntext?: string;
    btncolor?: string;
}






