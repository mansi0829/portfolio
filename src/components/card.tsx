import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => {
    const { number, title, subtitle, duration, description, skills } = props;

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            easing: 'ease-out-back', 
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <li className="step shadow-3xl" data-aos="fade-up">
            <span>{number}</span>
            <div className="content">
                <h3 className='text-xl font-bold'>{title}<div className='text-sm font-light font-semibold'>{duration}</div></h3>
                {subtitle && <h4 className='text-md font-semibold'>{subtitle}</h4>}
                <p className='py-2'>
                    {description}
                </p>
                <div className="skills-container flex flex-wrap justify-center sm:justify-start">
                    {skills.map((skill, index) => (
                        <span key={index} style={{ backgroundColor: generateRandomColor() }} className="mt-2 mx-1 p-2 rounded text-white">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </li>
    );
}

export default Card;
