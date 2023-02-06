interface HeadProps {
    title: string;
    description?: string;
}


export default function Head ({title, description = ''}: HeadProps){ 
   
        document.title = ` Food Comerce | ${title}`;
        document.querySelector('[name = description]')?.setAttribute('content', description)

        return null;
    
}