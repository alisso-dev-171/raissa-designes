import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Stack } from '@mui/material';

const WHATSAPP_LINK = 'https://wa.me/';
const INSTAGRAM_LINK = 'https://www.instagram.com/16raissacruz';
const EMAIL_ADDRESS = 'SEU_EMAIL_AQUI';

function Contact() {

  const handleContactClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <Box className="contact_wrapper" sx={{ textAlign: 'center', p: 4 }}>
          
          {/* Título e Subtítulo */}
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            🚀 Entre em Contato
          </Typography>
          <p className="subtitle">
            Pronto para dar vida ao seu próximo projeto? Escolha o melhor canal para conversarmos!
          </p>

          {/* Botões de Contato */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              onClick={() => handleContactClick(WHATSAPP_LINK)}
              size="large"
              className="contact-button"
              sx={{ minWidth: 200 }}
            >
              WhatsApp
            </Button>

            <Button
              variant="contained"
              startIcon={<InstagramIcon />}
              onClick={() => handleContactClick(INSTAGRAM_LINK)}
              size="large"
              className="contact-button"
              sx={{ minWidth: 200, 
                    background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' 
                  }}
            >
              Instagram
            </Button>
            
          </Stack>
          
          <p className="info-text">
            Responderei o mais rápido possível!
          </p>

        </Box>
      </div>
    </div>
  );
}

export default Contact;
