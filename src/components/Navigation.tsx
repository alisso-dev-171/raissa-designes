import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import '../assets/styles/Navigation.scss';

const navItems = [['Experiência', 'expertise'], ['Certificação', 'history'], ['Projetos', 'projects'], ['Contato', 'contact']];

function Navigation({ parentToChild, modeChange }: any) {

    const { mode } = parentToChild;
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const scrollYRef = useRef<number>(0); // Guarda a posição do scroll

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    // (Lógica de fechar ao clicar fora omitida por brevidade, mas permanece igual)

    // Lógica de Travar/Destravar o Body mantendo a posição
    useEffect(() => {
        if (isMenuOpen) {
            scrollYRef.current = window.scrollY;
            document.body.classList.add('no-scroll');
            document.body.style.top = `-${scrollYRef.current}px`;
        } else {
            if (document.body.classList.contains('no-scroll')) {
                document.body.classList.remove('no-scroll');
                document.body.style.top = '';
                window.scrollTo(0, scrollYRef.current);
            }
        }
    }, [isMenuOpen]);

    // Detecta o scroll (permanece igual)
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) return;
            const navbar = document.getElementById("navigation");
            if (navbar) {
                const scrolled = window.scrollY > navbar.clientHeight;
                setScrolled(scrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    // Função auxiliar de rolagem para descontar a navbar fixa
    const performSmoothScroll = (element: HTMLElement) => {
        // 80px para compensar a altura do header fixo
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    // Lógica Condicional de Rolagem
    const scrollToSection = (section: string) => {
        const element = document.getElementById(section);
        if (!element) return;

        // Se o menu mobile estiver aberto
        if (isMenuOpen) {
            
            // Destravamento imediato para permitir o scroll
            const currentScroll = scrollYRef.current;
            document.body.classList.remove('no-scroll');
            document.body.style.top = '';
            window.scrollTo(0, currentScroll);
            setIsMenuOpen(false); // Fecha o menu

            // Rola com um pequeno delay após a limpeza do DOM (necessário no mobile)
            setTimeout(() => {
                performSmoothScroll(element);
            }, 50);

        } else {
            // Se o menu está FECHADO (Desktop): Rola IMEDIATAMENTE.
            performSmoothScroll(element);
        }
    };

    return (
        <header id="navigation" className={`navbar navbar-fixed-top ${scrolled ? 'scrolled' : ''}`}>

            <nav className='navigation-bar'>

                {/* 1. Botão do Hamburguer (Mobile) - ESQUERDA */}
                <div className="menu-icon-container">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={toggleMenu}
                        className="menu-icon"
                    />
                </div>

                {/* 2. Menu Desktop - MEIO */}
                <div className="desktop-menu">
                    {navItems.map((item) => (
                        <a key={item[0]} onClick={() => scrollToSection(item[1])}>
                            {item[0]}
                        </a>
                    ))}
                </div>

                {/* 3. Botão de Alternar Modo (Toggle) - DIREITA */}
                <div className="mode-toggle">
                    {mode === 'dark' ? (
                        <LightModeIcon onClick={() => modeChange()} />
                    ) : (
                        // ✅ CORREÇÃO APLICADA AQUI
                        <DarkModeIcon onClick={() => modeChange()} />
                    )}
                </div>
            </nav>

            <div
                ref={menuRef}
                className={`sidebar ${isMenuOpen ? 'open' : ''}`}
                style={{ backgroundColor: mode === 'dark' ? '#0d1116' : '#f8f9fa' }}
            >
                <div className="sidebar-header">
                    <FontAwesomeIcon
                        icon={faTimes}
                        onClick={toggleMenu}
                        className="close-icon"
                    />
                </div>
                <ul className="sidebar-list">
                    {navItems.map((item) => (
                        <li key={item[0]} onClick={() => scrollToSection(item[1])}>
                            {item[0]}
                        </li>
                    ))}
                </ul>
            </div>

            {isMenuOpen && <div className="overlay"></div>}

        </header>
    );
}

export default Navigation;
