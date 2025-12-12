import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faPalette, faFileImage } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Foco em Impressos e Documentos (Cartazes, Convites, Diagramação)
const labelsFirst = [
    "Adobe InDesign",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "CorelDRAW",
    "Diagramação",
    "Fechamento de Arquivo",
    "Papelaria",
    "CMYK",
    "Tipografia"
];

// Foco em Identidade e Conceito
const labelsSecond = [
    "Criação de Logo",
    "Manual da Marca",
    "Teoria das Cores",
    "Vetorização",
    "Branding",
    "Identidade Visual",
    "Mockups",
    "Moodboards"
];

// Foco em Digital e Outras Ferramentas
const labelsThird = [
    "Canva",
    "Figma",
    "Adobe Acrobat",
    "Redes Sociais",
    "Edição de Imagens",
    "PowerPoint",
    "Google Slides",
    "Tratamento de Foto"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            {/* TITULO */}
          	<div className="skills-title">
            	<span className="separator-line"></span>
           			<h1>Experiência</h1>
            	<span className="separator-line"></span>
          	</div>
            <div className="skills-grid">

                {/* Seção de Impressos e Editorial */}
                <div className="skill">
                    <FontAwesomeIcon icon={faPenNib} size="3x"/>
                    <h3>Design Editorial & Impresso</h3>
                    <p className="skill-description">Especialista na criação de materiais tangíveis. Desenvolvo desde convites exclusivos e cartazes impactantes até a diagramação completa de revistas, livros e documentos corporativos, garantindo a qualidade final na impressão.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Ferramentas:</span><br/>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Seção de Identidade Visual */}
                <div className="skill">
                    <FontAwesomeIcon icon={faPalette} size="3x"/>
                    <h3>Identidade Visual</h3>
                    <p className="skill-description">Criação da cara do seu negócio. Desenvolvo logotipos, paletas de cores e manuais de marca para garantir que seus documentos e comunicações transmitam profissionalismo e consistência visual.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Habilidades:</span><br/>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Seção de Digital e Social */}
                <div className="skill">
                    <FontAwesomeIcon icon={faFileImage} size="3x"/>
                    <h3>Design Digital & Social</h3>
                    <p className="skill-description">Adaptação de peças gráficas para o ambiente digital. Criação de banners, posts para redes sociais e apresentações interativas, mantendo a estética apurada dos materiais impressos.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Softwares:</span><br/>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
