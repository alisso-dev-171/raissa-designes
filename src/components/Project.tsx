import React, { useState } from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="projects-container" id="projects">
                                                <div className="section-title-wrapper">
                <span className="separator-line"></span>
                <h1>Designs</h1>
                <span className="separator-line"></span>
            </div>

            <div className="projects-grid">
                {/* Projeto 1 */}
                <div className="project">
                    <img
                        src={mock10}
                        className="zoom clickable-image"
                        alt="Identidade Visual"
                        width="100%"
                        onClick={() => openModal(mock10)}
                    />
                    <h2>Identidade Visual: Makes</h2>
                    <p>Criação de logotipo, paleta de cores e manual da marca para startups. Foco em transmitir modernidade e fluidez.</p>
                </div>

                {/* Projeto 3 */}
                <div className="project">
                    <img
                        src={mock04}
                        className="zoom clickable-image"
                        alt="Convite de Casamento"
                        width="100%"
                        onClick={() => openModal(mock04)}
                    />
                    <h2>Convite: Casamento Rústico</h2>
                    <p>Design de papelaria completa para casamento (convite, menu, tags). Estilo rústico com ilustrações florais em aquarela.</p>
                </div>

                {/* Projeto 5 */}
                <div className="project">
                    <img
                        src={mock06}
                        className="zoom clickable-image"
                        alt="Posts para Redes Sociais"
                        width="100%"
                        onClick={() => openModal(mock06)}
                    />
                    <h2>Social Media: Campanha de Verão</h2>
                    <p>Criação de um pacote de 12 posts e stories para Instagram para uma marca de moda praia, mantendo consistência visual da campanha.</p>
                </div>

                <div className="project">
                    <img
                        src={mock05}
                        className="zoom clickable-image"
                        alt="Impressão de Documentos Pessoais"
                        width="100%"
                        onClick={() => openModal(mock05)}
                    />
                    <h2>Impressão e Cópia: Documentos Pessoais</h2>
                    <p>Serviços de impressão em geral (colorida ou P&B), cópia de documentos (RG, CPF, CNH) e xerox de talões de contas (água, energia, telefone).</p>
                </div>
                 <div className="project">
                    <img src={mock02} className="zoom clickable-image" alt="Flyer Promocional" width="100%" onClick={() => openModal(mock02)}/>
                    <h2>Flyer: Inauguração de Loja</h2>
                    <p>Material impresso para divulgação local de nova loja de produtos naturais.</p>
                </div>
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <span className="close-button" onClick={closeModal}>&times;</span>
                        </div>
                        <img src={selectedImage} alt="Projeto ampliado" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
