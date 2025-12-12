import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Ícones variados para representar as diferentes áreas de design
import { faCertificate, faPencilRuler, faLaptopCode, faTshirt, faGamepad, faLightbulb, faCouch, faBoxes, faEye } from '@fortawesome/free-solid-svg-icons'; 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'


const SchoolName = "Amazon cursos • Satarém"

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Certificações & Cursos</h1>
        <VerticalTimeline>
          
          {/* CERTIFICADO 1: Design Estratégico */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jan 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPencilRuler} />}
          >
            <h3 className="vertical-timeline-element-title">Design Estratégico & Inovação</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Aplicação de Design Thinking e Service Design para resolver problemas de negócios e criar valor.</p>
          </VerticalTimelineElement>
          
          {/* CERTIFICADO 2: Design de Software (UX/UI) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Set 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title">Design de Software e UI/UX</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Prototipagem em Figma, testes de usabilidade e criação de design systems para aplicativos.</p>
          </VerticalTimelineElement>
          
          {/* CERTIFICADO 3: Design de Moda */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faTshirt} />}
          >
            <h3 className="vertical-timeline-element-title">Criação e Desenvolvimento de Coleções (Moda)</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Pesquisa de tendências, desenho técnico de peças e gestão de produção têxtil.</p>
          </VerticalTimelineElement>
          
          {/* CERTIFICADO 4: Design de Jogos */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Mar 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGamepad} />}
          >
            <h3 className="vertical-timeline-element-title">Fundamentos de Design de Jogos</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Level Design, criação de mecânicas de jogo e roteirização de narrativas interativas.</p>
          </VerticalTimelineElement>

          {/* CERTIFICADO 5: Design de Iluminação */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Nov 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faLightbulb} />}
          >
            <h3 className="vertical-timeline-element-title">Projetos Luminotécnicos com DIALux</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Cálculo e especificação de iluminação para ambientes internos e externos, focando em estética e eficiência.</p>
          </VerticalTimelineElement>
          
          {/* CERTIFICADO 6: Design Gráfico */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Ago 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Design Gráfico: Identidade Visual</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Especialização em criação de logotipos, branding e manuais de marca utilizando Illustrator.</p>
          </VerticalTimelineElement>

          {/* CERTIFICADO 7: Design de Produtos */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Mai 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBoxes} />}
          >
            <h3 className="vertical-timeline-element-title">Desenvolvimento de Produto 3D e Prototipagem</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Modelagem 3D (SolidWorks/Rhino) e métodos de prototipagem rápida para produtos de consumo.</p>
          </VerticalTimelineElement>

          {/* CERTIFICADO 8: Design de Interiores */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Fev 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCouch} />}
          >
            <h3 className="vertical-timeline-element-title">Design de Interiores Residencial</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Planejamento de layout, escolha de materiais e ergonomia em projetos de design de interiores.</p>
          </VerticalTimelineElement>

          {/* CERTIFICADO 9: Design de Sobrancelha */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Nov 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faEye} />}
          >
            <h3 className="vertical-timeline-element-title">Visagismo e Design de Sobrancelha</h3>
            <h4 className="vertical-timeline-element-subtitle">{SchoolName}</h4>
            <p>Técnicas de harmonização facial, simetria e uso de ferramentas para modelagem de sobrancelhas.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
